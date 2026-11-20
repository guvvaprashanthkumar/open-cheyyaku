Open Cheyyaku - Android install (5 minutes, free)

Files in this folder:
  index.html, manifest.webmanifest, sw.js, icon-192.png, icon-512.png
Upload ALL five files together to any https website host, for example GitHub Pages.

GitHub Pages steps (on your PC):
 1. Make a free account at github.com and click New repository. Name it e.g. open-cheyyaku. Keep it Public.
 2. Click "uploading an existing file", drag in the 5 files, click Commit changes.
 3. Settings > Pages > Branch: main, folder: / (root) > Save.
 4. After about 1 minute your address is https://YOURNAME.github.io/open-cheyyaku/
 5. On the phone open that address in Chrome. Tap the menu (3 dots) > "Install app" (or "Add to Home screen").

Public repo note: only the app code is public. Your files and passwords never leave the phone.

HOW TO UPDATE an app you already installed (your files stay safe):
 - USB way: on the PC run the server again in this folder (python -m http.server 8000) and run: adb reverse tcp:8000 tcp:8000
   Then open the app on the phone, wait 3 seconds, close it fully and open it again.
 - GitHub way: upload the 5 files again (replace the old ones), then open the app, close it fully and open it again.
 - Check Settings (gear icon): it shows "version 2" when the update worked.
 - Do NOT clear Chrome "site data" - that erases the vault. Make a backup first (Settings > Backup).

