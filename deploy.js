const ftp = require("basic-ftp")
const path = require("path")
const fs = require("fs")
require("dotenv").config()

async function deploy() {
    const client = new ftp.Client()
    client.ftp.verbose = true

    try {
        await client.access({
            host: process.env.FTP_HOST,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASSWORD,
            secure: true
        })

        await client.ensureDir("/html")
        await client.clearWorkingDir()

        // Upload everything from the 'dist' folder
        await client.uploadFromDir("dist")
        await client.uploadFrom("./.htaccess", ".htaccess")
    } catch (err) {
        console.error(err)
    }

    client.close()
}

deploy()
