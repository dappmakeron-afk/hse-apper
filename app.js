// ============================================================
// APP LOGIC — Fieldwise HSE
// Renders the task grid, builds the JHA/Toolbox/PPE tabs for a
// selected task, tracks checklist state, and saves field records
// to localStorage (device-only, no server, no account).
// ============================================================

const STORAGE_KEY = "fieldwise_records_v1";
const STORAGE_KEY_INCIDENTS = "fieldwise_incidents_v1";

const state = {
  currentTask: null,
  checks: { toolbox: {}, ppe: {} },
  signoffs: [],
  incident: null,       // current incident's id when editing an existing one, else null
  incidentSignoffs: [],
  incidentType: "Near-Miss",
  incidentInjury: false,
  incidentEnv: false,
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

// ---------- SIGNATURE PAD ----------
// Fixed internal resolution (independent of on-screen size or
// visibility), so it works even inside a tab that isn't the
// active one yet, and restores cleanly when reopening a record.
function attachSignaturePad(canvas, onChange) {
  const W = canvas.width || 600;
  const H = canvas.height || 200;
  const ctx = canvas.getContext("2d");
  let drawing = false;
  let hasInk = false;

  function paintBlank() {
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, W, H);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#17191A";
  }
  paintBlank();

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = W / rect.width;
    const scaleY = H / rect.height;
    return { x: (e.clientX - rect.left) * scaleX, y: (e.clientY - rect.top) * scaleY };
  }

  canvas.addEventListener("pointerdown", (e) => {
    drawing = true;
    hasInk = true;
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    const p = getPos(e);
    ctx.beginPath();
    ctx.moveTo(p.x, p.y);
    e.preventDefault();
  });
  canvas.addEventListener("pointermove", (e) => {
    if (!drawing) return;
    const p = getPos(e);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    e.preventDefault();
  });
  function endStroke() {
    if (!drawing) return;
    drawing = false;
    if (onChange) onChange(hasInk ? canvas.toDataURL("image/png") : null);
  }
  canvas.addEventListener("pointerup", endStroke);
  canvas.addEventListener("pointercancel", endStroke);
  canvas.addEventListener("pointerleave", endStroke);

  canvas._clear = function () {
    paintBlank();
    hasInk = false;
    if (onChange) onChange(null);
  };
  canvas._loadImage = function (dataUrl) {
    if (!dataUrl) return;
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, W, H);
      hasInk = true;
    };
    img.src = dataUrl;
  };
  return canvas;
}

// ---------- CREW / WITNESS SIGN-OFF PANEL (shared by task + incident) ----------
function renderSignoffPanel(panelId, signoffsArray, addBtnLabel) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  panel.innerHTML = `
    <p class="section-label">${addBtnLabel === "task" ? "Have each crew member sign to confirm they were briefed" : "Anyone present can sign to confirm this account"}</p>
    <div class="signoff-rows"></div>
    <button type="button" class="btn-secondary signoff-add-btn" id="${panelId}-add">+ Add signature</button>`;

  function renderRows() {
    const rowsEl = panel.querySelector(".signoff-rows");
    rowsEl.innerHTML = signoffsArray
      .map(
        (s, i) => `
      <div class="signoff-row" data-i="${i}">
        <input type="text" class="signoff-name" placeholder="Name" value="${(s.name || "").replace(/"/g, "&quot;")}" />
        <div class="sig-wrap">
          <canvas class="sig-pad" width="600" height="200"></canvas>
          <div class="sig-actions">
            <button type="button" class="sig-clear">Clear</button>
            <button type="button" class="sig-remove">Remove</button>
          </div>
        </div>
      </div>`
      )
      .join("");

    rowsEl.querySelectorAll(".signoff-row").forEach((row) => {
      const i = Number(row.dataset.i);
      const nameInput = row.querySelector(".signoff-name");
      nameInput.addEventListener("input", () => {
        signoffsArray[i].name = nameInput.value;
      });

      const canvas = row.querySelector(".sig-pad");
      attachSignaturePad(canvas, (dataUrl) => {
        signoffsArray[i].sig = dataUrl;
      });
      if (signoffsArray[i].sig) canvas._loadImage(signoffsArray[i].sig);

      row.querySelector(".sig-clear").addEventListener("click", () => {
        canvas._clear();
        signoffsArray[i].sig = null;
      });
      row.querySelector(".sig-remove").addEventListener("click", () => {
        signoffsArray.splice(i, 1);
        renderRows();
      });
    });
  }

  panel.querySelector(`#${panelId}-add`).addEventListener("click", () => {
    signoffsArray.push({ name: "", sig: null });
    renderRows();
  });

  renderRows();
}
function showView(name) {
  document.querySelectorAll(".view").forEach((v) => v.classList.remove("active"));
  document.getElementById("view-" + name).classList.add("active");
  document.querySelectorAll(".navbtn").forEach((b) => {
    if (b.dataset.view === name) b.setAttribute("aria-current", "page");
    else b.removeAttribute("aria-current");
  });
  if (name === "records") { renderRecordsList(); renderIncidentsList(); }
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
  state.signoffs = [];

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
  renderSignoffPanel("panel-signoff", state.signoffs, "task");

  // reset tabs to first (scoped to this view, not Reference/Records tabs)
  document.querySelectorAll("#view-task .tab").forEach((t, i) => t.classList.toggle("active", i === 0));
  document.querySelectorAll("#view-task .tabpanel").forEach((p, i) => p.classList.toggle("active", i === 0));

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
  document.querySelectorAll("#view-task .tab").forEach((t) => t.classList.toggle("active", t === btn));
  document
    .querySelectorAll("#view-task .tabpanel")
    .forEach((p) => p.classList.toggle("active", p.id === "panel-" + btn.dataset.tab));
  if (btn.dataset.tab === "signoff") renderSignoffPanel("panel-signoff", state.signoffs, "task");
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

  const signedCrew = state.signoffs.filter((s) => s.name && s.sig).map((s) => s.name);

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
    crewSigned: signedCrew,
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
  const all = loadRecords();
  const query = (document.getElementById("recordsSearch").value || "").trim().toLowerCase();
  const records = query
    ? all.filter((r) =>
        [r.taskLabel, r.site, r.supervisor].some((f) => (f || "").toLowerCase().includes(query))
      )
    : all;

  const list = document.getElementById("recordsList");
  const empty = document.getElementById("recordsEmpty");

  if (!records.length) {
    list.innerHTML = "";
    empty.style.display = "block";
    empty.textContent = query
      ? "No records match that search."
      : `No records saved yet. Generate a task card and tap "Save as field record."`;
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
        ${r.hazardCount} hazards · Toolbox ${r.toolboxChecked}/${r.toolboxTotal} · PPE ${r.ppeChecked}/${r.ppeTotal}${
        r.crewSigned && r.crewSigned.length ? ` · ${r.crewSigned.length} crew signed` : ""
      }
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

document.getElementById("recordsSearch").addEventListener("input", renderRecordsList);

// ---------- RECORDS SUB-TABS (Field Records / Incidents) ----------
document.getElementById("recordsSubTabs").addEventListener("click", (e) => {
  const btn = e.target.closest(".tab");
  if (!btn) return;
  document.querySelectorAll("#recordsSubTabs .tab").forEach((t) => t.classList.toggle("active", t === btn));
  document
    .querySelectorAll("#view-records .tabpanel")
    .forEach((p) => p.classList.toggle("active", p.id === "recordspanel-" + btn.dataset.recordstab));
  if (btn.dataset.recordstab === "incidents") renderIncidentsList();
});

// ============================================================
// INCIDENT / NEAR-MISS REPORTING — its own module, independent
// of the 16-task JHA flow, since a near-miss doesn't always map
// to a specific task.
// ============================================================

function resetIncidentForm() {
  state.incident = null;
  state.incidentSignoffs = [];
  state.incidentType = "Near-Miss";
  state.incidentInjury = false;
  state.incidentEnv = false;

  document.querySelectorAll("#incidentTypePicker .type-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.itype === "Near-Miss")
  );
  document.getElementById("incSite").value = "";
  document.getElementById("incDate").value = new Date().toISOString().slice(0, 10);
  document.getElementById("incTime").value = new Date().toTimeString().slice(0, 5);
  document.getElementById("incReportedBy").value = "";
  document.getElementById("incDescription").value = "";
  document.getElementById("incCause").value = "";
  document.getElementById("incActions").value = "";
  document.getElementById("incInjuryDetails").value = "";
  document.getElementById("incInjuryDetails").style.display = "none";
  document.getElementById("incEnvDetails").value = "";
  document.getElementById("incEnvDetails").style.display = "none";

  document.querySelectorAll("#incInjuryToggle .yn-btn").forEach((b) => b.classList.toggle("active", b.dataset.yn === "no"));
  document.querySelectorAll("#incEnvToggle .yn-btn").forEach((b) => b.classList.toggle("active", b.dataset.yn === "no"));

  document.getElementById("incidentSaveHint").textContent = "";
  renderSignoffPanel("incidentSignoffPanel", state.incidentSignoffs, "incident");
}

function loadIncidentIntoForm(rec) {
  state.incident = rec.id;
  state.incidentSignoffs = (rec.signoffs || []).map((s) => ({ name: s.name, sig: s.sig }));
  state.incidentType = rec.type;
  state.incidentInjury = rec.injury;
  state.incidentEnv = rec.envRelease;

  document.querySelectorAll("#incidentTypePicker .type-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.itype === rec.type)
  );
  document.getElementById("incSite").value = rec.site || "";
  document.getElementById("incDate").value = rec.date || "";
  document.getElementById("incTime").value = rec.time || "";
  document.getElementById("incReportedBy").value = rec.reportedBy || "";
  document.getElementById("incDescription").value = rec.description || "";
  document.getElementById("incCause").value = rec.cause || "";
  document.getElementById("incActions").value = rec.actions || "";
  document.getElementById("incInjuryDetails").value = rec.injuryDetails || "";
  document.getElementById("incInjuryDetails").style.display = rec.injury ? "block" : "none";
  document.getElementById("incEnvDetails").value = rec.envDetails || "";
  document.getElementById("incEnvDetails").style.display = rec.envRelease ? "block" : "none";

  document.querySelectorAll("#incInjuryToggle .yn-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.yn === (rec.injury ? "yes" : "no"))
  );
  document.querySelectorAll("#incEnvToggle .yn-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.yn === (rec.envRelease ? "yes" : "no"))
  );

  document.getElementById("incidentSaveHint").textContent = "";
  renderSignoffPanel("incidentSignoffPanel", state.incidentSignoffs, "incident");
}

function openIncidentForm(existingRecord) {
  if (existingRecord) loadIncidentIntoForm(existingRecord);
  else resetIncidentForm();
  showView("incident");
}

document.getElementById("newIncidentBtn").addEventListener("click", () => openIncidentForm(null));
document.getElementById("backToRecordsFromIncident").addEventListener("click", () => showView("records"));

// type picker
document.getElementById("incidentTypePicker").addEventListener("click", (e) => {
  const btn = e.target.closest(".type-btn");
  if (!btn) return;
  document.querySelectorAll("#incidentTypePicker .type-btn").forEach((b) => b.classList.toggle("active", b === btn));
  state.incidentType = btn.dataset.itype;
});

// yes/no toggles
function wireYesNoToggle(toggleId, detailsId, stateKey) {
  document.getElementById(toggleId).addEventListener("click", (e) => {
    const btn = e.target.closest(".yn-btn");
    if (!btn) return;
    document.querySelectorAll(`#${toggleId} .yn-btn`).forEach((b) => b.classList.toggle("active", b === btn));
    const isYes = btn.dataset.yn === "yes";
    state[stateKey] = isYes;
    document.getElementById(detailsId).style.display = isYes ? "block" : "none";
  });
}
wireYesNoToggle("incInjuryToggle", "incInjuryDetails", "incidentInjury");
wireYesNoToggle("incEnvToggle", "incEnvDetails", "incidentEnv");

// ---------- SAVE INCIDENT ----------
document.getElementById("saveIncidentBtn").addEventListener("click", () => {
  const signed = state.incidentSignoffs.filter((s) => s.name && s.sig);

  const record = {
    id: state.incident || "inc_" + Date.now(),
    type: state.incidentType,
    site: document.getElementById("incSite").value.trim(),
    date: document.getElementById("incDate").value || new Date().toISOString().slice(0, 10),
    time: document.getElementById("incTime").value,
    reportedBy: document.getElementById("incReportedBy").value.trim(),
    description: document.getElementById("incDescription").value.trim(),
    cause: document.getElementById("incCause").value.trim(),
    actions: document.getElementById("incActions").value.trim(),
    injury: state.incidentInjury,
    injuryDetails: document.getElementById("incInjuryDetails").value.trim(),
    envRelease: state.incidentEnv,
    envDetails: document.getElementById("incEnvDetails").value.trim(),
    signoffs: state.incidentSignoffs.filter((s) => s.name || s.sig),
    savedAt: new Date().toISOString(),
  };

  const incidents = loadIncidents();
  const existingIndex = incidents.findIndex((r) => r.id === record.id);
  if (existingIndex >= 0) incidents[existingIndex] = record;
  else incidents.unshift(record);
  saveIncidents(incidents);
  state.incident = record.id;

  const hint = document.getElementById("incidentSaveHint");
  hint.textContent = "Saved to this device.";
  setTimeout(() => (hint.textContent = ""), 3000);
});

// ---------- INCIDENT PDF EXPORT ----------
document.getElementById("exportIncidentPdfBtn").addEventListener("click", () => {
  const type = state.incidentType;
  const site = document.getElementById("incSite").value.trim() || "—";
  const date = document.getElementById("incDate").value || "—";
  const time = document.getElementById("incTime").value || "—";
  const reportedBy = document.getElementById("incReportedBy").value.trim() || "—";
  const description = document.getElementById("incDescription").value.trim() || "—";
  const cause = document.getElementById("incCause").value.trim();
  const actions = document.getElementById("incActions").value.trim() || "—";
  const injury = document.getElementById("incInjuryToggle").querySelector(".yn-btn.active").dataset.yn === "yes";
  const injuryDetails = document.getElementById("incInjuryDetails").value.trim();
  const envRelease = document.getElementById("incEnvToggle").querySelector(".yn-btn.active").dataset.yn === "yes";
  const envDetails = document.getElementById("incEnvDetails").value.trim();
  const generated = new Date().toLocaleString();

  const signedRows = state.incidentSignoffs
    .filter((s) => s.name && s.sig)
    .map(
      (s) => `<div class="ph-sig-row"><img src="${s.sig}" alt="signature" /><p class="ph-sig-name">${s.name}</p></div>`
    )
    .join("");

  document.getElementById("incidentPrintHeader").innerHTML = `
    <p class="ph-app">Fieldwise — HSE Field Companion</p>
    <h1>${type} Report</h1>
    <div class="ph-meta">
      <span>Site: <b>${site}</b></span>
      <span>Date: <b>${date}</b></span>
      <span>Time: <b>${time}</b></span>
      <span>Reported by: <b>${reportedBy}</b></span>
      <span>Generated: <b>${generated}</b></span>
    </div>

    <div class="ph-section">
      <p class="ph-section-title">What happened</p>
      <p>${description}</p>
    </div>
    ${cause ? `<div class="ph-section"><p class="ph-section-title">Immediate cause</p><p>${cause}</p></div>` : ""}
    <div class="ph-section">
      <p class="ph-section-title">Immediate actions taken</p>
      <p>${actions}</p>
    </div>
    <div class="ph-section">
      <p class="ph-section-title">Injury</p>
      <p>${injury ? "Yes — " + (injuryDetails || "no further details recorded") : "No"}</p>
    </div>
    <div class="ph-section">
      <p class="ph-section-title">Environmental release</p>
      <p>${envRelease ? "Yes — " + (envDetails || "no further details recorded") : "No"}</p>
    </div>
    ${signedRows ? `<div class="ph-section"><p class="ph-section-title">Witness / Crew Sign-Off</p>${signedRows}</div>` : ""}`;

  window.print();
});

// ---------- INCIDENTS STORAGE ----------
function loadIncidents() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_INCIDENTS)) || [];
  } catch {
    return [];
  }
}
function saveIncidents(incidents) {
  try {
    localStorage.setItem(STORAGE_KEY_INCIDENTS, JSON.stringify(incidents));
  } catch (e) {
    console.error("Could not save — device storage may be full.", e);
  }
}
function deleteIncident(id) {
  saveIncidents(loadIncidents().filter((r) => r.id !== id));
  renderIncidentsList();
}

function renderIncidentsList() {
  const all = loadIncidents();
  const query = (document.getElementById("incidentsSearch").value || "").trim().toLowerCase();
  const incidents = query
    ? all.filter((r) =>
        [r.type, r.site, r.description, r.reportedBy].some((f) => (f || "").toLowerCase().includes(query))
      )
    : all;

  const list = document.getElementById("incidentsList");
  const empty = document.getElementById("incidentsEmpty");

  if (!incidents.length) {
    list.innerHTML = "";
    empty.style.display = "block";
    if (query) empty.textContent = "No incident/near-miss reports match that search.";
    return;
  }
  empty.style.display = "none";

  list.innerHTML = incidents
    .map((r) => {
      const badgeCls = r.type === "Incident" ? "class-hot" : r.type === "Near-Miss" ? "class-cold" : "";
      const excerpt = (r.description || "").slice(0, 90) + ((r.description || "").length > 90 ? "…" : "");
      return `
    <div class="record-card" data-id="${r.id}">
      <div class="record-card-top">
        <span class="record-card-title"><span class="class-badge ${badgeCls}" style="margin-right:6px;">${r.type}</span></span>
        <span class="record-card-date">${r.date}${r.time ? " " + r.time : ""}</span>
      </div>
      <div class="record-card-meta">
        ${r.site ? r.site + " · " : ""}${r.reportedBy ? "Reported by " + r.reportedBy + " · " : ""}${
        r.injury ? "Injury reported · " : ""
      }${r.envRelease ? "Environmental release · " : ""}${r.signoffs && r.signoffs.length ? r.signoffs.length + " signed" : ""}
      </div>
      <div class="record-card-meta">${excerpt}</div>
      <div class="record-card-actions">
        <button class="mini-btn" data-action="view" data-id="${r.id}">View / Edit</button>
        <button class="mini-btn danger" data-action="delete" data-id="${r.id}">Delete</button>
      </div>
    </div>`;
    })
    .join("");

  list.querySelectorAll("[data-action='delete']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (confirm("Delete this incident report? This can't be undone.")) deleteIncident(btn.dataset.id);
    });
  });
  list.querySelectorAll("[data-action='view']").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const rec = incidents.find((r) => r.id === btn.dataset.id);
      if (rec) openIncidentForm(rec);
    });
  });
}

document.getElementById("incidentsSearch").addEventListener("input", renderIncidentsList);

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
