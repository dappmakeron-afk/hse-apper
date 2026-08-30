// ============================================================
// APP LOGIC — Fieldwise HSE
// Renders the task grid, builds the JHA/Toolbox/PPE tabs for a
// selected task, tracks checklist state, and saves field records
// to localStorage (device-only, no server, no account).
// ============================================================

const STORAGE_KEY = "fieldwise_records_v1";

const state = {
  currentTask: null,
  checks: { toolbox: {}, ppe: {} },
};

// ---------- ICONS (inline SVG, stroke = currentColor) ----------
const ICONS = {
  flame: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2c1 3-2 4-2 7a4 4 0 0 0 8 0c0-1-.5-2-1-2 .5 2-1 3-2 3-2 0-2-2-1-4-2 0-4 2-4 5a5 5 0 0 0 10 0c0-5-4-6-6-9 0 0-2 0-2 0z"/></svg>`,
  cylinder: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><ellipse cx="12" cy="5" rx="7" ry="2.5"/><path d="M5 5v14c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V5"/></svg>`,
  triangle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M12 2L2 20h20L12 2z"/><path d="M12 9v5"/><circle cx="12" cy="16.6" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  lock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="11" width="14" height="9" rx="1.5"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/><circle cx="12" cy="15.5" r="1.3" fill="currentColor" stroke="none"/></svg>`,
  crane: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h9"/><path d="M5 21V8l13-3v3"/><path d="M18 8v13"/><path d="M14 21l4-4"/></svg>`,
  shovel: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 3l4 4-9 9-4-4z"/><path d="M12 12L4 20"/><path d="M4 20c-1-1-1-3 0-4"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="4" width="14" height="17" rx="1.5"/><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M8 11h8M8 15h8M8 19h5"/></svg>`,
  info: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><circle cx="12" cy="8" r="0.9" fill="currentColor" stroke="none"/></svg>`,
  spray: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 8h6l1.5 12a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 20z"/><path d="M10 8V5a2 2 0 0 1 4 0v3"/><path d="M4 6h1.5M4 9h1.5M4 12h1.5"/></svg>`,
  brick: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="8" height="5"/><rect x="13" y="5" width="8" height="5"/><rect x="7" y="14" width="8" height="5"/><path d="M3 14h2M19 14h2"/></svg>`,
  bolt: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="12" height="9" rx="1"/><path d="M14 10.5h3.5L20 13.5V16h-2"/><circle cx="6.5" cy="18.3" r="1.6"/><circle cx="16.5" cy="18.3" r="1.6"/><path d="M4.3 18.3h.8M14 18.3h1M19 16h-.7"/></svg>`,
  person: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="7" r="3.2"/><path d="M5 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/></svg>`,
  anchor: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="5" r="2"/><path d="M12 7v13"/><path d="M6 13c0 4 3 6.5 6 7 3-.5 6-3 6-7"/><path d="M4 13h4M16 13h4"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/><path d="M10 11v6M14 11v6"/></svg>`,
  badge: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="2.5"/><path d="M8 17c0-2 1.8-3 4-3s4 1 4 3"/></svg>`,
};

// ---------- VIEW ROUTING ----------
function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelectorAll(".navbtn").forEach((b) => {
    if (b.dataset.view === name) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
  if (name === "records") renderRecordsList();
  if (name === "reference") renderReferenceIfNeeded();
  window.scrollTo(0, 0);
}

document.querySelectorAll(".navbtn").forEach((btn) => {
  btn.addEventListener("click", () => showView(btn.dataset.view));
});
document.getElementById("backToHome").addEventListener("click", () => showView("home"));

// ---------- HOME: TASK GRID ----------
function renderTaskGrid() {
  const grid = document.getElementById("taskGrid");
  grid.innerHTML = TASK_LIBRARY.map(
    (t) => `
    <button class="task-card" data-id="${t.id}">
      <span class="task-icon">${ICONS[t.icon] || ICONS.info}</span>
      <span>
        <p class="task-card-title">${t.label}</p>
        <p class="task-card-sub">${t.sub}</p>
      </span>
      <span class="task-card-count">${t.hazards.length} hazards</span>
    </button>`
  ).join("");

  grid.querySelectorAll(".task-card").forEach((card) => {
    card.addEventListener("click", () => openTask(card.dataset.id));
  });
}

// ---------- TASK DETAIL ----------
function openTask(id) {
  const task = TASK_LIBRARY.find((t) => t.id === id);
  if (!task) return;
  state.currentTask = task;
  state.checks = { toolbox: {}, ppe: {} };

  document.getElementById("ticketHead").innerHTML = `
    <p class="ticket-eyebrow">Job Hazard Kit</p>
    <h2 class="ticket-title">${task.label}</h2>
    <p class="ticket-sub">${task.sub}</p>
    <div class="ticket-permits">
      ${
        task.permits.length
          ? task.permits.map((p) => `<span class="permit-chip">${p}</span>`).join("")
          : `<span class="permit-chip none">No standing permit — use judgement / site procedure</span>`
      }
    </div>`;

  renderJHA(task);
  renderToolbox(task);
  renderPPE(task);

  // reset tabs to first
  document.querySelectorAll(".tab").forEach((t, i) => t.classList.toggle("active", i === 0));
  document.querySelectorAll(".tabpanel").forEach((p, i) => p.classList.toggle("active", i === 0));

  // reset record fields
  document.getElementById("fieldSite").value = "";
  document.getElementById("fieldSupervisor").value = "";
  document.getElementById("fieldDate").value = new Date().toISOString().slice(0, 10);
  document.getElementById("saveHint").textContent = "";

  showView("task");
}

function renderJHA(task) {
  const panel = document.getElementById("panel-jha");
  panel.innerHTML =
    `<p class="section-label">Sequence of hazards — assess &amp; control before work starts</p>` +
    task.hazards
      .map((h) => {
        const score = riskScore(h.likelihood, h.severity);
        const band = riskBand(score);
        return `
      <div class="hazard-card">
        <div class="hazard-top">
          <span class="hazard-title">${h.hazard}</span>
          <span class="risk-badge ${band.cls}">${band.label}</span>
        </div>
        <div class="hazard-scores">
          <span>Likelihood: <b>${h.likelihood}</b></span>
          <span>Severity: <b>${h.severity}</b></span>
          <span>Score: <b>${score}</b></span>
        </div>
        <ul class="control-list">
          ${h.controls.map((c) => `<li>${c}</li>`).join("")}
        </ul>
        <div class="why-box">${ICONS.info}<span>${h.why}</span></div>
      </div>`;
      })
      .join("");
}

function renderToolbox(task) {
  const panel = document.getElementById("panel-toolbox");
  panel.innerHTML =
    `<p class="section-label">Read aloud &amp; confirm with the crew</p>` +
    `<ul class="check-list" id="toolboxList">` +
    task.toolboxTalk
      .map(
        (item, i) => `
      <li class="check-item" data-key="tb-${i}">
        <span class="check-box"></span>
        <span class="check-label">${item}</span>
      </li>`
      )
      .join("") +
    `</ul>`;
  wireChecklist("toolboxList", "toolbox");
}

function renderPPE(task) {
  const panel = document.getElementById("panel-ppe");
  panel.innerHTML =
    `<p class="section-label">Confirm before work starts</p>` +
    `<ul class="check-list" id="ppeList">` +
    task.ppe
      .map(
        (item, i) => `
      <li class="check-item" data-key="ppe-${i}">
        <span class="check-box"></span>
        <span class="check-label">${item}</span>
      </li>`
      )
      .join("") +
    `</ul>`;
  wireChecklist("ppeList", "ppe");
}

function wireChecklist(listId, group) {
  const list = document.getElementById(listId);
  list.querySelectorAll(".check-item").forEach((item) => {
    const key = item.dataset.key;
    item.addEventListener("click", () => {
      const on = !state.checks[group][key];
      state.checks[group][key] = on;
      item.classList.toggle("done", on);
      item.querySelector(".check-box").classList.toggle("checked", on);
    });
  });
}

// ---------- TABS ----------
document.getElementById("tabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t === btn));
  document
    .querySelectorAll(".tabpanel")
    .forEach((p) => p.classList.toggle("active", p.id === "panel-" + btn.dataset.tab));
});

// ---------- PDF EXPORT (browser print → Save as PDF) ----------
document.getElementById("exportPdfBtn").addEventListener("click", () => {
  const task = state.currentTask;
  if (!task) return;

  const site = document.getElementById("fieldSite").value.trim() || "—";
  const supervisor = document.getElementById("fieldSupervisor").value.trim() || "—";
  const date = document.getElementById("fieldDate").value || new Date().toISOString().slice(0, 10);
  const generated = new Date().toLocaleString();

  document.getElementById("printHeader").innerHTML = `
    <p class="ph-app">Fieldwise — HSE Field Companion</p>
    <h1>${task.label} — Field Record</h1>
    <div class="ph-meta">
      <span>Site: <b>${site}</b></span>
      <span>Supervisor: <b>${supervisor}</b></span>
      <span>Date: <b>${date}</b></span>
      <span>Generated: <b>${generated}</b></span>
    </div>
    <div class="ph-permits">
      ${task.permits.length ? "Permits required: " + task.permits.join(", ") : "No standing permit required"}
    </div>`;

  window.print();
});

// ---------- REFERENCE LIBRARY (PPE / Tools / OSH Act) ----------
function renderPPEReference() {
  const panel = document.getElementById("refpanel-ppe");
  panel.innerHTML = PPE_LIBRARY.map(
    (item) => `
    <div class="ref-card">
      <p class="ref-card-title">${item.name}</p>
      <p class="ref-card-desc">${item.description}</p>
      <p class="ref-card-when"><b>When to use:</b> ${item.whenToUse}</p>
      ${item.act ? `<div class="ref-card-act">${ICONS.info}<span>${item.act}</span></div>` : ""}
    </div>`
  ).join("");
}

function renderToolsReference() {
  const panel = document.getElementById("refpanel-tools");
  panel.innerHTML = TOOLS_LIBRARY.map((tool) => {
    const isHot = tool.classification.toLowerCase().startsWith("hot");
    const badgeCls = isHot ? "class-hot" : "class-cold";
    return `
    <div class="ref-card">
      <div class="ref-card-top">
        <p class="ref-card-title">${tool.name}</p>
        <span class="class-badge ${badgeCls}">${tool.classification}</span>
      </div>
      <p class="ref-card-desc">${tool.classificationNote}</p>
      <p class="ref-card-when"><b>PPE required:</b> ${tool.ppe.join(" · ")}</p>
      <p class="ref-card-when"><b>Watch for:</b> ${tool.hazardNote}</p>
    </div>`;
  }).join("");
}

function renderOshActReference() {
  const panel = document.getElementById("refpanel-act");
  panel.innerHTML =
    `<p class="section-label">OSH Act Chapter 88:08 — plain-language summary, section numbers for lookup</p>` +
    OSH_ACT_REFERENCE.map(
      (ref) => `
    <div class="ref-card">
      <div class="ref-card-top">
        <p class="ref-card-title">${ref.title}</p>
        <span class="act-badge">${ref.section}</span>
      </div>
      <p class="ref-card-desc">${ref.text}</p>
    </div>`
    ).join("") +
    `<p class="ref-footnote">Summarised from the unofficial consolidated Act (Ministry of the Attorney General and Legal Affairs, updated to 31 Dec 2016). Always check the current authorised text at rgd.legalaffairs.gov.tt before relying on this for a legal or disciplinary matter.</p>`;
}

function renderChemicalsReference() {
  const panel = document.getElementById("refpanel-chemicals");
  panel.innerHTML =
    `<p class="section-label">Common substances on a T&T petrochemical estate — not a substitute for the product's own SDS</p>` +
    CHEMICALS_LIBRARY.map(
      (c) => `
    <div class="ref-card">
      <p class="ref-card-title">${c.name}</p>
      <p class="ref-card-desc"><b>${c.hazardClass}</b></p>
      <p class="ref-card-when"><b>Signs of exposure:</b> ${c.exposureSigns}</p>
      <p class="ref-card-when"><b>Immediate response:</b> ${c.immediateResponse}</p>
      <p class="ref-card-when"><b>Incompatible with:</b> ${c.incompatible}</p>
      <div class="ref-card-act">${ICONS.info}<span>${c.note}</span></div>
    </div>`
    ).join("") +
    `<p class="ref-footnote">Always defer to the specific product's Safety Data Sheet for exact figures, first-aid measures, and handling requirements — this is a quick-recognition reference, not a replacement for it.</p>`;
}

function renderEmaReference() {
  const panel = document.getElementById("refpanel-ema");
  panel.innerHTML =
    `<p class="section-label">Environmental Management Act Ch. 35:05 — separate legislation from the OSH Act, regulating environmental impact rather than workplace safety</p>` +
    EMA_REFERENCE.map(
      (ref) => `
    <div class="ref-card">
      <div class="ref-card-top">
        <p class="ref-card-title">${ref.title}</p>
        <span class="act-badge">${ref.section}</span>
      </div>
      <p class="ref-card-desc">${ref.text}</p>
    </div>`
    ).join("") +
    `<p class="ref-footnote">Summarised from the unofficial consolidated Act, updated to 31 Dec 2016. Environmental notification (EMA) is in addition to, not instead of, any OSH Act accident notification or your site's emergency response procedure.</p>`;
}

function renderWeatherReference() {
  const panel = document.getElementById("refpanel-weather");
  const hs = WEATHER_REFERENCE.heatStress;
  const lt = WEATHER_REFERENCE.lightning;
  panel.innerHTML = `
    <div class="ref-card">
      <p class="ref-card-title">${hs.title}</p>
      <p class="ref-card-desc">${hs.intro}</p>
      <p class="ref-card-when"><b>Early signs:</b> ${hs.earlySigns.join(" · ")}</p>
      <p class="ref-card-when"><b>Severe signs (emergency):</b> ${hs.severeSigns.join(" · ")}</p>
      <ul class="control-list">${hs.response.map((r) => `<li>${r}</li>`).join("")}</ul>
      <div class="ref-card-act">${ICONS.info}<span>Prevention: ${hs.prevention.join(" · ")}</span></div>
    </div>
    <div class="ref-card">
      <p class="ref-card-title">${lt.title}</p>
      <p class="ref-card-desc">${lt.intro}</p>
      <p class="ref-card-when"><b>Stop-work triggers:</b></p>
      <ul class="control-list">${lt.triggers.map((t) => `<li>${t}</li>`).join("")}</ul>
      <p class="ref-card-when"><b>Actions:</b></p>
      <ul class="control-list">${lt.actions.map((a) => `<li>${a}</li>`).join("")}</ul>
    </div>`;
}

function renderIncidentReference() {
  const panel = document.getElementById("refpanel-incident");
  const inv = INCIDENT_INVESTIGATION;
  panel.innerHTML = `
    <div class="ref-card">
      <p class="ref-card-title">${inv.title}</p>
      <p class="ref-card-desc">${inv.intro}</p>
    </div>` +
    inv.steps.map(
      (s, i) => `
    <div class="ref-card">
      <div class="ref-card-top">
        <p class="ref-card-title">${i + 1}. ${s.title}</p>
      </div>
      <p class="ref-card-desc">${s.description}</p>
    </div>`
    ).join("") +
    `<div class="ref-card">
      <p class="ref-card-title">Worked example — the 5 Whys</p>
      <p class="ref-card-desc"><b>Issue:</b> ${inv.example.issue}</p>
      <ul class="control-list">${inv.example.chain.map((c) => `<li>${c}</li>`).join("")}</ul>
    </div>`;
}

document.getElementById("refTabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll("#refTabs .tab").forEach((t) => t.classList.toggle("active", t === btn));
  document
    .querySelectorAll("#view-reference .tabpanel")
    .forEach((p) => p.classList.toggle("active", p.id === "refpanel-" + btn.dataset.reftab));
});

// ---------- SAVE RECORD ----------
document.getElementById("saveRecordBtn").addEventListener("click", () => {
  const task = state.currentTask;
  if (!task) return;

  const record = {
    id: "rec_" + Date.now(),
    taskId: task.id,
    taskLabel: task.label,
    site: document.getElementById("fieldSite").value.trim(),
    supervisor: document.getElementById("fieldSupervisor").value.trim(),
    date: document.getElementById("fieldDate").value || new Date().toISOString().slice(0, 10),
    savedAt: new Date().toISOString(),
    toolboxChecked: Object.values(state.checks.toolbox).filter(Boolean).length,
    toolboxTotal: task.toolboxTalk.length,
    ppeChecked: Object.values(state.checks.ppe).filter(Boolean).length,
    ppeTotal: task.ppe.length,
    hazardCount: task.hazards.length,
    permits: task.permits,
  };

  const records = loadRecords();
  records.unshift(record);
  saveRecords(records);

  const hint = document.getElementById("saveHint");
  hint.textContent = "Saved to this device.";
  setTimeout(() => (hint.textContent = ""), 3000);
});

// ---------- RECORDS STORAGE ----------
function loadRecords() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}
function saveRecords(records) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  } catch (e) {
    console.error("Could not save — device storage may be full.", e);
  }
}
function deleteRecord(id) {
  saveRecords(loadRecords().filter((r) => r.id !== id));
  renderRecordsList();
}

function renderRecordsList() {
  const records = loadRecords();
  const list = document.getElementById("recordsList");
  const empty = document.getElementById("recordsEmpty");

  if (!records.length) {
    list.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";

  list.innerHTML = records
    .map(
      (r) => `
    <div class="record-card" data-id="${r.id}">
      <div class="record-card-top">
        <span class="record-card-title">${r.taskLabel}</span>
        <span class="record-card-date">${r.date}</span>
      </div>
      <div class="record-card-meta">
        ${r.site ? r.site + " · " : ""}${r.supervisor ? r.supervisor + " · " : ""}
        ${r.hazardCount} hazards · Toolbox ${r.toolboxChecked}/${r.toolboxTotal} · PPE ${r.ppeChecked}/${r.ppeTotal}
      </div>
      <div class="record-card-actions">
        <button class="mini-btn" data-action="reopen" data-id="${r.id}">Reopen task</button>
        <button class="mini-btn danger" data-action="delete" data-id="${r.id}">Delete</button>
      </div>
    </div>`
    )
    .join("");

  list.querySelectorAll("[data-action='delete']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Delete this saved record? This can't be undone.")) deleteRecord(btn.dataset.id);
    });
  });
  list.querySelectorAll("[data-action='reopen']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rec = records.find((r) => r.id === btn.dataset.id);
      if (rec) openTask(rec.taskId);
    });
  });
}

// ---------- OFFLINE BANNER ----------
function updateOfflineBanner() {
  document.getElementById("offlineBanner").classList.toggle("show", !navigator.onLine);
}
window.addEventListener("online", updateOfflineBanner);
window.addEventListener("offline", updateOfflineBanner);

// ---------- SERVICE WORKER (offline support) ----------
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch((err) => {
      console.warn("Service worker registration failed:", err);
    });
  });
}

// ---------- INIT ----------
let referenceRendered = false;
function renderReferenceIfNeeded() {
  if (referenceRendered) return;
  renderPPEReference();
  renderToolsReference();
  renderOshActReference();
  renderChemicalsReference();
  renderEmaReference();
  renderWeatherReference();
  renderIncidentReference();
  referenceRendered = true;
}

renderTaskGrid();
updateOfflineBanner();
