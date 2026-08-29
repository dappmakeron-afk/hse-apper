// ============================================================
// TASK LIBRARY — the knowledge base behind the generator.
// Each task drives a JHA, a Toolbox Talk, a PPE list, and permit
// flags. "why" fields cite the source of the control so the tool
// teaches as it's used, not just a form to fill in.
// ============================================================

const TASK_LIBRARY = [
  {
    id: "hot-work",
    label: "Hot Work",
    sub: "Welding, cutting, grinding, brazing",
    icon: "flame",
    permits: ["Hot Work Permit", "Fire Watch assignment"],
    hazards: [
      {
        hazard: "Ignition of flammable vapours or residues",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Gas-test the area before work starts and re-test if work is interrupted",
          "Remove or isolate flammable material within 11 m (35 ft) of the work",
          "Post a dedicated Fire Watch with an extinguisher for the duration of work and 30 min after"
        ],
        why: "Fire Watch (Practical) training and OSHA 30-Hour general industry both treat hot-work fire watch as a standalone competent-person control, not optional supervision."
      },
      {
        hazard: "Fire spreading through openings, ducts, or floor/wall penetrations",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Seal floor and wall openings, cracks, and cable penetrations near the work",
          "Have fire-resistant blankets/shields positioned to catch sparks and slag"
        ],
        why: "OSH Act Ch. 88:08 duty of the employer to maintain a workplace, plant, and system of work that is safe and without risk to health."
      },
      {
        hazard: "Eye and skin burns from arc flash, sparks, UV radiation",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Correct filter-shade welding helmet/goggles for the process",
          "Flame-resistant coveralls, welding gloves, and gauntlets"
        ],
        why: "OSHA 10/30-Hour PPE module — hot work is a named exception to general eye/face protection minimums."
      },
      {
        hazard: "Toxic fumes (metal fume fever, confined-space accumulation)",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Local exhaust ventilation or forced air if working in an enclosed area",
          "Respiratory protection matched to the base metal/coating being welded"
        ],
        why: "OSHA 30-Hour general industry — welding fumes are treated as an air-contaminant hazard, not just a fire hazard."
      }
    ],
    toolboxTalk: [
      "Confirm the Hot Work Permit is signed, current, and posted at the job site",
      "Point out the nearest fire extinguisher and the Fire Watch by name",
      "Confirm the gas test result and re-test schedule with the crew",
      "Walk the 11 m radius and confirm it's clear of flammables/combustibles",
      "Confirm the stop-work signal if conditions change"
    ],
    ppe: ["Welding helmet/goggles (correct shade)", "Flame-resistant coveralls", "Welding gloves", "Safety boots", "Hearing protection (grinding)"],
  },
  {
    id: "confined-space",
    label: "Confined Space Entry",
    sub: "Tanks, vessels, pits, sewers, silos",
    icon: "cylinder",
    permits: ["Confined Space Entry Permit", "Atmospheric testing log", "Rescue plan"],
    hazards: [
      {
        hazard: "Oxygen-deficient or oxygen-enriched atmosphere",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Test atmosphere before entry: oxygen, flammability, toxicity — in that order",
          "Continuous or periodic re-testing while occupied, per permit conditions",
          "Forced-air ventilation running before and during entry where required"
        ],
        why: "Confined space fatalities are overwhelmingly atmospheric, not physical — this is the single highest-weighted topic in OSHA 30-Hour general industry."
      },
      {
        hazard: "Engulfment (liquid, granular solid, or free-flowing material)",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Positively isolate/blank inlet lines, not just close a valve",
          "Lock out any agitators, augers, or feed mechanisms"
        ],
        why: "Valves can be reopened or fail; blanking/blinding is the recognized positive isolation control."
      },
      {
        hazard: "No means of rapid rescue if entrant is incapacitated",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Dedicated attendant stationed at the entry point at all times, never leaves post",
          "Retrieval line/harness attached where the space geometry allows",
          "Rescue plan and equipment confirmed and accessible before entry, not during an emergency"
        ],
        why: "OSH Act Ch. 88:08 — most confined-space multiple fatalities involve a would-be rescuer entering without the same protection as the original casualty."
      },
      {
        hazard: "Communication failure between entrant and attendant",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Agree a communication method before entry (voice, radio, line signals)",
          "Set a check-in interval and log it"
        ],
        why: "Attendant duties under a confined space program depend entirely on reliable two-way contact."
      }
    ],
    toolboxTalk: [
      "Confirm who is Entrant, Attendant, and Entry Supervisor by name",
      "Review the atmospheric test results with the crew before anyone enters",
      "Confirm the isolation/blanking points and who verified them",
      "Walk through the rescue plan — who calls it, how, and to whom",
      "Confirm the communication method and check-in interval"
    ],
    ppe: ["Gas detector (personal/area)", "Full-body harness with retrieval line", "Appropriate respiratory protection", "Non-sparking tools if flammable atmosphere possible"],
  },
  {
    id: "work-at-height",
    label: "Working at Height",
    sub: "Pipe racks, ladders, elevated platforms, roofs",
    icon: "triangle",
    permits: ["Working at Height Permit (if site policy requires)"],
    hazards: [
      {
        hazard: "Fall from an unprotected edge or opening",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Guardrails, covers, or edge protection at any opening or unprotected edge",
          "Where guardrails aren't feasible, 100% tie-off with fall-arrest harness to an engineered anchor point"
        ],
        why: "SST 8-Hour Fall Prevention — hierarchy is eliminate the fall hazard first (guardrails/covers), fall arrest is the last line, not the first."
      },
      {
        hazard: "Falling tools, materials, or debris striking people below",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Barricade and post the area directly below the work",
          "Tool lanyards/tethers on hand tools; toe boards on platforms"
        ],
        why: "Standard drop-object control set from OSHA 10/30-Hour general industry."
      },
      {
        hazard: "Fall-arrest anchor point not rated or not identified",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Confirm anchor point rating (min. 5,000 lb / 22 kN per person, or engineered equivalent)",
          "Never anchor to handrails, conduit, or piping unless certified for the purpose"
        ],
        why: "A fall-arrest system anchored incorrectly is often worse than no system — it fails under load exactly when needed."
      },
      {
        hazard: "Ladder misuse — wrong angle, damaged ladder, overreach",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Inspect ladder before use; tag out and remove damaged ladders",
          "Maintain 3 points of contact; 4:1 angle rule; secure top and bottom"
        ],
        why: "Ladder falls are one of the most frequent, least severe-seeming, and most under-reported height incidents."
      }
    ],
    toolboxTalk: [
      "Confirm the fall protection method for this specific task (guardrail vs harness)",
      "Point out the confirmed anchor point and its rating",
      "Confirm the barricaded drop zone below the work",
      "Check harness/lanyard for damage as a group before anyone climbs",
      "Confirm the rescue plan if someone falls and is suspended in a harness"
    ],
    ppe: ["Full-body harness", "Shock-absorbing lanyard rated to task", "Hard hat with chin strap", "Non-slip safety footwear"],
  },
  {
    id: "loto",
    label: "Lockout / Tagout",
    sub: "Isolating machinery, electrical, process energy",
    icon: "lock",
    permits: ["Isolation Certificate / LOTO Permit"],
    hazards: [
      {
        hazard: "Unexpected energisation or release of stored energy",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Identify all energy sources: electrical, hydraulic, pneumatic, gravity, stored pressure, thermal",
          "Isolate every source, not just the primary one, then apply lock and tag",
          "Verify zero energy state — try the start button/valve after isolating, before starting work"
        ],
        why: "Most LOTO fatalities involve a secondary energy source (gravity, stored pressure, capacitors) that wasn't isolated — OSHA 30-Hour treats this as the core LOTO teaching point."
      },
      {
        hazard: "Multiple crews/trades working on the same equipment",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Group lockout box/scissor lock system when more than one person is exposed",
          "Each person applies their own personal lock before working, removes it before leaving"
        ],
        why: "Individual accountability is the entire point of lockout — a shared lock defeats the control."
      },
      {
        hazard: "Isolation removed or equipment restarted before work is complete",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Only the person who applied a lock removes it",
          "Formal handover/log if a shift changes mid-job"
        ],
        why: "Shift handover gaps are a recurring root cause in LOTO incident investigations."
      }
    ],
    toolboxTalk: [
      "Walk the isolation points with the crew and confirm each lock/tag in place",
      "Confirm who holds which lock and that it's their own personal lock",
      "Demonstrate the zero-energy verification (try the start control)",
      "Confirm the process for shift handover if the job runs long",
      "Confirm who has authority to remove isolation and re-energise"
    ],
    ppe: ["Insulated gloves (electrical work)", "Arc-rated clothing if applicable", "Safety glasses", "Lockout locks/tags/hasps (personal)"],
  },
  {
    id: "lifting",
    label: "Lifting Operations",
    sub: "Crane lifts, rigging, mobile equipment",
    icon: "crane",
    permits: ["Lift Plan (critical/complex lifts)"],
    hazards: [
      {
        hazard: "Load drop from rigging failure or overload",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Confirm rigging is rated for the load with margin, inspected before use",
          "Confirm crane's rated capacity at the working radius against the load weight",
          "No one under a suspended load, ever"
        ],
        why: "Load-drop incidents are almost always traceable to a skipped inspection or an assumed rather than confirmed load weight."
      },
      {
        hazard: "Crane contact with overhead power lines or structures",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Identify overhead hazards during planning, not on arrival",
          "Maintain minimum approach distance per voltage; use a spotter if proximity is unavoidable"
        ],
        why: "OSHA 10/30-Hour general industry — electrocution is a top-cause category in crane/lifting fatalities."
      },
      {
        hazard: "Struck-by during load movement or tag-line handling",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Barricade the swing radius and travel path",
          "Only trained/competent riggers give signals; one signaller at a time"
        ],
        why: "Confusion between multiple signallers is a common precursor to struck-by incidents."
      }
    ],
    toolboxTalk: [
      "Confirm the load weight, rigging configuration, and crane capacity at radius",
      "Confirm who the designated signaller/banksman is",
      "Walk the swing radius and confirm it's barricaded and clear",
      "Confirm ground conditions/outrigger support under the crane",
      "Confirm the abort/stop signal everyone will recognise"
    ],
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Gloves (rigging)"],
  },
  {
    id: "excavation",
    label: "Excavation",
    sub: "Trenching, digging, ground-breaking",
    icon: "shovel",
    permits: ["Ground-Breaking / Excavation Permit", "Underground services clearance"],
    hazards: [
      {
        hazard: "Trench/excavation collapse burying workers",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Slope, bench, or shore excavations deeper than 1.2 m (site-specific threshold may be lower)",
          "Keep spoil piles at least 0.6 m back from the edge",
          "Daily competent-person inspection, and after rain or ground disturbance"
        ],
        why: "Soil can look stable and still fail suddenly — sloping/shoring removes reliance on judgement alone."
      },
      {
        hazard: "Striking underground services — electrical, gas, water",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Obtain and mark up underground services drawings before digging",
          "Hand-dig or use safe-dig techniques within a clearance zone of known services"
        ],
        why: "Buried service strikes are one of the most common ground-breaking incidents on industrial sites with legacy infrastructure."
      },
      {
        hazard: "Fall into excavation by workers or the public",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Barricade and sign the excavation on all sides",
          "Provide a safe means of access/egress (ladder every 7.5 m of trench run)"
        ],
        why: "Egress is frequently overlooked once shoring/sloping is addressed."
      }
    ],
    toolboxTalk: [
      "Confirm underground services clearance is in hand and marked up",
      "Confirm sloping/shoring/benching method for this excavation's depth",
      "Confirm spoil pile placement and barricade layout",
      "Confirm access/egress points",
      "Confirm who is the competent person doing daily inspections"
    ],
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Gloves"],
  },
  {
    id: "scaffolding",
    label: "Scaffolding",
    sub: "Erect, alter, dismantle, or work from",
    icon: "grid",
    permits: ["Scaffold Tag/Inspection (green/yellow/red system)"],
    hazards: [
      {
        hazard: "Collapse due to incomplete bracing, overloading, or unstable base",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Erection only by a trained/competent scaffolder, per OSHA Competent Person requirements",
          "Base plates/sole boards on firm, level ground; full bracing per design",
          "Tag the scaffold (green = safe to use / yellow = restricted / red = do not use) after each inspection"
        ],
        why: "OSHA Competent Person Scaffolding training exists specifically because scaffold failures are overwhelmingly an erection/inspection gap, not a design one."
      },
      {
        hazard: "Fall during erection/dismantling, before guardrails are complete",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Erectors use fall protection during build/strip, since guardrails aren't yet in place",
          "Never climb bracing — use the designated ladder/access bay"
        ],
        why: "Erection and dismantling crews are the highest-risk scaffold population, precisely because the finished safety features don't exist yet."
      },
      {
        hazard: "Using a scaffold that hasn't been inspected/tagged for that shift",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Check the tag before stepping on any scaffold, every shift",
          "Report any missing tag, damage, or modification before use, don't assume it's fine"
        ],
        why: "Modifications made by other trades between shifts are a common cause of otherwise-sound scaffolds becoming unsafe."
      }
    ],
    toolboxTalk: [
      "Confirm the scaffold tag colour and date before anyone works from it",
      "Confirm who erected/last inspected it and when",
      "Confirm the safe access point — never climb the frame",
      "Point out any incomplete sections or planking gaps",
      "Confirm maximum load rating for the scaffold's intended use"
    ],
    ppe: ["Hard hat", "Safety boots", "Harness (erection/dismantling crew)", "Gloves"],
  },
  {
    id: "housekeeping",
    label: "General Site / Housekeeping Walkaround",
    sub: "Routine inspection, no specific high-risk task",
    icon: "clipboard",
    permits: [],
    hazards: [
      {
        hazard: "Slips, trips, and falls on the same level",
        likelihood: "Likely",
        severity: "Minor",
        controls: [
          "Clear walkways of spills, cables, and material storage",
          "Report and barricade damaged flooring/grating immediately"
        ],
        why: "Same-level slips/trips are consistently among the highest-frequency incident types on any industrial site, hot-work or not."
      },
      {
        hazard: "Blocked emergency egress, fire equipment, or first-aid access",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Confirm exit routes and fire equipment are unobstructed",
          "Confirm eyewash/shower stations are accessible and functional"
        ],
        why: "OSH Act Ch. 88:08 duty of the employer to maintain safe means of access and egress."
      },
      {
        hazard: "Improper chemical/material storage",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Check SDS availability and correct segregation of incompatible chemicals",
          "Confirm secondary containment for liquid storage"
        ],
        why: "Storage audits catch a large share of findings before they become incidents, not after."
      }
    ],
    toolboxTalk: [
      "Remind the team: report hazards immediately, don't wait for the next inspection",
      "Confirm everyone knows the muster point and alarm signals",
      "Spot-check PPE compliance across the area",
      "Confirm housekeeping standards for material laydown areas"
    ],
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Safety glasses"],
  }
];

const SEVERITY_WEIGHT = { "Minor": 1, "Moderate": 2, "Major": 3, "Fatal": 4 };
const LIKELIHOOD_WEIGHT = { "Unlikely": 1, "Possible": 2, "Likely": 3 };

function riskScore(likelihood, severity) {
  return (LIKELIHOOD_WEIGHT[likelihood] || 2) * (SEVERITY_WEIGHT[severity] || 2);
}

function riskBand(score) {
  if (score >= 9) return { label: "High", cls: "risk-high" };
  if (score >= 4) return { label: "Medium", cls: "risk-med" };
  return { label: "Low", cls: "risk-low" };
}
