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
renderTaskGrid();
updateOfflineBanner();
