# APK drop-in folder

Place the release build here as:

    public/app/release/dermasync-latest.apk

Vite serves this folder as-is, so the file becomes downloadable at exactly:

    /app/release/dermasync-latest.apk

That is the URL every "Download for Android" button on the landing page already
points to (see src/config.js). No code change is needed if you keep this
filename — just drop the file in and rebuild (`npm run build`).

Notes:
- Update version/size labels in `src/config.js` if they change
  (currently `v1.0.0 · ~120 MB · Android 8.0+`).
- In production, make sure your host serves `.apk` with
  `Content-Type: application/vnd.android.package-archive` so phones download
  instead of navigating.
