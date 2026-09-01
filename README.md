# Fieldwise — HSE Field Companion (Phase 1 prototype)

**Live app:** https://dappmakeron-afk.github.io/hse-apper/

## For HSE officers using the app (not editing it) 

1. Open the link above in Chrome on your phone.
2. Tap the **three-dot menu** (top right) → **Add to Home screen** → **Install**.
   It now sits on your home screen as its own app icon, no browser bar.
3. It works with no signal once it's loaded the first time — the whole app
   is cached on your phone.
4. Records you save stay on **your own device only** — they're not shared
   with other officers automatically, and clearing your phone's browser
   data will erase them.

If a new task or feature gets added later, just reopen the app while you
have signal — it checks for updates automatically in the background.

---

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


## Data & privacy note

All saved field records live in the phone's/browser's `localStorage` only.
Nothing is sent anywhere. That also means records don't sync between
devices yet, and clearing browser data/cache on the phone will erase them
— worth knowing before you rely on it for anything you need to keep long
term. Phase 3 (in the roadmap we discussed) is where this moves to shared,
backed-up storage across the department.


