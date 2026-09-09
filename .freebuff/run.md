# Run doc — DermaSync landing page (Vite + React + Tailwind v4)

## 1. Reproduce the uncommitted artifacts

A fresh checkout needs one step before the server can run:

- Install dependencies with npm (lockfile: `package-lock.json`):
  ```
  npm install
  ```

No `.env*` files are used by this project — nothing to copy from the main checkout.
No build artifacts are required for the dev server (`npm run build` is only needed
for the production bundle in `dist/`).

## 2. Run the dev server

- Default port: **5173** (Vite default). If taken, pass `-- --port <free-port>`.
- Start detached on Windows (stdout and stderr must go to different files):
  ```
  powershell -NoProfile -Command "(Start-Process -FilePath 'npm.cmd' -ArgumentList 'run','dev' -RedirectStandardOutput 'D:\landing\.freebuff\preview.log' -RedirectStandardError 'D:\landing\.freebuff\preview.log.err' -WindowStyle Hidden -PassThru).Id"
  ```
  Note: this launcher may not print before the tool-call timeout, but the server
  still starts. Fallback for the pid: `netstat -ano | findstr :5173`.
- Confirm it survived: `powershell -NoProfile -Command "Get-Process -Id <pid>"`.
- Wait until it answers: `curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/`
  (expect `200`).
- Register the preview with the URL `http://localhost:5173/` and the pid.
