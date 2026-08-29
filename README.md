# Fieldwise — HSE Field Companion (Phase 1 prototype)

A task-based Job Hazard Assessment / Toolbox Talk / PPE generator for plant
HSE officers. Pick a task, get the hazards, controls, and a "why" note for
each control. Fill it in on site, save it to your phone. No server, no
account, no cost.

## What's in here

```
hse-app/
├── index.html          the app shell / all views
├── styles.css           the visual design (dark "control-room" theme)
├── data.js               the hazard/task knowledge library — EDIT THIS to add tasks
├── app.js                 the app logic (rendering, checklists, saving)
├── manifest.json           makes it installable on Android as a home-screen app
├── service-worker.js        caches the app so it works with no signal on site
└── icons/                    app icons
```

## Run it locally in VS Code

1. Open the `hse-app` folder in VS Code.
2. Install the **Live Server** extension (search "Live Server" by Ritwick
   Dey in the Extensions panel) — this is the easiest way to run a PWA
   locally, since service workers need to be served over `http://`, not
   opened as a plain file.
3. Right-click `index.html` → **Open with Live Server**.
4. It opens in your browser at something like `http://127.0.0.1:5500`.
   Everything works there, including offline mode (try switching your
   laptop to airplane mode after the first load, then refresh).

## Try it on your Android phone before deploying

While Live Server is running, your phone (on the same Wi-Fi) can open
`http://<your-computer's-local-IP>:5500` — VS Code's status bar or the Live
Server output shows this address. Open it in Chrome on your phone, then use
Chrome's menu → **Add to Home screen** to test the installed-app feel.

## Data & privacy note

All saved field records live in the phone's/browser's `localStorage` only.
Nothing is sent anywhere. That also means records don't sync between
devices yet, and clearing browser data/cache on the phone will erase them
— worth knowing before you rely on it for anything you need to keep long
term. Phase 3 (in the roadmap we discussed) is where this moves to shared,
backed-up storage across the department.

## What's deliberately NOT in Phase 1

- No accounts/login, no multi-user data, no cloud sync
- No exporting to PDF (records are in-app for now; export is a natural
  Phase 2 addition)
- Task list is fixed to the 8 highest-frequency plant activities — adding
  more is just editing `data.js` per the guide above
