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

## Deploy for free — GitHub Pages

This gets you a permanent `https://` URL you can open on any phone, with
zero hosting cost:

1. Create a free GitHub account if you don't have one.
2. Create a new **public** repository (e.g. `fieldwise-hse`).
3. In VS Code: `Source Control` panel → **Publish to GitHub**, or from the
   terminal inside the `hse-app` folder:
   ```
   git init
   git add .
   git commit -m "Fieldwise HSE Phase 1"
   git branch -M main
   git remote add origin https://github.com/<your-username>/fieldwise-hse.git
   git push -u origin main
   ```
4. On GitHub: repo → **Settings** → **Pages** → under "Build and
   deployment," set Source to **Deploy from a branch**, branch `main`,
   folder `/ (root)`. Save.
5. After a minute or two, GitHub gives you a URL like
   `https://<your-username>.github.io/fieldwise-hse/`. Open that on your
   Android phone in Chrome, then **Add to Home screen** — it now behaves
   like a real installed app, works offline after the first load, and cost
   nothing to host.

Any time you edit the app, `git add . && git commit -m "..." && git push`
updates the live version. If you change any cached file, bump
`CACHE_NAME` in `service-worker.js` (e.g. `fieldwise-v2`) so installed
phones pick up the update instead of serving the old cached version.

## Adding or editing tasks (this is the part you'll do most)

Everything content-related lives in `data.js` in one array called
`TASK_LIBRARY`. Each task is one object. Copy an existing task block as a
template — the shape is:

```js
{
  id: "unique-id",
  label: "Task Name",
  sub: "One-line description",
  icon: "flame",              // see ICONS list in app.js for available icons
  permits: ["Permit Name"],   // [] if none required
  hazards: [
    {
      hazard: "What could go wrong",
      likelihood: "Unlikely" | "Possible" | "Likely",
      severity: "Minor" | "Moderate" | "Major" | "Fatal",
      controls: ["Control 1", "Control 2"],
      why: "One sentence on why this control matters / where it comes from"
    }
  ],
  toolboxTalk: ["Point 1", "Point 2"],
  ppe: ["Item 1", "Item 2"]
}
```

Add the new object to the `TASK_LIBRARY` array in `data.js`, save, and it
appears on the home screen automatically — no other file needs to change.

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
