# Website Dr. Clemens Seidl

Next.js (App Router, TypeScript) mit statischem Export.

- `npm run dev` – Entwicklungsserver
- `npm run build` – erzeugt die statische Seite in `out/`
- `npm run deploy` – baut und lädt `out/` per FTP auf den world4you-Server (Zugangsdaten in `.env`)

Jede Route wird zu `<route>/index.html` exportiert (`trailingSlash: true`), dadurch braucht der Apache keine Rewrite-Regeln. Die `.htaccess` liegt in `public/` und landet dadurch automatisch in `out/`. Der Inhalt von `out/` ist die komplette Seite und kann auch manuell hochgeladen werden.
