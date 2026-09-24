const ftp = require("basic-ftp")
const path = require("path")
const fs = require("fs")
require("dotenv").config()

// Config via env to make TLS and backup behavior controllable without code changes
const FTP_HOST = process.env.FTP_HOST
const FTP_USER = process.env.FTP_USER
const FTP_PASSWORD = process.env.FTP_PASSWORD
const FTP_PORT = process.env.FTP_PORT ? Number(process.env.FTP_PORT) : undefined
const FTP_REMOTE_DIR = process.env.FTP_REMOTE_DIR || "/html"
const FTP_SECURE = process.env.FTP_SECURE !== "false" // default true
const FTP_REJECT_UNAUTHORIZED = process.env.FTP_REJECT_UNAUTHORIZED !== "false" // default true
const FTP_VERBOSE = process.env.FTP_VERBOSE === "true"
const ENABLE_BACKUP = process.env.FTP_BACKUP !== "false" // default true
const PRUNE_DIRS = (process.env.FTP_PRUNE_DIRS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

const WAIT_MS_BASE = 500

const createClient = () => {
    const client = new ftp.Client(30_000)
    client.ftp.verbose = FTP_VERBOSE
    return client
}

async function connect(client) {
    await client.access({
        host: FTP_HOST,
        port: FTP_PORT,
        user: FTP_USER,
        password: FTP_PASSWORD,
        secure: FTP_SECURE,
        secureOptions: { rejectUnauthorized: FTP_REJECT_UNAUTHORIZED }
    })
    await client.ensureDir(FTP_REMOTE_DIR) // also cds into the target dir
}

async function withRetry(fn, label, options = {}) {
    const { attempts = 3, reconnect } = options
    let lastError
    for (let i = 1; i <= attempts; i++) {
        try {
            return await fn()
        } catch (err) {
            lastError = err
            const waitMs = WAIT_MS_BASE * i
            console.warn(`${label} failed (attempt ${i}/${attempts}): ${err.message}. Retrying in ${waitMs}ms...`)
            if (reconnect) {
                try {
                    await reconnect(err)
                } catch (reErr) {
                    console.warn(`Reconnect failed: ${reErr.message}`)
                }
            }
            await new Promise((res) => setTimeout(res, waitMs))
        }
    }
    throw lastError
}

async function deploy() {
    let client = createClient()

    const reconnect = async () => {
        try { client.close() } catch (_) { /* no-op */ }
        client = createClient()
        await connect(client)
    }

    console.log("Connecting to server...")

    try {
        await connect(client)

        console.log("Connected to server.")

        if (ENABLE_BACKUP) {
            if (PRUNE_DIRS.length) {
                for (const dir of PRUNE_DIRS) {
                    const remotePath = path.posix.join(FTP_REMOTE_DIR, dir)
                    await withRetry(() => client.removeDir(remotePath), `Prune remote dir ${remotePath}`, { reconnect })
                    console.log(`Pruned remote dir: ${remotePath}`)
                }
            }
            const backupDir = path.join(process.cwd(), "backup")
            if (!fs.existsSync(backupDir)) {
                fs.mkdirSync(backupDir, { recursive: true })
            }
            try {
                await withRetry(() => client.downloadToDir(backupDir, FTP_REMOTE_DIR), "Backup download", { reconnect })
                console.log(`Backup downloaded to ${backupDir}`)
            } catch (err) {
                console.warn(`Backup skipped after retries: ${err.message}`)
            }
        }

        await withRetry(() => client.clearWorkingDir(), "Remote clear", { reconnect })

        console.log("Uploading files...")

        await withRetry(() => client.uploadFromDir("out"), "Upload out", { reconnect })

        console.log("Deployment completed successfully.")
    } catch (err) {
        console.error("Deployment failed:", err.message)
        if (err.code) console.error(`Code: ${err.code}`)
        if (err.stack) console.error(err.stack)
        throw err
    } finally {
        try { client.close() } catch (_) { /* no-op */ }
    }
}

function buildProject() {
    const { execSync } = require("child_process")
    console.log("Building project...")
    execSync("npm run build", { stdio: "inherit" })
    console.log("Build completed.")
}

buildProject()
deploy().catch(() => process.exit(1))
