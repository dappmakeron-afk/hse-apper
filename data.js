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
    ppe: ["Welding helmet/goggles (correct shade)", "Flame-resistant coveralls", "Welding gloves", "Safety boots", "Hearing protection (grinding)",
      "Hard hat",
      "Safety glasses (worn under the welding helmet)",
      "Respirator suited to welding or cutting fume (fit-tested), where ventilation can't control the fume",
      "Welder's spats where sparks or slag can fall into footwear"],
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
    ppe: ["Gas detector (personal/area)", "Full-body harness with retrieval line", "Appropriate respiratory protection", "Non-sparking tools if flammable atmosphere possible",
      "Hard hat, safety glasses, safety boots and work gloves",
      "Flame-resistant clothing (site standard)"],
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
          "Maintain 3 points of contact; 4:1 angle rule; secure top and bottom",
          "Extension ladders should extend at least 3 ft (about 1 m) above the landing, or be tied off at the top with a grab handle to mount and dismount",
          "Stepladders fully open, and never stand on the top step or top rung; keep the top and bottom of every ladder clear and barricade any ladder in a doorway or traffic route"
        ],
        why: "Ladder falls are one of the most frequent, least severe-seeming, and most under-reported height incidents."
      },
      {
        hazard: "Falling through a hole, floor opening, skylight or fragile surface",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Cover every hole with a cover strong enough for the load, secured against displacement and clearly marked — or guard all unprotected sides with guardrails",
          "Where a hole is used for access (for example a ladderway), fit a gate or chain",
          "Treat skylights, roof sheeting, ceiling boards and old asbestos-cement sheets as fragile — don't walk on them; use crawl boards, a platform, or fall arrest tied to a rated anchor",
          "Never remove a cover or guardrail without approval, and put it back as soon as the work is done"
        ],
        why: "OSHA 3146 (29 CFR 1926.501(b)(4)) requires workers to be protected from falling through holes, including skylights, by covers, guardrails or personal fall arrest. It is a US benchmark — apply your site's standard where it is stricter."
      },
      {
        hazard: "People not trained, or not retrained, on the fall protection they're actually using",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Everyone exposed to a fall hazard is trained by a competent person to recognise it and use the specific systems on this job (guardrails, harness and anchor, controlled access zone, covers)",
          "Keep a written record of who was trained, when, and signed by the trainer or employer",
          "Retrain when the workplace or equipment changes, or when someone is seen using the system wrongly",
          "Inspect harnesses and lanyards before every use and remove damaged ones from service"
        ],
        why: "OSHA 3146 (29 CFR 1926.503) requires training, a written certification and retraining triggers; most fall-protection failures in practice are wrong use of the right equipment."
      }
    ],
    toolboxTalk: [
      "Confirm the fall protection method for this specific task (guardrail vs harness)",
      "Point out the confirmed anchor point and its rating",
      "Confirm the barricaded drop zone below the work",
      "Check harness/lanyard for damage as a group before anyone climbs",
      "Confirm the rescue plan if someone falls and is suspended in a harness"
    ],
    ppe: ["Full-body harness", "Shock-absorbing lanyard rated to task", "Hard hat with chin strap", "Non-slip safety footwear",
      "Safety glasses",
      "Safety gloves"],
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
      },
      {
        hazard: "Lockout program gaps — wrong devices, untrained people, procedures never audited",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Use only lockout/tagout devices authorised for the equipment — durable, standardised and substantial — and make sure each one identifies its individual user",
          "Tagout alone is only acceptable where it gives protection equivalent to lockout; new or overhauled equipment should be capable of being locked out",
          "Confirm everyone is trained for their role: authorised people who apply locks, affected people who work nearby, and everyone else who must not touch isolated equipment",
          "Inspect each energy control procedure at least annually, and cover the special cases: testing or repositioning with locks temporarily removed, outside contractors, group lockout and shift change",
          "Only the person who applied a lock removes it; where that isn't possible (for example they've left site) a written procedure with checks before re-energising applies"
        ],
        why: "OSHA Fact Sheet 3529 (29 CFR 1910.147) lists these as the standard's critical requirements, and says lockout/tagout prevents an estimated 120 fatalities and 50,000 injuries a year in the US. It is a US benchmark — follow your site's isolation procedure."
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
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Gloves (rigging)",
      "Safety glasses",
      "Hearing protection in noisy plant areas"],
  },
  {
    id: "excavation",
    label: "Excavation",
    sub: "Trenching, digging, ground-breaking",
    icon: "shovel",
    permits: ["Ground-Breaking / Excavation Permit", "Underground services clearance", "Confined Space Entry Permit if atmospheric testing shows a hazard"],
    hazards: [
      {
        hazard: "Trench/excavation collapse burying workers",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Slope, bench, or shore excavations 1.5 m (5 ft) deep or more — below that, a competent person judges whether a protective system is still needed based on soil and site conditions",
          "Keep spoil piles at least 0.6 m back from the edge",
          "Daily competent-person inspection, and after rain or ground disturbance"
        ],
        why: "Soil can look stable and still fail suddenly — sloping/shoring removes reliance on judgement alone. Depth threshold follows the widely-used OSHA 29 CFR 1926 Subpart P benchmark for when a protective system becomes mandatory rather than discretionary."
      },
      {
        hazard: "Hazardous atmosphere accumulating in the excavation",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Gas-test any excavation over 1.2 m (4 ft) deep before anyone enters, and re-test if work is interrupted or conditions change",
          "Treat trenches near process piping, buried utility corridors, or low-lying ground as higher risk for gas migration, not just confined spaces",
          "If testing shows a hazard, stop and manage the excavation under Confined Space Entry procedure rather than as ordinary ground-breaking"
        ],
        why: "A trench isn't automatically a confined space, but it behaves like one the moment gas can migrate or settle in it — this is a genuine risk on a site with buried ammonia, methanol, or hydrocarbon lines nearby, and it's an easy control to skip because a trench doesn't look enclosed."
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
      "Confirm sloping/shoring/benching method for this excavation's depth — mandatory at 1.5 m (5 ft) or more",
      "Confirm the trench has been gas-tested if it's over 1.2 m (4 ft) deep, and re-tested after any break in work",
      "Confirm spoil pile placement and barricade layout",
      "Confirm access/egress points",
      "Confirm who is the competent person doing daily inspections"
    ],
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Gloves", "Gas monitor for excavations over 1.2 m (4 ft) deep", "Respiratory protection matched to test results if atmosphere is hazardous"],
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
      },
      {
        hazard: "Unsafe scaffold access, gaps in decking, and missing edge or falling-object protection",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Provide safe access at every level — when the platform is more than 2 ft (about 0.6 m) above or below the access point, use a proper ladder, stair tower or ramp; never climb the frame or cross-braces",
          "Platforms fully planked, with gaps no wider than about 1 in (2.5 cm) between boards and between boards and uprights",
          "Guardrails on all open sides and ends — US OSHA requires them above 10 ft, with the top rail roughly 0.9–1.1 m (38–45 in) above the platform, a midrail halfway, and toeboards at least 9 cm (3.5 in) high",
          "Barricade the area below and keep people out of the drop zone wherever tools or materials could fall",
          "Only trained people erect, move, alter or dismantle scaffolds, under a competent person; retrain when the scaffold type or site hazards change"
        ],
        why: "OSHA 3755 summarises the scaffold requirements (29 CFR 1926.451 and 1926.454). The height thresholds are US figures; your site may set a lower trigger."
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
    ppe: ["Hard hat", "Safety boots", "High-visibility clothing", "Safety glasses",
      "Hearing protection in noisy areas",
      "Safety gloves",
      "Flame-resistant clothing (site standard in process areas)"],
  },
  {
    id: "painting",
    label: "Painting / Coating Application",
    sub: "Brush, roller, or spray-applied paints, primers, and protective coatings",
    icon: "spray",
    permits: ["Hot Work Permit if spraying near ignition sources", "Confined Space Entry Permit if coating inside a tank/vessel"],
    hazards: [
      {
        hazard: "Inhalation of solvent vapours / VOCs",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Check the product SDS before starting — ventilation and respirator requirements come from it, not assumption",
          "Use local exhaust ventilation or forced air in enclosed/poorly ventilated areas",
          "Match respiratory protection (organic vapour cartridge, or supplied air in confined spaces) to the specific product"
        ],
        why: "Hazard communication and SDS review is core OSHA 10/30-Hour general industry content — every coating product's actual hazards are on its SDS, not on the tin's marketing label."
      },
      {
        hazard: "Fire/explosion from flammable solvent-based coatings",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "No hot work, smoking, or open flame in the application/storage area",
          "Bond and ground metal containers when transferring solvent-based product",
          "Store paints and thinners away from heat sources and out of direct sun"
        ],
        why: "Solvent-based coatings are flammable liquids first and paint second — treat storage and transfer with the same discipline as any flammable liquid."
      },
      {
        hazard: "High-pressure airless spray injection injury",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Never point the spray gun at any part of the body, yours or anyone else's",
          "Engage the trigger lock any time you're not actively spraying",
          "Treat any injection injury as a medical emergency immediately, even if it looks like a minor puncture — the damage is under the skin, not on the surface"
        ],
        why: "Airless spray injection injuries look minor on the surface and are frequently under-reported until infection or tissue damage progresses — this is one of the few paint-related injuries that is a genuine emergency."
      },
      {
        hazard: "Skin and eye contact causing irritation or dermatitis",
        likelihood: "Possible",
        severity: "Minor",
        controls: [
          "Chemical-resistant gloves matched to the specific product (nitrile is not universal)",
          "Safety glasses or goggles, especially overhead/spray work",
          "Wash exposed skin before breaks and at the end of the task, not just at end of shift"
        ],
        why: "Repeated low-level solvent contact is a cumulative-harm hazard — the damage builds over a career, not a shift."
      }
    ],
    toolboxTalk: [
      "Confirm which product is being used today and pull up its SDS with the crew",
      "Confirm ventilation is adequate for the space — don't assume an open door is enough",
      "Confirm respiratory protection matches the product, not just 'a mask'",
      "If spraying: confirm trigger locks are used any time the gun isn't actively in use",
      "Confirm no hot work or ignition sources are planned nearby today",
      "Remind the crew: any spray injection injury goes straight to medical attention, no exceptions"
    ],
    ppe: ["Respirator matched to product SDS", "Chemical-resistant gloves", "Safety glasses/goggles", "Coveralls", "Hearing protection if using pneumatic spray equipment"],
  },
  {
    id: "civil-work",
    label: "Civil / General Construction Work",
    sub: "Formwork, concrete placement, masonry, blockwork, general groundworks",
    icon: "brick",
    permits: ["Hot Work Permit if cutting/grinding masonry with sparks present", "Excavation Permit if groundworks involve digging", "Confirm operator certification before any powder-actuated fastening tool is issued"],
    hazards: [
      {
        hazard: "Manual handling injuries from cement bags, blocks, rebar, formwork panels",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Use mechanical aids (trolleys, hoists) for repetitive or heavy loads rather than defaulting to manual carry",
          "Team-lift awkward or heavy items rather than one person overreaching",
          "Rotate tasks across a shift to reduce cumulative strain on any one worker"
        ],
        why: "Musculoskeletal injury from repetitive manual handling is one of the most common — and most preventable — injury categories in general construction work."
      },
      {
        hazard: "Impalement or puncture injury from exposed rebar ends",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Cap or bend over every exposed vertical rebar end before it's left unattended, not just before inspection",
          "Barricade or clearly highlight rebar mats and dowels until capping is complete",
          "No stepping over or through an uncapped rebar cage, even briefly"
        ],
        why: "Rebar impalement from a fall onto exposed ends is one of the most consistently cited serious construction hazards — capping is cheap, and skipping it turns an ordinary trip or fall into a catastrophic injury."
      },
      {
        hazard: "Powder-actuated fastening tool misfire or projectile injury",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Only a certified/trained operator uses the tool — verify certification before issuing cartridges",
          "Confirm the base material is suitable for the fastener and won't shatter or allow pass-through",
          "Treat a hangfire cartridge (one that fails to fire immediately) as still live — hold the tool against the work surface per the manufacturer's misfire procedure, and never point it toward anyone regardless"
        ],
        why: "A powder-actuated tool is effectively a low-power firearm — the strict controls exist because the failure mode is a projectile injury, not a bruise."
      },
      {
        hazard: "Chemical burns from wet cement/concrete contact with skin",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Waterproof gloves and boots when placing or finishing concrete",
          "Never kneel directly in wet concrete — use boards or knee protection",
          "Wash off any skin contact promptly, don't wait until a break"
        ],
        why: "Wet concrete is caustic (high pH) — burns often aren't felt until real skin damage has already occurred, which is why prompt washing matters more than most people assume."
      },
      {
        hazard: "Formwork or shoring collapse during concrete pour",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Formwork erected and inspected against its design/engineering before any pour",
          "Props and shoring checked for damage and correct load rating before use",
          "Control pour rate and sequence per the formwork design — don't overload one section",
          "If using a concrete vibrator, confirm GFCI/RCD protection on electric-driven units and keep the flexible drive shaft clear of loose clothing and other workers"
        ],
        why: "A formwork failure during a pour is one of the few civil-work incidents that can injure multiple people simultaneously — inspection before the pour is the point of no return."
      },
      {
        hazard: "Silica dust exposure from cutting or grinding masonry/concrete",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Wet-cutting methods in preference to dry cutting wherever practical",
          "Local dust extraction on grinders/cutters where wet cutting isn't an option",
          "Respiratory protection rated for silica dust during any dry cutting"
        ],
        why: "Silica dust harm is cumulative and often invisible on the day — the OSHA 30-Hour general industry syllabus treats it as a long-term respiratory hazard, not a nuisance dust."
      },
      {
        hazard: "Struck-by from reversing concrete trucks/pumps or falling materials",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Banksman/spotter for any reversing plant or delivery vehicle on site",
          "Secure stacking of blocks, panels, and materials — nothing leaning unsecured",
          "Keep pedestrian routes separated from vehicle/plant movement where possible"
        ],
        why: "Vehicle movement on an active civil site is a leading struck-by cause — a dedicated spotter is a cheap control against a severe outcome."
      },
      {
        hazard: "Vibration and tip-over injury from plate compactors/rollers near excavation edges",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Keep compaction equipment back from excavation and trench edges by a safe margin — vibration can destabilize the very edge it's working near",
          "Rotate operators on prolonged compactor or vibrator use to limit hand-arm and whole-body vibration exposure",
          "Refuel petrol-driven compaction equipment cold and away from ignition sources"
        ],
        why: "A plate compactor working right at a trench edge can trigger the same collapse it's meant to help prevent — the equipment and the hazard it's near need to be considered together, not separately."
      }
    ],
    toolboxTalk: [
      "Confirm today's manual handling loads and whether mechanical aids are available and being used",
      "Confirm all exposed rebar ends are capped or bent over before anyone works near them",
      "If a powder-actuated fastening tool is being used today, confirm the operator is certified",
      "Confirm formwork/shoring has been inspected before today's pour, if pouring",
      "Confirm wet-cutting or dust extraction is set up before any masonry cutting starts",
      "Confirm the banksman/spotter for any vehicle movement on site today",
      "Remind the crew: wash off wet concrete contact immediately, don't wait",
      "Walk the material laydown area — confirm stacking is stable and secure"
    ],
    ppe: ["Hard hat", "Safety boots (steel toe)", "Waterproof gloves for concrete work", "Safety glasses", "Respiratory protection for dry cutting", "Hearing protection for cut-off saws, vibrators, or compactors", "High-visibility vest"],
  },
  {
    id: "electrical-work",
    label: "Electrical Work",
    sub: "Live testing, isolation verification, work near energized panels/circuits",
    icon: "bolt",
    permits: ["Electrical Isolation Certificate", "Live Work Permit (only if de-energizing is genuinely not practicable)"],
    hazards: [
      {
        hazard: "Electric shock or electrocution from contact with live parts",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "De-energize and prove dead before work starts — live work is the exception, never the default",
          "Only qualified, authorized persons perform electrical work, live or isolated",
          "If live work is genuinely unavoidable, it needs a written justification signed off before work starts, not a verbal decision on site"
        ],
        why: "De-energized work is the primary control in every recognized electrical safety framework — live work is a documented last resort, not a shortcut for a job that's inconvenient to isolate."
      },
      {
        hazard: "Arc flash / arc blast",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Arc-rated PPE matched to the specific equipment's incident energy/arc flash label, not a generic assumption",
          "Maintain minimum approach distance for the system voltage",
          "Use insulated, voltage-rated tools for any work near live parts",
          "De-energised is not the same as an electrically safe working condition — that takes isolation, lock/tag and a proved-dead test; until then treat the equipment as live",
          "Don't assume low voltage is safe — equipment at 240 V and below can still produce an arc",
          "Know both sets of boundaries: the shock boundaries (limited/restricted approach) and the arc flash boundary, where incident energy is 1.2 cal/cm². The arc flash boundary can be the larger of the two, so use both and barricade accordingly",
          "Flame-resistant is not the same as arc-rated — check the garment's arc rating against the equipment's incident energy, with nothing synthetic worn underneath"
        ],
        why: "Arc flash incident energy varies enormously between panels — the label on the specific piece of equipment is the only reliable source for what PPE is actually adequate."
      },
      {
        hazard: "Incorrect voltage test or faulty test equipment giving a false 'dead' reading",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Prove the tester on a known live source before testing the target circuit, and again after",
          "Use a voltage-rated tester matched to the system being tested",
          "Never rely on drawings, labels, or a previous shift's word alone to confirm de-energized state"
        ],
        why: "A dead-circuit reading is worthless if the tester itself has failed silently — prove-tester-prove is the sequence that catches that failure mode."
      },
      {
        hazard: "Stored energy in capacitors, UPS systems, or backup/standby power feeds",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Identify and safely discharge capacitive or stored energy per the equipment manual before work",
          "Confirm no backup generator or UPS auto-transfer switch could re-energize the circuit",
          "Treat a circuit as live until stored energy is actually confirmed discharged, not just switched off"
        ],
        why: "Backup and standby supplies are a classic cause of an apparently isolated circuit re-energizing without warning — auto-transfer doesn't announce itself."
      },
      {
        hazard: "HV switchgear removal, racking and switchyard inspection — authorised persons only",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Only authorised, competent persons do HV switching, racking or cubicle work, strictly to the site's switching and HV rules — this is not general electrical work",
          "Wear the arc-rated suit with hood that the arc flash assessment calls for, on top of the basic PPE, and check its arc rating against the equipment's incident energy",
          "Stay outside the arc flash and approach boundaries unless authorised and protected; barricade and sign the area and keep everyone else out",
          "Use remote operation or racking where the equipment has it, follow the isolation, earthing and prove-dead sequence, and never defeat interlocks or shutters",
          "Infrared (thermography) inspection of energised equipment: keep to the approved approach distances, open cubicles only where the procedure allows, and keep the camera and any loose items clear of live parts"
        ],
        why: "OSHA 4472 explains why the arc flash boundary can be wider than the shock boundaries. The example site PPE matrix in the PPE Guide marks an arc flash suit with hood for removing HV switchgear, and FR clothing, hard hat, glasses and hearing protection for switchyard inspection."
      }
    ],
    toolboxTalk: [
      "Confirm isolation and the prove-dead test result before anyone touches the circuit",
      "Confirm who the qualified/authorized person is for this specific task",
      "Confirm arc-rated PPE matches this equipment's incident energy rating",
      "If live work is unavoidable, confirm the written justification is signed and understood by the crew",
      "Confirm no backup power, UPS, or generator could re-energize this circuit",
      "Confirm what happens if someone contacts live equipment — how to safely break contact, who calls for help"
    ],
    ppe: ["Insulated/arc-rated gloves matched to system voltage", "Arc-rated flash suit or coveralls per incident energy", "Face shield / arc-rated hood", "Insulated hand tools", "Voltage-rated tester (proven before and after use)",
      "Hard hat, safety glasses and safety boots",
      "Hearing protection in noisy plant rooms",
      "Flame-resistant clothing as the baseline, with arc-rated clothing where the arc flash assessment requires it"],
  },
  {
    id: "vehicle-operations",
    label: "Vehicle Operations / Journey Management",
    sub: "Driving between sites, site vehicle use, journey planning",
    icon: "truck",
    permits: ["Journey Management Plan (long or higher-risk trips, per site policy)"],
    hazards: [
      {
        hazard: "Road traffic collision due to weather or road conditions",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Check weather and flood advisories before departure, especially in the wet season",
          "Delay or reroute if flooding is reported anywhere on the planned route",
          "Reduce speed and following distance for wet-road conditions, not just when rain is actually falling"
        ],
        why: "Sudden heavy rain and localized flooding are a routine feature of driving in Trinidad, not an exceptional event — a journey plan has to treat them as an expected variable, not an excuse after the fact."
      },
      {
        hazard: "Driver fatigue",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Set a maximum continuous driving time before a mandatory break on longer trips",
          "Avoid scheduling driving tasks immediately after a night shift without a rest period first",
          "Any driver who reports feeling unfit to drive is taken at their word, no exceptions"
        ],
        why: "Fatigue-related driving risk builds gradually and is often invisible to the driver themselves — by the time it's obvious, the margin for reaction is already gone."
      },
      {
        hazard: "Distraction from phone use while driving",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "No handheld phone use while the vehicle is moving — pull over safely for any call or message that can't wait",
          "Set navigation before departure, not while driving",
          "Passengers handle communication/navigation where possible so the driver doesn't have to"
        ],
        why: "Distraction-related collisions are consistently under-recognized relative to how often they actually contribute — this is one of the cheapest controls in this whole library to enforce."
      },
      {
        hazard: "Vehicle mechanical failure or undetected pre-trip defect",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Pre-trip walk-around before departure — tires, lights, mirrors, fluid levels",
          "Never take a vehicle with a known defect; report and tag it out immediately",
          "Confirm spare tire, jack, and basic emergency equipment are present and usable"
        ],
        why: "A five-minute pre-trip check is one of the cheapest controls against a mechanical failure at speed, and one of the most frequently skipped."
      },
      {
        hazard: "Reversing or parking incidents in congested plant/site areas",
        likelihood: "Likely",
        severity: "Minor",
        controls: [
          "Use a spotter/banksman for reversing in congested or pedestrian-heavy areas",
          "Confirm mirrors and reversing camera/sensors are functional before relying on them",
          "Park only in designated bays, not wherever is convenient"
        ],
        why: "Reversing incidents are a high-frequency, lower-severity category individually — but a site with a lot of them is a reliable early warning sign for a more serious vehicle incident."
      },
      {
        hazard: "Static electricity ignition during road tanker loading/unloading of flammable product",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Bond the tanker to the fixed loading rack/earthing point before any hatch is opened or hose is connected, and keep it bonded until after the hose is disconnected and the hatch closed",
          "Confirm the bonding clamp makes contact with bare metal, not paint, rust, or a coated surface — a clamp that looks connected but isn't makes contact resistance the same as no bonding at all",
          "Verify the bonding/earthing point's continuity is tested on a schedule, not just assumed to work because it's installed",
          "No loading or unloading during electrical storm activity in the area"
        ],
        why: "A road tanker is an ungrounded conductor the moment it rolls onto site — filling or draining a flammable liquid generates static charge as the product moves, and if that charge has nowhere to go, the discharge itself can be the ignition source in an otherwise well-controlled transfer."
      },
      {
        hazard: "Forklift collision, tip-over or struck-by incidents during material handling",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Only trained, authorised operators on the type of truck being used; pre-use inspection each shift, and remove any truck found unsafe from service",
          "Seatbelt on whenever fitted; never exceed the rated load; keep the load stable, balanced and low; never raise or lower it while travelling",
          "Sound the horn at cross aisles and blind corners, watch for pedestrians, obey the speed limit, and keep clear of ramp and platform edges",
          "Never use the forks to lift people or give rides — elevating a person needs a purpose-built, secured platform or man-basket",
          "Check visibility and overhead and side clearance before raising, loading or travelling"
        ],
        why: "OSHA Quick Card 3949 lists collisions, falls, tip-overs and struck-by as the main forklift hazards and gives these as the core preventive measures; OSHA 3755 covers the platform requirement when elevating workers (29 CFR 1926.602(c))."
      }
    ],
    toolboxTalk: [
      "Check today's weather and road/flood advisories before departure",
      "Confirm the planned route and any known hazards along it — flooding, road works, high-risk junctions",
      "Confirm the driver has had adequate rest before a long trip",
      "Confirm the pre-trip vehicle walk-around has been done",
      "Agree the no-phone-while-driving rule for this trip, out loud, before leaving",
      "Confirm who to contact, and how, if the journey is delayed or the driver doesn't arrive as expected",
      "If loading or unloading a flammable product today, confirm the tanker is bonded to bare metal before any hatch opens, and stays bonded until the hose is off"
    ],
    ppe: ["Seatbelt worn by all occupants, 100% of the time", "High-visibility vest when exiting the vehicle on-site", "Appropriate footwear for site conditions on arrival"],
  },
  {
    id: "lone-working",
    label: "Lone Working",
    sub: "Working alone or out of direct sight/contact of others",
    icon: "person",
    permits: ["Lone Worker Authorization (per site policy)"],
    hazards: [
      {
        hazard: "Delayed help if an incident occurs",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Establish a check-in schedule (call, radio, or app) at agreed intervals before the task starts",
          "Confirm someone knows the worker's location, task, and expected finish time",
          "Carry a means of raising an alarm appropriate to the location, and confirm it has signal/charge before starting"
        ],
        why: "The core risk in lone working isn't the task itself — it's the absence of anyone to notice something went wrong. The check-in system is the actual control, not a formality."
      },
      {
        hazard: "Task turns out to require two people",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Assess before starting whether the task can safely be done alone at all — some tasks simply aren't permitted solo under site procedure",
          "Stop and call for a second person rather than improvising if the task proves more than expected"
        ],
        why: "Deciding a task is 'lone-workable' has to happen before it starts, not be discovered mid-task when it's harder to stop and ask for help."
      },
      {
        hazard: "Medical event with no witness (fall, cardiac event, allergic reaction)",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Ensure emergency contacts are current and any disclosed medical conditions are known where relevant",
          "Set a maximum time before an automatic escalation if a check-in is missed",
          "Avoid assigning genuinely high-risk solo tasks (height, confined space, live electrical) to lone workers regardless of check-in systems"
        ],
        why: "A check-in system tells you something is wrong faster — it doesn't prevent the event itself. High-risk tasks need an actual second person, not just faster notification."
      },
      {
        hazard: "Personal security risk in remote or after-hours locations",
        likelihood: "Unlikely",
        severity: "Moderate",
        controls: [
          "Confirm site access and lighting are adequate for after-hours or remote work",
          "Avoid scheduling lone work in isolated areas after dark where avoidable",
          "Carry a charged phone and know the fastest route to an occupied area"
        ],
        why: "Personal security is as much a lone-working hazard as a medical one, and gets overlooked because the JHA conversation defaults to physical/mechanical hazards."
      }
    ],
    toolboxTalk: [
      "Confirm the check-in schedule and who's monitoring it before starting",
      "Confirm this specific task is actually permitted to be done alone under site procedure",
      "Confirm the communication device has signal/charge and a backup if it fails",
      "Confirm someone knows the exact location and expected finish time",
      "Agree what happens if a check-in is missed — who escalates, and when",
      "Confirm the worker knows the fastest way to raise an alarm from this specific location"
    ],
    ppe: ["Lone-worker alarm device or app (per site policy)", "Charged communication device", "Standard PPE for the underlying task"],
  },
  {
    id: "marine-jetty",
    label: "Marine / Jetty Operations",
    sub: "Work on jetties, berths, vessel loading/unloading, dockside operations",
    icon: "anchor",
    permits: ["Jetty/Berth Work Permit", "Vessel-side Work Permit (per port/terminal procedure)"],
    hazards: [
      {
        hazard: "Fall into water from jetty edge or vessel gangway",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Guardrails/edge protection on jetty walkways maintained and inspected",
          "Life rings and throw lines positioned at intervals along the jetty, confirmed present before work starts",
          "Personal flotation device (PFD) worn for any task with fall-into-water risk"
        ],
        why: "A fall from a jetty combines drowning risk with potential impact injury against the structure or vessel hull — both need addressing, not just one."
      },
      {
        hazard: "Struck or crushed between vessel and jetty (surge/mooring movement)",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "No standing in the direct line between vessel and jetty fendering during berthing/mooring operations",
          "Confirm mooring lines are properly tensioned and monitored, especially in swell conditions",
          "Maintain clear communication between vessel crew, jetty crew, and mooring gang throughout the operation"
        ],
        why: "Vessel surge against a jetty can move with enormous force and little warning — the control is positioning and communication, not personal alertness alone."
      },
      {
        hazard: "Hazardous cargo/product exposure during loading or unloading",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Confirm product SDS and any vapour/gas monitoring requirements before connecting hoses/arms",
          "Confirm static bonding/grounding between vessel and shore is connected and verified before transfer begins — see the dedicated static electricity hazard below for the full procedure",
          "Emergency shutdown procedure and location confirmed by all parties before starting transfer"
        ],
        why: "Loading/unloading combines chemical-transfer hazards with the added complexity of two separate organizations — vessel and shore — needing to agree on the same procedure in real time."
      },
      {
        hazard: "Static electricity ignition during vessel-to-shore flammable product transfer",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Connect the bonding cable between vessel and shore and verify continuity before any hose or arm is connected, and keep it connected until after the hose/arm is disconnected — bonding is the first thing on and the last thing off",
          "Confirm the bonding clamp makes contact with bare, clean metal on both the vessel and shore side — paint, rust, or marine growth on the contact point defeats the bond even though it looks connected",
          "Control the initial fill/loading rate (a slow start) since splash-filling and high-velocity flow generate more static charge than a controlled, submerged-fill start",
          "No transfer operations during electrical storm activity in the area"
        ],
        why: "The transfer itself generates the static charge as product moves through the hose and into the tank — bonding doesn't prevent the charge from forming, it gives it a path to ground instead of a path through a spark gap into flammable vapour."
      },
      {
        hazard: "Slips on wet, algae-covered, or uneven jetty surfaces",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Regular inspection and cleaning of walkway surfaces, especially areas exposed to spray/rain",
          "Adequate lighting for night operations",
          "Non-slip footwear appropriate for marine/wet-deck conditions"
        ],
        why: "Jetty surfaces are wet far more often than they're dry — a high-frequency, low-drama hazard that's easy to under-prioritize next to the more dramatic ones on this list."
      }
    ],
    toolboxTalk: [
      "Confirm PFDs are worn and life rings/throw lines are in place before work starts",
      "Confirm communication protocol between vessel crew, jetty crew, and mooring gang",
      "Confirm the product SDS and monitoring requirements for today's cargo",
      "Confirm static bonding/grounding is connected before any transfer begins",
      "Confirm the emergency shutdown location and procedure with all parties",
      "Walk the jetty surface for slip hazards before starting, especially after rain"
    ],
    ppe: ["Personal flotation device (PFD)", "Hard hat", "Non-slip safety boots", "High-visibility clothing", "Gas monitor for cargo transfer operations", "Chemical-resistant gloves matched to product"],
  },
  {
    id: "waste-handling",
    label: "Waste Handling & Segregation",
    sub: "Collection, sorting, storage, and disposal of general and hazardous waste",
    icon: "trash",
    permits: ["Hazardous Waste Transport/Disposal documentation (licensed contractor only)"],
    hazards: [
      {
        hazard: "Mixing incompatible hazardous wastes",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Segregate hazardous waste streams at the point of generation — never combine without confirming compatibility",
          "Label all hazardous waste containers clearly with contents and hazard class",
          "Use only designated, compatible storage containers for each waste stream"
        ],
        why: "Waste incompatibility incidents (fire, toxic gas generation) usually trace back to convenience mixing at the point of collection, not a dramatic single event."
      },
      {
        hazard: "Cuts, punctures, or contamination from sharps or unknown waste contents",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Never hand-sort general waste without puncture-resistant gloves",
          "Treat any unlabeled or unknown-content container as hazardous until identified",
          "Use mechanical aids (grabbers, carts) rather than direct hand contact where possible"
        ],
        why: "The hazard in general waste handling is almost always what someone else put in the bin, not the bin itself."
      },
      {
        hazard: "Manual handling injury from waste bins/containers",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Use wheeled bins/mechanical aids rather than manual carrying wherever possible",
          "Team-lift heavy or awkward containers",
          "Don't overfill bins beyond a safely liftable weight"
        ],
        why: "Waste handling is repetitive manual work by nature — the same musculoskeletal-injury logic from other tasks in this library applies here just as much."
      },
      {
        hazard: "Improper disposal leading to environmental release",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Use only licensed waste contractors for hazardous waste removal, with documentation retained",
          "Confirm waste storage areas have adequate containment (bunding) against spill or rainwater runoff",
          "Report any waste-related spill or suspected illegal dumping through the same channel as any other environmental incident"
        ],
        why: "Improper waste disposal is both an OSH matter and squarely an EMA matter — see the Environmental reference section for the regulatory duties this connects to."
      }
    ],
    toolboxTalk: [
      "Confirm today's waste streams are being segregated correctly, not combined for convenience",
      "Confirm any unlabeled containers are treated as unknown/hazardous until identified",
      "Confirm mechanical aids are used for heavy or awkward waste containers",
      "Confirm hazardous waste is only handed off to a licensed, documented contractor",
      "Check waste storage areas for containment/bunding adequacy",
      "Remind the crew: puncture-resistant gloves for any general waste sorting"
    ],
    ppe: ["Puncture-resistant gloves", "Safety boots", "High-visibility vest", "Coveralls for hazardous waste handling", "Respiratory protection if handling dust/fume-generating waste"],
  },
  {
    id: "contractor-induction",
    label: "Contractor / Visitor Site Induction",
    sub: "Orienting new contractors, visitors, or personnel unfamiliar with the site",
    icon: "badge",
    permits: [],
    hazards: [
      {
        hazard: "Contractor/visitor unaware of site-specific hazards or restricted zones",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Walk through a site map identifying restricted/high-hazard zones before access is granted",
          "Confirm the visitor/contractor's scope of work and restrict access to only what's needed for it",
          "Issue site-specific PPE requirements before entry, not after arrival at the work area"
        ],
        why: "Someone unfamiliar with a site doesn't know what they don't know — the induction is the only point where that gap gets closed before it becomes an incident."
      },
      {
        hazard: "Unfamiliarity with site emergency procedures",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Confirm muster point location and alarm signals as part of every induction, without exception",
          "Provide emergency contact numbers specific to the site, not just general numbers",
          "Confirm the visitor/contractor knows who their site escort/contact is at all times"
        ],
        why: "An emergency is exactly the moment someone unfamiliar with the site is least likely to figure things out on their own — this has to be front-loaded before anything else."
      },
      {
        hazard: "Contractor's own equipment or work method not assessed against site standards",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Review the contractor's own risk assessment/method statement against site requirements before work starts",
          "Confirm contractor equipment (electrical, lifting, PPE) meets site inspection/certification standards, not just their home company's",
          "Assign a site contact responsible for ongoing oversight, not just initial induction"
        ],
        why: "A contractor's method statement written for a different site doesn't automatically account for this site's specific hazards — someone has to actually cross-check it."
      },
      {
        hazard: "Language or communication barrier affecting comprehension of the safety briefing",
        likelihood: "Unlikely",
        severity: "Moderate",
        controls: [
          "Confirm the induction is actually understood, not just delivered — ask questions rather than relying on a signature alone",
          "Provide visual/pictorial safety information where language could be a barrier",
          "Pair an unfamiliar contractor with an experienced escort for their first period on site"
        ],
        why: "A signed induction form proves attendance, not comprehension — the two aren't the same thing, and only one of them actually protects anyone."
      },
      {
        hazard: "One contractor's work creating hazards for other crews on a shared site",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Before work starts, host and contractor exchange information: hazards present, hazards their work creates, controls in place, and how to report a concern or incident",
          "Agree in the contract or permit who provides each part of the safety program — training, supervision, inspections, equipment — so no gap opens between employers",
          "Harmonise PPE and site rules across employers; inconsistent rules make workers doubt the controls",
          "Coordinate scheduling so incompatible work doesn't overlap (for example hot work below overhead work)",
          "Share non-routine and emergency hazards and procedures up front, and again whenever conditions change"
        ],
        why: "OSHA 3885 describes host-employer and contractor coordination as its own core element. In T&T, s.7 of the OSH Act requires an employer to protect non-employees who may be affected by the undertaking."
      }
    ],
    toolboxTalk: [
      "Confirm the visitor/contractor's scope of work and restrict site access accordingly",
      "Walk through muster points, alarm signals, and emergency contacts as a mandatory step",
      "Confirm PPE requirements are communicated and met before site entry",
      "Review the contractor's method statement/risk assessment against site standards",
      "Confirm comprehension through questions, not just a signature",
      "Assign and confirm a site contact/escort for the duration of the visit"
    ],
    ppe: ["Visitor/contractor badge or ID", "Standard site PPE (hard hat, safety boots, high-vis) issued at induction", "Task-specific PPE per the contractor's actual scope of work"],
  },
  {
    id: "hand-power-tools",
    label: "Hand & Power Tool Use",
    sub: "General hand tools, portable power tools, and pneumatic/compressed-air tools",
    icon: "wrench",
    permits: ["Hot Work Permit if grinding/cutting produces sparks — see Tools & Equipment reference"],
    hazards: [
      {
        hazard: "Wrong or damaged tool used for the task",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Select the tool actually designed for the task, not the closest one to hand",
          "Inspect for cracks, looseness, or wear before every use — tag and remove any damaged tool from service immediately",
          "Never use a tool that's been modified or had a guard or safety device removed"
        ],
        why: "Misuse and poor maintenance are consistently the two leading causes of hand-tool injury — both are fully preventable at the point of picking the tool up, before any work starts."
      },
      {
        hazard: "Flying particles, chips, or fragments",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Eye protection (safety glasses minimum, face shield for grinding/chipping/cutting) worn every time, not just when it feels needed",
          "Use the wheel/blade guard — never remove it to work faster",
          "Secure the workpiece in a vice or clamp rather than holding it in your hand while cutting or striking"
        ],
        why: "A shattered grinding wheel or a chiselled fragment travels fast enough that reaction time alone won't protect an unshielded eye."
      },
      {
        hazard: "Electric shock from power tools",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Inspect cords, plugs, and switches before use — no exposed wiring, no missing ground pin",
          "Use double-insulated tools or a GFCI (ground fault circuit interrupter) in wet, damp, or outdoor locations",
          "Never use electrical tools in standing water or rain unless specifically rated for it",
          "Verify isolation with a calibrated multimeter or non-contact voltage tester before working on any circuit believed de-energized — never assume it's dead"
        ],
        why: "Electricity gives no visible warning before it becomes dangerous — the inspection has to happen every time, not just when a tool looks obviously worn."
      },
      {
        hazard: "Standard (non-rated) tools used in a classified/hazardous area",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Confirm non-sparking hand tools (brass, bronze, or beryllium-copper) are used for any work inside a Zone 1/Division 1 classified area",
          "Confirm cordless or electric power tools are intrinsically safe or Ex-rated before bringing them into a classified area — a standard drill or grinder is not automatically excluded just because it isn't producing visible sparks",
          "Treat area classification signage as a hard stop, not a suggestion — check before the tool goes in, not after"
        ],
        why: "This is the one hand-tool hazard on this list where a wrong choice doesn't just injure the person holding the tool — it can ignite a flammable atmosphere on an ammonia or methanol process unit."
      },
      {
        hazard: "Incorrect bolt torque on process piping and flange joints",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Use a calibrated torque wrench matched to the joint's specified torque value — never estimate by feel on a process-critical joint",
          "Confirm a hydraulic torque wrench's calibration before turnaround-scale bolting work, and follow the correct bolt-up sequence (typically star/criss-cross pattern in stages), not just tightening in order",
          "Report a tool whose calibration sticker is missing or expired rather than using it anyway"
        ],
        why: "Under- or over-torqued flange bolting is a direct, well-documented cause of loss-of-containment incidents on ammonia and methanol lines — this isn't a general mechanical concern, it's process safety."
      },
      {
        hazard: "Compressed-air tool injury (blow guns, pneumatic tools)",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Never use compressed air to clean clothing, skin, or hair — it can penetrate skin and enter the bloodstream",
          "Check hoses and fittings for cracks or wear before use, and use safety clips or retainers on connections",
          "Bleed off line pressure before disconnecting any fitting"
        ],
        why: "Compressed air is one of the most underestimated hazards on a tool list — it doesn't look dangerous, but a skin injection injury from it is a genuine medical emergency."
      },
      {
        hazard: "Hand-arm vibration syndrome (HAVS) from prolonged tool use",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Limit continuous use of vibrating tools (grinders, breakers, impact wrenches) with scheduled breaks",
          "Use impact-resistant/anti-vibration gloves and ergonomically designed tools where available",
          "Report tingling, numbness, or whitening in the fingers immediately — these are early HAVS symptoms, not something to work through"
        ],
        why: "HAVS is cumulative and often irreversible once symptoms appear — the exposure limit is a time-based control, not a one-off precaution."
      }
    ],
    toolboxTalk: [
      "Confirm the right tool is available for today's task — not just the closest one",
      "Inspect tools together before starting: cracks, looseness, damaged cords, missing guards",
      "Confirm eye/face protection is worn for any cutting, grinding, or striking task",
      "If compressed air is in use, confirm it's never pointed at skin or clothing",
      "Check that power tool cords and plugs are in good condition, especially near water",
      "Confirm isolation is verified with a calibrated meter before anyone touches a circuit believed de-energized",
      "Confirm non-sparking tools and Ex-rated power tools are used for any work inside a classified/hazardous area today",
      "Confirm any process piping or flange bolting uses a calibrated torque wrench, not tool feel",
      "Remind the crew: numbness or tingling from vibrating tools gets reported, not worked through"
    ],
    ppe: ["Safety glasses / face shield for cutting or grinding", "Cut-resistant or general work gloves matched to the task", "Hearing protection for prolonged power tool use", "Impact-resistant gloves for pickaxe, sledgehammer, or other striking tools", "Anti-vibration/impact-resistant gloves for extended grinder/breaker use", "Insulated/electrical-rated gloves for meter/multimeter use on live-suspect circuits", "Safety boots",
      "Hard hat in plant and overhead-hazard areas",
      "Respirator suited to the dust from grinding, cutting or sanding (fit-tested)"],
  },
  {
    id: "plumbing",
    label: "Plumbing Work",
    sub: "Potable/process water piping, drain lines, fixture installation and repair, pipe fitting",
    icon: "droplet",
    permits: ["Work Permit (general)", "Hot Work Permit if soldering/brazing with an open flame", "Confined Space Entry Permit if working inside a pit, sump, or vault", "Excavation Permit if repairing buried lines"],
    hazards: [
      {
        hazard: "Exposure to sewage/wastewater and biological contamination during drain or sewer work",
        likelihood: "Possible",
        severity: "Moderate",
        controls: [
          "Treat any waste-line job as a biohazard exposure risk — cut-resistant or heavy rubber gloves plus eye protection as a minimum, not just general work gloves",
          "Cover cuts or abrasions with a waterproof dressing before starting, and wash exposed skin immediately after any contact",
          "No eating, drinking, or touching the face until hands are properly washed after waste-line work"
        ],
        why: "Sewage exposure carries a real infection risk that's easy to underweight next to the more dramatic mechanical hazards on the same job."
      },
      {
        hazard: "Burns or fire from soldering/brazing (propane torch) on pipework",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Treat any torch work as hot work — permit, fire watch, and extinguisher within reach, even for a 'quick' joint",
          "Clear or shield combustible material from the work area before lighting the torch, including inside wall or ceiling cavities where you can't see what's behind the pipe",
          "Check for old lead-based paint or coatings on pipework before heating — fume hazard, not just fire risk"
        ],
        why: "A small torch flame on an ordinary pipe joint still starts fires the same way a cutting torch does — the informal feel of 'just soldering a joint' is exactly what leads a site to skip the hot work permit it would never skip for welding."
      },
      {
        hazard: "High-pressure injection injury from jetting equipment or pressurized lines",
        likelihood: "Unlikely",
        severity: "Major",
        controls: [
          "Depressurize and drain any line before disconnecting fittings — confirm zero pressure, don't assume it from a closed valve alone",
          "Never point a jetting nozzle or discharge point at any part of the body, even briefly",
          "Treat any high-pressure injection injury as a medical emergency requiring immediate attention, even if it looks like a minor puncture"
        ],
        why: "A high-pressure water injection injury can look trivial on the skin while doing serious damage underneath — the wound doesn't look like what it actually is."
      },
      {
        hazard: "Entanglement on powered drain augers/snakes",
        likelihood: "Unlikely",
        severity: "Moderate",
        controls: [
          "Keep loose clothing, gloves, and hair clear of the rotating cable at all times",
          "Use the manufacturer's foot switch/clutch control rather than leaving the machine running continuously",
          "Two-person operation on any powered auger — one feeding the cable, one on the control"
        ],
        why: "A rotating drain cable will grab a loose glove or sleeve the same way any rotating shaft does, and it's easy to treat this tool as low-risk because it looks like an ordinary hand tool."
      },
      {
        hazard: "Cross-connection / backflow contamination between potable and non-potable water systems",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Never connect a potable water line directly to a non-potable source (irrigation, process water, chemical systems) without an approved backflow prevention device",
          "Confirm backflow preventers are tested and tagged per schedule, not just installed once and forgotten",
          "Flag any temporary hose connection between systems to a supervisor before making it, even for a short job"
        ],
        why: "This is one of the few plumbing hazards where the injured party isn't the plumber — a backflow event can contaminate a much wider water supply than the immediate work area, which is why it's treated as a process-safety issue, not just a trade practice."
      },
      {
        hazard: "Working in confined pits, sumps, or vaults to access buried piping/valves",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Treat any below-grade pit, sump, or vault as a confined space until proven otherwise — gas-test before entry, don't assume open-air ventilation is enough",
          "Follow the Confined Space Entry procedure in full (permit, attendant, retrieval) rather than treating a 'quick look' as an exception",
          "Be alert for hydrogen sulphide or an oxygen-deficient atmosphere in sewage-adjacent pits specifically"
        ],
        why: "A plumbing pit doesn't look like the classic image of a confined space, which is exactly why it gets treated informally — the atmospheric risk doesn't care how the space looks from the surface."
      }
    ],
    toolboxTalk: [
      "Confirm today's job involves any waste/sewage line — if so, confirm the crew has the right gloves and hygiene plan",
      "If soldering or brazing is planned, confirm the Hot Work Permit and fire watch are in place",
      "Confirm any pressurized line is depressurized and drained before disconnecting fittings",
      "If using a powered drain auger, confirm two-person operation and clothing clear of the rotating cable",
      "Confirm no temporary connection is being made between potable and non-potable systems without an approved backflow device",
      "If accessing a pit, sump, or vault today, confirm it's being treated as a confined space — gas test first"
    ],
    ppe: ["Safety glasses", "Cut-resistant or heavy-duty rubber gloves", "Heat-resistant gloves for soldering/brazing", "Waterproof apron/coveralls for drain and sewage work", "Safety boots", "Respiratory protection if using solvent-based pipe cement in an enclosed space", "Calibrated multi-gas monitor if entering a pit/sump/vault"],
  },
  {
    id: "ceiling-grid",
    label: "Ceiling — Suspended Grid & Tile",
    sub: "Lay-in tiles on a hung metal grid — strip-out, void work, re-grid and re-tile",
    icon: "ceiling",
    permits: [
      "Work Permit (general)",
      "Working at Height Permit (if site policy requires)",
      "Electrical isolation / LOTO for any circuits, lights or A/C units in the ceiling void",
      "Hot Work Permit if cutting or welding hangers, angles or steel",
      "Fire detection / sprinkler impairment approval if detectors or heads are covered, isolated or moved",
      "Suspect-material (asbestos) clearance from HSE before any old ceiling material is disturbed",
      "Confined Space Entry Permit only if your site classifies the roof void as a confined space"
    ],
    hazards: [
      {
        hazard: "Fall from height — stepladders, mobile towers and platforms while working overhead",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Use a mobile scaffold tower, podium or MEWP for anything beyond a short, light task — a stepladder is not a work platform for hours of overhead work",
          "Stepladders fully open on firm level ground, never the top step or top rung, no overreaching; a second person footing it where site rules require",
          "Mobile towers: castors locked, platform fully decked with guardrails and toeboards, safe access inside the frame, erected and tagged by a competent scaffolder, never moved with people or materials on top",
          "Check the floor before positioning a tower or lift, and confirm your site's fall protection trigger height (commonly about 1.8 m / 6 ft, the US OSHA construction benchmark)"
        ],
        why: "Falls from ladders and working platforms are the main fatal-injury route on ceiling work. OSHA 3755 and the ceiling-tile JHA (Ref. S-R-6) both stress inspected equipment, level ground and no standing on the top rung. The 6 ft trigger is a US benchmark, not T&T law — your site's standard governs."
      },
      {
        hazard: "Falling through the ceiling, or off the structure above it",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Never step, kneel or lean on ceiling tiles, boards, panels or grid — treat the whole ceiling as fragile",
          "Work above the ceiling only from a proper walkway or crawl boards laid across the structure, with a second person outside as standby and an agreed way to communicate",
          "Where there is a fall-through risk or an unprotected edge in the void, use a harness tied off to a confirmed, rated anchor on the structure — never to ducts, pipes, conduit, cable tray or wiring",
          "Light the void before entering, and guard or cover every opening you make — never leave one open and unattended"
        ],
        why: "A ceiling looks solid and isn't — falling through it is the classic way this job turns fatal. OSHA 3146 requires protection (covers, guardrails or fall arrest) against falling through holes, including skylights; the same logic applies to any fragile surface."
      },
      {
        hazard: "Falling debris and sections of ceiling, and other people below",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Before removing anything, pull one tile, board or panel back and survey the void for loose items, stored material, wet or sagging insulation and hanging services (JHA Ref. S-R-6)",
          "Barricade and sign the floor below; nobody enters the drop zone while strip-out is under way, and occupants and other contractors are told what is happening, when and where",
          "Remove sections in a planned sequence and support what you release; lower debris in bags, bins or a chute — never throw it from the platform; tether hand tools",
          "Hard hats on everyone in the zone, including the person on the platform",
          "Keep exits, escape routes and extinguisher access clear; at the end of each shift remove debris, cover openings, secure tools and leave barricades in place"
        ],
        why: "A ceiling void is an uninventoried storage space, and what is up there comes down with the ceiling. OSHA 3885 asks host employers and contractors to share hazards and coordinate before work starts, and s.7 of the T&T OSH Act requires employers to protect non-employees affected by their work."
      },
      {
        hazard: "Asbestos or other legacy material, plus dust and insulation fibres",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Treat old ceiling tiles, any textured or sprayed coating, and any pipe or duct lagging or insulation in the void as suspect until it has been identified — if unsure, stop and have the HSE department check the area before work starts (JHA Ref. S-R-6); a building's age neither rules asbestos in nor out",
          "Do not drill, cut, break, sand, scrape or dry-sweep suspect material; keep it wet, keep people out and report it. If asbestos is confirmed, the work goes to a trained, competent asbestos contractor under your site's asbestos procedure",
          "Apply the same stop-and-assess rule to old paint that may contain lead and to water-damaged material with mould",
          "Fit-tested respirator with particulate filters, sealed goggles, gloves, and coveralls or long sleeves with cuffs and collar closed",
          "Clean up with a HEPA vacuum or wet wipe — no dry sweeping or compressed-air blow-down; wash hands and face before eating, drinking or smoking"
        ],
        why: "Asbestos fibres cause asbestosis, lung cancer and mesothelioma, and the illness shows up years later. OSHA 3755 flags it in older insulation and building materials (benchmark: 29 CFR 1926.1101). I have not confirmed a T&T asbestos-specific regulation, so none is cited — the OSH Act general duties and your site procedure apply."
      },
      {
        hazard: "Hidden services above the ceiling — electrical, fire detection and sprinklers",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Assume every cable, light fitting, A/C unit and junction box in the void is live until isolated, locked out and proved dead with a tester you have checked on a known source; have an electrician trace and mark circuits first",
          "Isolate light fittings before lowering them — switching off is not isolation; take care with screws, nails and cutting tools near concealed cable; power tools on an RCD/GFCI-protected supply",
          "Confirm whether the building is in a classified (hazardous) area — if so, tools, lighting and ignition sources must be suitable for it",
          "Smoke/heat detectors and sprinkler heads: get any isolation or covering approved with the control room/fire team first, cover only what was agreed, and have each one reinstated and tested before handing back",
          "Never hang anything from sprinkler pipes, cable trays or process pipework; reinstate fire stopping at every penetration"
        ],
        why: "OSHA 3755 notes concealed conduit is an electrocution hazard that requires de-energising, grounding or insulation (29 CFR 1926.416(a)(1)); cables in a ceiling void are the same hazard. Disabling detection and not restoring it is a recurring root cause in fire incidents."
      },
      {
        hazard: "Cuts, tool injuries and manual handling strain",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Retractable-blade safety knives; cut on the floor or a bench, away from the body, free hand clear of the blade (JHA Ref. S-R-6); cut-resistant gloves for edges",
          "Inspect tools before use, guards in place, eye protection for all overhead drilling and cutting; remove the battery or unplug before changing bits or blades; powder-actuated tools only by trained, authorised operators",
          "Two-person lifts for full sheets and panels, lifters or a hoist for heavy ones; never carry anything up a ladder that stops you holding on — use a bucket and rope",
          "Rotate people off overhead work and give short breaks — work above shoulder height is a recognised ergonomic risk (OSHA 3885)"
        ],
        why: "The ceiling-tile JHA lists razor cutting as a severe-laceration risk and tool inspection as routine. OSHA 3755 requires eye protection with power tools and replacement of damaged guards (29 CFR 1926.300(b)(1)), and says not to carry anything that could unbalance you on a ladder."
      },
      {
        hazard: "Heat stress in the void, and bites, stings and droppings",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Roof voids and un-air-conditioned buildings in Trinidad's climate can be far hotter than outside — plan void work for the cooler part of the day, limit time per entry, never send anyone in alone",
          "WATER, REST, SHADE: water at hand, scheduled breaks outside the void, extra breaks for anyone new or back after a week away. Heat stroke (confusion, no sweating, hot dry skin, collapse) is an emergency — call for help and cool the person immediately",
          "Look before you reach: wasp and hornet nests, bats, rats and snakes are common in roof voids — check with a torch before putting hands in any gap; treat droppings as a breathing hazard (no dry sweeping)",
          "If you find a nest, stop and get pest control; anyone with a known severe sting allergy stays out of the void and carries their own medication; know the nearest first aider"
        ],
        why: "OSHA 3755 sets out water, rest and shade, acclimatisation, and heat stroke as a medical emergency; OSHA 3885 lists mould and animal materials among biological hazards to identify. A closed void adds radiant heat and poor airflow on top of Trinidad's ambient heat, and roof voids are routine habitat for wasps, bats and rodents."
      },
      {
        hazard: "Grid, hangers and fittings collapsing as a section is released",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Lights, diffusers, A/C cassettes, speakers, detectors and sprinkler drops may sit in or hang from the grid — disconnect and support each before releasing the section around it",
          "Check hangers and wires for corrosion and wet tiles for weight; water-damaged mineral-fibre tiles can come down in clumps",
          "Start from a planned point and remove in sequence; never remove a hanger that is carrying a load you can't see",
          "Fix the new grid to the structure with rated fixings — never to pipes, ducts, cable tray or sprinkler lines"
        ],
        why: "A suspended grid is only as strong as its weakest hanger, and old, corroded or overloaded hangers fail without warning. The sequence and support rules turn a collapse into a controlled removal."
      },
      {
        hazard: "Overhead drilling, anchors, and cutting hangers, angle and track",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Scan the slab or beam for rebar and services before drilling or fixing; slab dust can contain crystalline silica, so use extraction or wet methods and a respirator",
          "Anchors rated for the load and installed to the manufacturer's instructions",
          "Cutting steel hangers or angle with a grinder or torch is hot work — permit, fire watch (including above the ceiling after work stops) and combustibles covered",
          "Eye protection and hearing protection for all overhead drilling; tether tools and keep sharp cut ends controlled"
        ],
        why: "Overhead drilling combines dust, sparks, falling offcuts and the chance of hitting a hidden cable. OSHA 3755 requires a fire watch of at least two hours after torch work on roofs — the same logic applies above a ceiling."
      }
    ],
    toolboxTalk: [
      "Confirm what this ceiling is made of and whether anyone has checked for asbestos — if not, nobody starts",
      "Nobody steps on the ceiling, ever: agree the walkway, who is standby for every void entry, and who checked the ladder or tower",
      "Drop zone barricaded, exits clear, electrical isolated and proved dead, and the plan for detectors and sprinklers agreed",
      "Grid: every fitting disconnected and supported before its section is released; hangers checked; no hanging from pipes or sprinklers",
      "Heat and pests: water point, time limit per void entry, look before you reach, and the signs of heat stroke",
      "Emergency: how to rescue someone who falls through or collapses in the void, the nearest first aider and medical facility, and the emergency contact written on the permit (Section 8)"
    ],
    ppe: [
      "Hard hat (chin strap when working at height)",
      "Safety glasses — sealed goggles for overhead drilling, cutting and dust",
      "Respirator with particulate filters (fit-tested) — never a substitute for stopping work on suspected asbestos",
      "Cut-resistant gloves for grid, track, sheet edges and knives",
      "Long-sleeve coveralls (disposable if working in insulation)",
      "Safety boots with good grip",
      "Hearing protection for drilling and cutting",
      "Full-body harness where fall arrest is required for void work or high platforms"
    ]
  },
  {
    id: "ceiling-board",
    label: "Ceiling — Gypsum / Board",
    sub: "Plasterboard, gypsum or fibre-cement board on timber or steel framing — strip-out, re-fix, finish",
    icon: "ceiling",
    permits: [
      "Work Permit (general)",
      "Working at Height Permit (if site policy requires)",
      "Electrical isolation / LOTO for any circuits, lights or A/C units in the ceiling void",
      "Fire detection / sprinkler impairment approval if detectors or heads are covered, isolated or moved",
      "Suspect-material (asbestos) clearance from HSE before any old ceiling material is disturbed",
      "Confined Space Entry Permit only if your site classifies the roof void as a confined space"
    ],
    hazards: [
      {
        hazard: "Fall from height — stepladders, mobile towers and platforms while working overhead",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Use a mobile scaffold tower, podium or MEWP for anything beyond a short, light task — a stepladder is not a work platform for hours of overhead work",
          "Stepladders fully open on firm level ground, never the top step or top rung, no overreaching; a second person footing it where site rules require",
          "Mobile towers: castors locked, platform fully decked with guardrails and toeboards, safe access inside the frame, erected and tagged by a competent scaffolder, never moved with people or materials on top",
          "Check the floor before positioning a tower or lift, and confirm your site's fall protection trigger height (commonly about 1.8 m / 6 ft, the US OSHA construction benchmark)"
        ],
        why: "Falls from ladders and working platforms are the main fatal-injury route on ceiling work. OSHA 3755 and the ceiling-tile JHA (Ref. S-R-6) both stress inspected equipment, level ground and no standing on the top rung. The 6 ft trigger is a US benchmark, not T&T law — your site's standard governs."
      },
      {
        hazard: "Falling through the ceiling, or off the structure above it",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Never step, kneel or lean on ceiling tiles, boards, panels or grid — treat the whole ceiling as fragile",
          "Work above the ceiling only from a proper walkway or crawl boards laid across the structure, with a second person outside as standby and an agreed way to communicate",
          "Where there is a fall-through risk or an unprotected edge in the void, use a harness tied off to a confirmed, rated anchor on the structure — never to ducts, pipes, conduit, cable tray or wiring",
          "Light the void before entering, and guard or cover every opening you make — never leave one open and unattended"
        ],
        why: "A ceiling looks solid and isn't — falling through it is the classic way this job turns fatal. OSHA 3146 requires protection (covers, guardrails or fall arrest) against falling through holes, including skylights; the same logic applies to any fragile surface."
      },
      {
        hazard: "Falling debris and sections of ceiling, and other people below",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Before removing anything, pull one tile, board or panel back and survey the void for loose items, stored material, wet or sagging insulation and hanging services (JHA Ref. S-R-6)",
          "Barricade and sign the floor below; nobody enters the drop zone while strip-out is under way, and occupants and other contractors are told what is happening, when and where",
          "Remove sections in a planned sequence and support what you release; lower debris in bags, bins or a chute — never throw it from the platform; tether hand tools",
          "Hard hats on everyone in the zone, including the person on the platform",
          "Keep exits, escape routes and extinguisher access clear; at the end of each shift remove debris, cover openings, secure tools and leave barricades in place"
        ],
        why: "A ceiling void is an uninventoried storage space, and what is up there comes down with the ceiling. OSHA 3885 asks host employers and contractors to share hazards and coordinate before work starts, and s.7 of the T&T OSH Act requires employers to protect non-employees affected by their work."
      },
      {
        hazard: "Asbestos or other legacy material, plus dust and insulation fibres",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Treat old boards and flat sheets, textured or sprayed coatings, joint compounds, and any pipe or duct lagging in the void as suspect until it has been identified — if unsure, stop and have the HSE department check the area before work starts (JHA Ref. S-R-6); a building's age neither rules asbestos in nor out",
          "Do not drill, cut, break, sand, scrape or dry-sweep suspect material; keep it wet, keep people out and report it. If asbestos is confirmed, the work goes to a trained, competent asbestos contractor under your site's asbestos procedure",
          "Apply the same stop-and-assess rule to old paint that may contain lead and to water-damaged material with mould",
          "Fit-tested respirator with particulate filters, sealed goggles, gloves, and coveralls or long sleeves with cuffs and collar closed",
          "Cut boards at floor level or outdoors, and sand with dust extraction or wet-sand; keep dust out of occupied areas and agree with the fire team how detectors are protected from it. Fibre-cement boards can produce silica-containing dust, so treat cutting as a breathing hazard"
        ],
        why: "Asbestos fibres cause asbestosis, lung cancer and mesothelioma, and the illness shows up years later. OSHA 3755 flags it in older insulation and building materials (benchmark: 29 CFR 1926.1101). I have not confirmed a T&T asbestos-specific regulation, so none is cited — the OSH Act general duties and your site procedure apply."
      },
      {
        hazard: "Hidden services above the ceiling — electrical, fire detection and sprinklers",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Assume every cable, light fitting, A/C unit and junction box in the void is live until isolated, locked out and proved dead with a tester you have checked on a known source; have an electrician trace and mark circuits first",
          "Isolate light fittings before lowering them — switching off is not isolation; take care with screws, nails and cutting tools near concealed cable; power tools on an RCD/GFCI-protected supply",
          "Confirm whether the building is in a classified (hazardous) area — if so, tools, lighting and ignition sources must be suitable for it",
          "Smoke/heat detectors and sprinkler heads: get any isolation or covering approved with the control room/fire team first, cover only what was agreed, and have each one reinstated and tested before handing back",
          "Never hang anything from sprinkler pipes, cable trays or process pipework; reinstate fire stopping at every penetration"
        ],
        why: "OSHA 3755 notes concealed conduit is an electrocution hazard that requires de-energising, grounding or insulation (29 CFR 1926.416(a)(1)); cables in a ceiling void are the same hazard. Disabling detection and not restoring it is a recurring root cause in fire incidents."
      },
      {
        hazard: "Cuts, tool injuries and manual handling strain",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Retractable-blade safety knives; cut on the floor or a bench, away from the body, free hand clear of the blade (JHA Ref. S-R-6); cut-resistant gloves for edges",
          "Inspect tools before use, guards in place, eye protection for all overhead drilling and cutting; remove the battery or unplug before changing bits; screw-gun bits and depth set to the board, not the framing behind it",
          "Two-person lifts for full sheets and panels, lifters or a hoist for heavy ones; never carry anything up a ladder that stops you holding on — use a bucket and rope",
          "Rotate people off overhead work and give short breaks — work above shoulder height is a recognised ergonomic risk (OSHA 3885)"
        ],
        why: "The ceiling-tile JHA lists razor cutting as a severe-laceration risk and tool inspection as routine. OSHA 3755 requires eye protection with power tools and replacement of damaged guards (29 CFR 1926.300(b)(1)), and says not to carry anything that could unbalance you on a ladder."
      },
      {
        hazard: "Heat stress in the void, and bites, stings and droppings",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Roof voids and un-air-conditioned buildings in Trinidad's climate can be far hotter than outside — plan void work for the cooler part of the day, limit time per entry, never send anyone in alone",
          "WATER, REST, SHADE: water at hand, scheduled breaks outside the void, extra breaks for anyone new or back after a week away. Heat stroke (confusion, no sweating, hot dry skin, collapse) is an emergency — call for help and cool the person immediately",
          "Look before you reach: wasp and hornet nests, bats, rats and snakes are common in roof voids — check with a torch before putting hands in any gap; treat droppings as a breathing hazard (no dry sweeping)",
          "If you find a nest, stop and get pest control; anyone with a known severe sting allergy stays out of the void and carries their own medication; know the nearest first aider"
        ],
        why: "OSHA 3755 sets out water, rest and shade, acclimatisation, and heat stroke as a medical emergency; OSHA 3885 lists mould and animal materials among biological hazards to identify. A closed void adds radiant heat and poor airflow on top of Trinidad's ambient heat, and roof voids are routine habitat for wasps, bats and rodents."
      },
      {
        hazard: "Heavy boards dropped or mis-fixed while being lifted overhead",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "A full sheet is a minimum two-person lift — use a board lifter or panel jack rather than holding it overhead by hand",
          "Fix from a stable tower or platform, not a stepladder, and keep each board supported until enough screws are in",
          "Check that the joists, battens or furring are sound and spaced to take the board before loading them",
          "Keep the area below clear while boards are being raised and fixed"
        ],
        why: "Boards are awkward as well as heavy, and a lifter dropping one from head height injures the people on and below the platform. Mechanical support and a stable work platform remove most of the risk."
      },
      {
        hazard: "Wet, sagging or mouldy boards coming down in one piece during strip-out",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Stay out from under bulges, stains and sagging areas, and find and stop the leak source first",
          "Support the board before taking out its fixings, and work from the edges rather than the middle of a sagging area",
          "Wet gypsum is very heavy and breaks up unpredictably — plan to take it down in small sections and bag it as you go",
          "Mouldy board needs respiratory protection and gloves, and a stop-and-assess if it may also contain asbestos"
        ],
        why: "Water-damaged board loses strength and can release its full weight at once. The pull-back survey in the common controls tells you where to expect it."
      }
    ],
    toolboxTalk: [
      "Confirm what this ceiling is made of and whether anyone has checked for asbestos — if not, nobody starts",
      "Nobody steps on the ceiling, ever: agree the walkway, who is standby for every void entry, and who checked the ladder or tower",
      "Drop zone barricaded, exits clear, electrical isolated and proved dead, and the plan for detectors and sprinklers agreed",
      "Board: two-person lifts or a board lifter, stable platform, and no standing under sagging or stained areas",
      "Heat and pests: water point, time limit per void entry, look before you reach, and the signs of heat stroke",
      "Emergency: how to rescue someone who falls through or collapses in the void, the nearest first aider and medical facility, and the emergency contact written on the permit (Section 8)"
    ],
    ppe: [
      "Hard hat (chin strap when working at height)",
      "Safety glasses — sealed goggles for overhead drilling, cutting and dust",
      "Respirator with particulate filters (fit-tested) — never a substitute for stopping work on suspected asbestos",
      "Cut-resistant gloves for grid, track, sheet edges and knives",
      "Long-sleeve coveralls (disposable if working in insulation)",
      "Safety boots with good grip",
      "Hearing protection for drilling and cutting",
      "Full-body harness where fall arrest is required for void work or high platforms"
    ]
  },
  {
    id: "ceiling-panel",
    label: "Ceiling — PVC, Timber & Panel",
    sub: "PVC strip panels, timber, plywood and tongue-and-groove ceilings — strip-out and re-fix",
    icon: "ceiling",
    permits: [
      "Work Permit (general)",
      "Working at Height Permit (if site policy requires)",
      "Electrical isolation / LOTO for any circuits, lights or A/C units in the ceiling void",
      "Hot Work Permit only if unavoidable — keep PVC and adhesives clear of any hot work",
      "Fire detection / sprinkler impairment approval if detectors or heads are covered, isolated or moved",
      "Suspect-material (asbestos) clearance from HSE before any old ceiling material is disturbed",
      "Confined Space Entry Permit only if your site classifies the roof void as a confined space"
    ],
    hazards: [
      {
        hazard: "Fall from height — stepladders, mobile towers and platforms while working overhead",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Use a mobile scaffold tower, podium or MEWP for anything beyond a short, light task — a stepladder is not a work platform for hours of overhead work",
          "Stepladders fully open on firm level ground, never the top step or top rung, no overreaching; a second person footing it where site rules require",
          "Mobile towers: castors locked, platform fully decked with guardrails and toeboards, safe access inside the frame, erected and tagged by a competent scaffolder, never moved with people or materials on top",
          "Check the floor before positioning a tower or lift, and confirm your site's fall protection trigger height (commonly about 1.8 m / 6 ft, the US OSHA construction benchmark)"
        ],
        why: "Falls from ladders and working platforms are the main fatal-injury route on ceiling work. OSHA 3755 and the ceiling-tile JHA (Ref. S-R-6) both stress inspected equipment, level ground and no standing on the top rung. The 6 ft trigger is a US benchmark, not T&T law — your site's standard governs."
      },
      {
        hazard: "Falling through the ceiling, or off the structure above it",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Never step, kneel or lean on ceiling tiles, boards, panels or grid — treat the whole ceiling as fragile",
          "Work above the ceiling only from a proper walkway or crawl boards laid across the structure, with a second person outside as standby and an agreed way to communicate",
          "Where there is a fall-through risk or an unprotected edge in the void, use a harness tied off to a confirmed, rated anchor on the structure — never to ducts, pipes, conduit, cable tray or wiring",
          "Light the void before entering, and guard or cover every opening you make — never leave one open and unattended"
        ],
        why: "A ceiling looks solid and isn't — falling through it is the classic way this job turns fatal. OSHA 3146 requires protection (covers, guardrails or fall arrest) against falling through holes, including skylights; the same logic applies to any fragile surface."
      },
      {
        hazard: "Falling debris and sections of ceiling, and other people below",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Before removing anything, pull one tile, board or panel back and survey the void for loose items, stored material, wet or sagging insulation and hanging services (JHA Ref. S-R-6)",
          "Barricade and sign the floor below; nobody enters the drop zone while strip-out is under way, and occupants and other contractors are told what is happening, when and where",
          "Remove sections in a planned sequence and support what you release; lower debris in bags, bins or a chute — never throw it from the platform; tether hand tools",
          "Hard hats on everyone in the zone, including the person on the platform",
          "Keep exits, escape routes and extinguisher access clear; at the end of each shift remove debris, cover openings, secure tools and leave barricades in place"
        ],
        why: "A ceiling void is an uninventoried storage space, and what is up there comes down with the ceiling. OSHA 3885 asks host employers and contractors to share hazards and coordinate before work starts, and s.7 of the T&T OSH Act requires employers to protect non-employees affected by their work."
      },
      {
        hazard: "Asbestos or other legacy material, plus dust and insulation fibres",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Treat old backing boards, sheets above or behind the panels, and any lagging or insulation in the void as suspect until it has been identified — if unsure, stop and have the HSE department check the area before work starts (JHA Ref. S-R-6); a building's age neither rules asbestos in nor out",
          "Do not drill, cut, break, sand, scrape or dry-sweep suspect material; keep it wet, keep people out and report it. If asbestos is confirmed, the work goes to a trained, competent asbestos contractor under your site's asbestos procedure",
          "Apply the same stop-and-assess rule to old paint that may contain lead and to water-damaged material with mould",
          "Fit-tested respirator with particulate filters, sealed goggles, gloves, and coveralls or long sleeves with cuffs and collar closed",
          "Clean up with a HEPA vacuum or wet wipe — no dry sweeping; sawdust from treated timber is a breathing and skin hazard, so use extraction and keep it out of occupied areas"
        ],
        why: "Asbestos fibres cause asbestosis, lung cancer and mesothelioma, and the illness shows up years later. OSHA 3755 flags it in older insulation and building materials (benchmark: 29 CFR 1926.1101). I have not confirmed a T&T asbestos-specific regulation, so none is cited — the OSH Act general duties and your site procedure apply."
      },
      {
        hazard: "Hidden services above the ceiling — electrical, fire detection and sprinklers",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Assume every cable, light fitting, A/C unit and junction box in the void is live until isolated, locked out and proved dead with a tester you have checked on a known source; have an electrician trace and mark circuits first",
          "Isolate light fittings before lowering them — switching off is not isolation; take care with screws, nails and cutting tools near concealed cable; power tools on an RCD/GFCI-protected supply",
          "Confirm whether the building is in a classified (hazardous) area — if so, tools, lighting and ignition sources must be suitable for it",
          "Smoke/heat detectors and sprinkler heads: get any isolation or covering approved with the control room/fire team first, cover only what was agreed, and have each one reinstated and tested before handing back",
          "Never hang anything from sprinkler pipes, cable trays or process pipework; reinstate fire stopping at every penetration"
        ],
        why: "OSHA 3755 notes concealed conduit is an electrocution hazard that requires de-energising, grounding or insulation (29 CFR 1926.416(a)(1)); cables in a ceiling void are the same hazard. Disabling detection and not restoring it is a recurring root cause in fire incidents."
      },
      {
        hazard: "Cuts, tool injuries and manual handling strain",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Retractable-blade safety knives; cut on the floor or a bench, away from the body, free hand clear of the blade (JHA Ref. S-R-6); cut-resistant gloves for edges",
          "Inspect tools before use, guards in place, eye protection for all overhead drilling and cutting; nail and staple guns: contact-trip safety, never carried with a finger on the trigger or while connected to air, and disconnected from the air supply before clearing a jam",
          "Two-person lifts for full sheets and panels, lifters or a hoist for heavy ones; never carry anything up a ladder that stops you holding on — use a bucket and rope",
          "Rotate people off overhead work and give short breaks — work above shoulder height is a recognised ergonomic risk (OSHA 3885)"
        ],
        why: "The ceiling-tile JHA lists razor cutting as a severe-laceration risk and tool inspection as routine. OSHA 3755 requires eye protection with power tools and replacement of damaged guards (29 CFR 1926.300(b)(1)), and says not to carry anything that could unbalance you on a ladder."
      },
      {
        hazard: "Heat stress in the void, and bites, stings and droppings",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Roof voids and un-air-conditioned buildings in Trinidad's climate can be far hotter than outside — plan void work for the cooler part of the day, limit time per entry, never send anyone in alone",
          "WATER, REST, SHADE: water at hand, scheduled breaks outside the void, extra breaks for anyone new or back after a week away. Heat stroke (confusion, no sweating, hot dry skin, collapse) is an emergency — call for help and cool the person immediately",
          "Look before you reach: wasp and hornet nests, bats, rats and snakes are common in roof voids — check with a torch before putting hands in any gap; treat droppings as a breathing hazard (no dry sweeping)",
          "If you find a nest, stop and get pest control; anyone with a known severe sting allergy stays out of the void and carries their own medication; know the nearest first aider"
        ],
        why: "OSHA 3755 sets out water, rest and shade, acclimatisation, and heat stroke as a medical emergency; OSHA 3885 lists mould and animal materials among biological hazards to identify. A closed void adds radiant heat and poor airflow on top of Trinidad's ambient heat, and roof voids are routine habitat for wasps, bats and rodents."
      },
      {
        hazard: "Rotten, termite-damaged or weakened timber and old fixings",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Tap and probe timber framing and boards before trusting them — hollow sound, soft spots, frass or mud tubes mean it is damaged",
          "Assume rotted or termite-damaged timber cannot carry a person or a new load; replace damaged members before fixing new panels to them",
          "Support the ceiling before removing old nails or screws — a panel can drop as the last fixing comes out",
          "Don't use damaged framing as an anchor or a walkway in the void"
        ],
        why: "Timber ceilings in a humid climate with termites hide their condition from the room side. Testing before loading, and supporting before releasing, are the controls that prevent the surprise."
      },
      {
        hazard: "Flammable adhesives, solvents and treatments, and PVC or timber burning",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "No open flames, smoking or sparks where solvent-based adhesives, sealants or finishes are used; ventilate the area well",
          "Read the product's SDS (see the Chemicals tab guide) and use the glove material and respirator it specifies; keep only the quantity you need in the work area",
          "Burning PVC gives off toxic smoke, including hydrogen chloride — keep it away from hot work and ignition sources, and keep an extinguisher at hand",
          "Store adhesives and solvents properly and away from heat, and take empties out at the end of the shift"
        ],
        why: "OSHA 3755 notes that solvent-based adhesives are usually highly flammable and says open flames and smoking must not be allowed while they are used. In a closed room or void, vapour and smoke build up fast."
      }
    ],
    toolboxTalk: [
      "Confirm what this ceiling is made of and whether anyone has checked for asbestos — if not, nobody starts",
      "Nobody steps on the ceiling, ever: agree the walkway, who is standby for every void entry, and who checked the ladder or tower",
      "Drop zone barricaded, exits clear, electrical isolated and proved dead, and the plan for detectors and sprinklers agreed",
      "Panel: tap-test timber before loading it, support before removing fixings, and no ignition sources near adhesives or PVC",
      "Heat and pests: water point, time limit per void entry, look before you reach, and the signs of heat stroke",
      "Emergency: how to rescue someone who falls through or collapses in the void, the nearest first aider and medical facility, and the emergency contact written on the permit (Section 8)"
    ],
    ppe: [
      "Hard hat (chin strap when working at height)",
      "Safety glasses — sealed goggles for overhead drilling, cutting and dust",
      "Respirator with particulate filters (fit-tested) — never a substitute for stopping work on suspected asbestos",
      "Cut-resistant gloves for grid, track, sheet edges and knives",
      "Long-sleeve coveralls (disposable if working in insulation)",
      "Safety boots with good grip",
      "Hearing protection for drilling and cutting",
      "Full-body harness where fall arrest is required for void work or high platforms",
      "Chemical-resistant gloves matched to the adhesive's SDS",
      "Hearing protection and eye protection for nail and staple guns"
    ]
  },
  {
    id: "chemical-handling",
    label: "Chemical Handling & Transfer",
    sub: "Receiving, decanting, transferring and using hazardous chemicals — ammonia, methanol, acids, caustics, solvents",
    icon: "flask",
    permits: [
      "Work Permit (general)",
      "Line-break / equipment-opening permit if opening chemical lines, pumps or vessels",
      "Isolation / LOTO for chemical lines and pumps",
      "Confined Space Entry Permit if cleaning tanks, sumps or pits",
      "Hot Work Permit if hot work is needed near flammable chemicals"
    ],
    hazards: [
      {
        hazard: "Skin and eye contact — splashes from corrosives, solvents and process chemicals",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Read the label and SDS before you start — Section 2 (hazards), 4 (first aid) and 8 (PPE) — and know the product by name, not by its container or colour",
          "Wear what SDS Section 8 specifies: chemical-resistant gloves of the right material, goggles with a face shield for splash, a chemical apron over flame-resistant clothing, and suitable boots",
          "Know where the nearest eyewash and safety shower are, and check the path is clear and the unit works, before the job starts",
          "Transfer with closed methods — pumps, drum pumps, funnels, secondary containment — instead of pouring from open containers",
          "If exposed: flush with water immediately (at least 15 minutes for eyes and skin unless the SDS says otherwise), remove contaminated clothing and get medical help — see the Chemicals tab"
        ],
        why: "SDS Section 8 names the PPE and glove material for each chemical, and the Chemicals tab covers first aid for ammonia and methanol. The example site PPE matrix in the PPE Guide pairs chemical work with goggles, face shield, chemical gloves and an apron over FR clothing."
      },
      {
        hazard: "Toxic gas or vapour release — inhalation",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Work with the wind or ventilation at your back and an escape route behind you; know the muster point and wind direction before opening anything",
          "Use local exhaust ventilation or a closed system where the SDS calls for it, and a gas detector where the site requires one",
          "Respirator matched to the chemical and fit-tested — filter respirators do not work in oxygen-deficient air",
          "Know where the escape set is kept and have practised putting it on; on an alarm or a sudden smell, stop, close only what is safe to close and withdraw",
          "Don't enter a pit, sump or low-lying area where heavy vapour can collect — that is a confined space entry"
        ],
        why: "OSHA 3885 notes that gases and vapours may be invisible, often have no odour and may not cause an immediately noticeable effect, so 'I can't smell it' is not a safety check."
      },
      {
        hazard: "Fire or explosion — flammable chemicals, static and ignition sources",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Bond and earth containers and equipment when transferring flammable liquids; no ignition sources — phones, tools and vehicles included — unless approved for the area",
          "Keep only the quantity needed in the work area, in approved, labelled containers, away from heat",
          "Methanol burns with a flame that is hard to see in daylight — don't rely on seeing it, and keep an extinguisher and the emergency number to hand",
          "Hot work near flammable chemicals needs its own permit, gas test and fire watch"
        ],
        why: "SDS Section 7 gives handling precautions and incompatibilities and Section 5 the suitable extinguishing media. Static discharge during transfer is a common hidden ignition source."
      },
      {
        hazard: "Incompatible chemicals mixed or stored together",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Check SDS Sections 7 and 10 for incompatibilities before storing or mixing — acids with bases, oxidisers with flammables or organics, and so on",
          "Never mix chemicals to test them or to clean something, and never return unused product to its original container",
          "Label every secondary container with the name and hazard — no unlabelled bottles or buckets",
          "Keep a spill kit that suits the chemical, and store incompatible products apart with their own containment"
        ],
        why: "SDS Sections 7 and 10 list incompatible materials, and the Chemicals tab shows the incompatibles for each chemical covered."
      },
      {
        hazard: "Spills and releases to drain or ground",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Stop the source if it is safe to, raise the alarm, keep people away and contain with the right spill kit — never wash product to a drain",
          "Clean up only if you are trained and have the PPE the SDS names; otherwise withdraw and call the response team",
          "Report every release, however small — environmental notification duties may apply (see the Environmental (EMA) tab)",
          "Dispose of spill residue as chemical waste (see the Waste Handling task)"
        ],
        why: "SDS Section 6 gives containment and clean-up methods; the EMA tab lists reporting duties for releases."
      },
      {
        hazard: "Opening lines, pumps and vessels that still hold product or pressure",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Isolate, depressurise, drain and flush to the site procedure, lock out the isolation and prove it before breaking any joint — with a line-break permit if your site uses one",
          "Plan where residual product will go: drip tray or hose to a safe point, with PPE for splash",
          "Loosen flanges away from your body and open slowly — expect trapped product and pressure at low points and dead legs",
          "If you cannot prove it is isolated and empty, stop and ask"
        ],
        why: "Trapped product and pressure behind a closed valve is the usual way a routine joint break becomes a chemical exposure. See the Lockout / Tagout task for proving isolation."
      }
    ],
    toolboxTalk: [
      "Name the chemical and read SDS Sections 2, 4 and 8 — everyone knows the hazards and the PPE before starting",
      "Check PPE against the SDS, and check the eyewash and safety shower work and the path to them is clear",
      "Where is the wind, the muster point and the escape route — and where is the escape set kept",
      "Ignition sources, bonding, and only the quantity needed in the work area",
      "What we do on a spill or release, and who we call",
      "If anyone is splashed: flush for at least 15 minutes, remove contaminated clothing, get help — nobody carries on"
    ],
    ppe: [
      "Chemical goggles with a face shield for splash risk",
      "Chemical-resistant gloves matched to the SDS",
      "Chemical apron over flame-resistant clothing",
      "Flame-resistant clothing (site standard)",
      "Safety boots suited to the chemical",
      "Hard hat",
      "Respirator matched to the chemical (fit-tested), or as the gas detector requires",
      "Hearing protection in noisy plant areas",
      "Escape set carried or at hand where a toxic release is possible"
    ]
  },
  {
    id: "man-lift",
    label: "Man-Lift / MEWP Operation",
    sub: "Scissor lifts, boom lifts and other mobile elevating work platforms",
    icon: "lift",
    permits: [
      "Work Permit (general)",
      "Working at Height Permit (if site policy requires)",
      "Lifting equipment inspection / examination certificate in date",
      "Electrical isolation if working near live conductors"
    ],
    hazards: [
      {
        hazard: "Tip-over — soft or sloping ground, wind, overload, driving while elevated",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Check the ground before positioning: firm, level and clear of holes, drains, trenches and cables, and within the machine's slope limit; deploy outriggers or stabilisers if it has them",
          "Never exceed the rated capacity or the number of people on the platform — count tools and materials in the load",
          "Stop work when wind or weather passes the manufacturer's limits; drive elevated only if the manual allows it, and only at the speed it allows",
          "Never use the lift as a crane, tie it off to a structure, or add planks or boxes to gain height"
        ],
        why: "The manufacturer's load, slope and wind limits are the controlling document. Tip-over is one of the most serious failure modes for platforms, and the usual causes are the ground, wind, overload and travelling while elevated."
      },
      {
        hazard: "Fall or ejection from the platform",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Keep the gate or chain closed, and stand on the platform floor — never on the rails, boxes or a ladder",
          "Wear a full body harness with a short lanyard clipped to the platform's anchor point where the manufacturer, your site or the risk assessment requires it — commonly for boom-type machines",
          "Clip to the platform anchor only, never to nearby structure — a lanyard tied to structure can pull you out if the machine moves",
          "Don't step across onto structure unless the procedure allows it, and never leave the platform raised and unattended"
        ],
        why: "A jolt, a strike from a load or a machine movement can throw an operator over the rail. Anchoring to the machine, not the structure, keeps the harness working with the platform."
      },
      {
        hazard: "Crush or entrapment between the platform and structure, pipework or overhead items",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Look up and around before raising: beams, pipe racks, cable trays, roof edges and other equipment",
          "Keep your body inside the guard rails and your hands off the rails near structure",
          "Use a ground person or spotter in tight spaces, and make sure nobody else can reach the controls",
          "Know where the ground controls are and how emergency lowering works before you go up"
        ],
        why: "An operator pinned against structure may be unable to reach the controls. A ground person who can lower the platform is the rescue."
      },
      {
        hazard: "Contact with overhead electrical lines and live equipment",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Treat every overhead conductor and open panel as live; keep the machine and everything on it outside the minimum approach distance your site sets",
          "Have the circuit isolated or the area barricaded if the work must be closer",
          "Treat the platform and anything metal on it as conductive — no metal ladders or long tools passed near conductors",
          "Allow for sway and for the machine settling when judging clearance"
        ],
        why: "A man-lift puts a metal structure in the air next to conductors. Approach distances come from your site's electrical rules — see the Electrical Work task."
      },
      {
        hazard: "Untrained operator or uninspected machine",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Only trained, authorised operators who are familiar with this make and model and whose certification is current",
          "Pre-use inspection every shift — tyres or tracks, hydraulic leaks, guard rails and gate, controls, emergency lowering, alarms and horn — and remove it from service if anything fails",
          "Check the examination or inspection certificate is in date and the capacity plate is legible",
          "Never override safety devices, and never leave the key in the machine when it is unattended"
        ],
        why: "Inspection and operator competence are standard requirements for lifting equipment. The permit's 'Lifting Equipt. Inspected' box may apply to a man-lift — confirm with the permit issuer."
      },
      {
        hazard: "Falling objects and vehicle traffic at the base of the lift",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Barricade and sign the base area and keep people out of the drop zone",
          "Tether hand tools; never throw items up or down — use a rope and bucket",
          "Keep vehicles and forklifts away from the base; a ground person watches the traffic if the lift is near a roadway",
          "Lower the platform and secure the machine when work stops"
        ],
        why: "The same drop-zone principle as other overhead work: whatever is on the platform can fall on whoever is underneath."
      }
    ],
    toolboxTalk: [
      "Ground, slope, wind and overhead — checked before we position the machine",
      "Who is the operator, is the inspection done and is the certificate in date",
      "Harness: clipped to the platform anchor only, and the lanyard length",
      "Overhead lines and structure: approach distances, and who is the spotter",
      "Emergency lowering: who is on the ground and where are the controls",
      "Base barricaded, tools tethered, traffic controlled"
    ],
    ppe: [
      "Full body harness with a short lanyard to the platform anchor (where required)",
      "Hard hat (chin strap)",
      "Safety glasses",
      "Safety gloves",
      "Safety boots with good grip",
      "Hearing protection in noisy plant areas",
      "Flame-resistant clothing (site standard)"
    ]
  },
  {
    id: "compressed-air",
    label: "Compressed / Pressurised Air Use",
    sub: "Air hoses, pneumatic tools, blow-down and compressed air cleaning",
    icon: "cylinder",
    permits: [
      "Work Permit (general)",
      "Isolation / LOTO if working on air lines, receivers or compressors"
    ],
    hazards: [
      {
        hazard: "Air injection injury — air or debris forced into the skin or body",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Never point an air line or air tool at anyone, and never use compressed air to clean skin or clothing or to blow dust off yourself",
          "Compressed air can enter the body through a tiny break in the skin — get medical attention even if the wound looks minor",
          "Use nozzles and tools with trigger guards or dead-man controls, and keep your hand off the trigger until the tool is on the work",
          "No horseplay with air lines — it is a common way people are badly hurt"
        ],
        why: "Air forced into the bloodstream or tissue can cause serious injury or death, and the entry wound may look trivial. The fix is never aiming air at a person."
      },
      {
        hazard: "Hose whip and coupling failure",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Use hoses and fittings rated for the pressure, and check hoses for damage, kinks and worn couplings before use",
          "Fit whip checks or restraints on couplings, especially on larger hoses and at tool connections",
          "Depressurise before disconnecting, and never disconnect a live line by hand",
          "Keep hoses off the floor where vehicles and feet will damage them, and out of walkways"
        ],
        why: "A coupling that separates under pressure can whip the free end with enough force to injure or kill. A restraint holds it when the coupling lets go."
      },
      {
        hazard: "Flying particles and debris — blow-down and air cleaning",
        likelihood: "Likely",
        severity: "Major",
        controls: [
          "Wear goggles with a face shield for blow-down and cleaning, plus hearing protection and gloves",
          "Keep the cleaning pressure low — the US benchmark is under 30 psi (about 2 bar) with effective chip guarding — and use a brush or vacuum where you can",
          "Keep other people clear, and barricade the area if debris could reach them",
          "Never blow down in the direction of other workers, open electrical equipment or a process area"
        ],
        why: "OSHA 29 CFR 1910.242(b) limits compressed air used for cleaning to under 30 psi with chip guarding and PPE. That is a US benchmark — use your site's own limit if it is stricter."
      },
      {
        hazard: "Noise from air exhaust and pneumatic tools",
        likelihood: "Likely",
        severity: "Moderate",
        controls: [
          "Hearing protection for blow-down, air tools and venting, and a silencer or diffuser on exhausts where fitted",
          "Limit time on loud tools and rotate tasks",
          "Warn people nearby before a loud blow-down or vent"
        ],
        why: "Air exhaust and impact tools can be loud enough to need hearing protection even for short jobs, and the damage builds up unnoticed."
      },
      {
        hazard: "Stored pressure when working on air lines, tools, receivers and compressors",
        likelihood: "Possible",
        severity: "Major",
        controls: [
          "Isolate, lock out, bleed down and prove zero pressure before opening or disconnecting any air line, tool or fitting",
          "Treat automatic-start compressors as live until locked out",
          "Never modify an air receiver or bypass its relief valve, and drain condensate as the site procedure says",
          "Disconnect pneumatic tools from the supply before changing bits or clearing jams"
        ],
        why: "Stored pressure stays behind a closed valve or in a receiver after the compressor stops. See the Lockout / Tagout task for proving isolation."
      },
      {
        hazard: "Plant air used for breathing, or air confused with another gas",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Use only certified breathing-air supply for supplied-air respirators — never ordinary plant or instrument air",
          "Confirm the line is air before connecting: check labels and colour coding, and never connect to an unidentified line",
          "Never use a compressed gas line to 'freshen' a confined space or your clothing without approval",
          "Know which lines carry nitrogen or other inert gases in your area — they can look like air lines"
        ],
        why: "Plant air is not breathing air, and a nitrogen line connected where an air line was expected can kill without warning. See the Nitrogen / Inert Gas task."
      }
    ],
    toolboxTalk: [
      "Never point air at anyone — and never at skin or clothing; what do we do if someone is hit",
      "Hoses and couplings checked, whip checks fitted, pressure and fittings rated",
      "Blow-down: goggles and face shield, low pressure, others kept clear",
      "Hearing protection and silencers; warn people nearby",
      "Isolate and bleed down to zero before opening anything"
    ],
    ppe: [
      "Goggles with a face shield for blow-down or cleaning",
      "Hearing protection",
      "Hard hat",
      "Safety gloves",
      "Safety boots",
      "Flame-resistant clothing (site standard)"
    ]
  },
  {
    id: "nitrogen-purging",
    label: "Nitrogen / Inert Gas Purging & Blanketing",
    sub: "Purging vessels/lines with nitrogen, product blanketing on ammonia, methanol, and urea systems",
    icon: "gas",
    permits: ["Nitrogen Purge / Inerting Permit", "Confined Space Entry Permit (required before any entry into a purged vessel)"],
    hazards: [
      {
        hazard: "Oxygen-deficient atmosphere from nitrogen displacing breathable air",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Purge and inerting operations follow a written procedure, never improvised on the day",
          "Barricade and post signage on any area where purging is in progress, warning of asphyxiation risk",
          "Test the atmosphere with a calibrated oxygen meter before anyone enters an area that has been, or is being, purged"
        ],
        why: "Nitrogen is colorless, odorless, and undetectable by human senses — a worker can lose consciousness within one or two breaths of an oxygen-deficient atmosphere, with no warning symptoms beforehand. This is consistently one of the most common causes of fatality at ammonia, methanol, and urea plants specifically."
      },
      {
        hazard: "Entry into a vessel believed to be purged, without independent atmosphere verification",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Never rely on a 'purge complete' label, logbook entry, or verbal handover alone — independently test the atmosphere yourself immediately before entry",
          "Test at multiple points — top, middle, and bottom of the vessel — not just at the entry point",
          "Re-test if entry is delayed at all after the original test, even by a short time"
        ],
        why: "This is where multi-fatality confined space incidents most often originate — a second entrant or a rescuer trusts a completed purge record instead of testing the atmosphere themselves, and finds out too late that conditions changed or the record was wrong."
      },
      {
        hazard: "Uncontrolled release or pooling of inert gas in low-lying or enclosed areas",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "Direct purge vents to a safe, open location — away from pits, trenches, stairwells, and other low-lying areas",
          "Never vent purge gas into an occupied building or enclosed area",
          "Monitor ambient oxygen levels in surrounding work areas during active purging, not just inside the vessel itself"
        ],
        why: "Nitrogen's density is close enough to air that it doesn't reliably rise and disperse the way people assume — it can settle and sit in a low spot for an extended period, turning a routine purge nearby into a hazard for people who were never part of the job."
      },
      {
        hazard: "Failure to positively isolate the purge/blanket gas supply before vessel entry",
        likelihood: "Unlikely",
        severity: "Fatal",
        controls: [
          "Lock out and blank purge/blanket gas lines before any entry — a closed valve alone is not isolation, same standard as process LOTO",
          "Confirm with the control room that automatic blanketing has been suspended for this specific vessel, not just closed locally",
          "Verify isolation by attempting to introduce nitrogen after lockout and confirming zero flow — the same 'try' logic used in electrical LOTO"
        ],
        why: "An automated blanketing system that reactivates while someone is inside a vessel is one of the most dangerous single-point failures in this task — the isolation has to be as rigorous as any energy isolation, not treated as a lesser precaution because it's 'just gas.'"
      },
      {
        hazard: "Miscommunication between purging/inerting operations and confined space entry teams",
        likelihood: "Possible",
        severity: "Fatal",
        controls: [
          "One person holds authority over both purge status and entry permit status — these cannot be managed by two separate teams unaware of each other",
          "Purge status is displayed or logged at the vessel itself, not only in a control room system someone has to remember to check",
          "Treat every shift handover or team change as a fresh verification point, not an assumption that the prior status still holds"
        ],
        why: "A gap between the people controlling the gas and the people entering the space is how a technically-correct purge procedure still ends in a fatality — the coordination failure is as dangerous as any single technical error on this list."
      }
    ],
    toolboxTalk: [
      "Confirm the vessel's purge/inerting status is verified independently, not taken from a log or verbal handover",
      "Confirm atmosphere testing covers top, middle, and bottom of the vessel, not just the entry point",
      "Confirm the purge/blanket gas supply is locked out and blanked, not just valve-closed",
      "Confirm purge vents are directed away from pits, low areas, and occupied spaces",
      "Confirm one person holds authority over both purge status and entry permit status",
      "Remind the crew: nitrogen gives no warning — treat every inerted space as immediately dangerous until proven otherwise"
    ],
    ppe: ["Calibrated multi-gas monitor, personally worn — not just checked at the vessel mouth", "Full body harness with retrieval line where vessel geometry allows", "Standard confined space entry PPE per that task", "Communication device to a dedicated standby attendant"],
  }
];

const SEVERITY_WEIGHT = { "Minor": 1, "Moderate": 2, "Major": 3, "Fatal": 4 };
const LIKELIHOOD_WEIGHT = { "Unlikely": 1, "Possible": 2, "Likely": 3 };

function riskScore(likelihood, severity) {
  return (LIKELIHOOD_WEIGHT[likelihood] || 2) * (SEVERITY_WEIGHT[severity] || 2);
}

function riskBand(score, severity) {
  // Fatal-severity hazards floor at High regardless of computed score —
  // a "Possible" likelihood on a fatality risk (score 8) must never read
  // as merely "Medium". Standard practice in real risk matrices is
  // severity-dominant escalation for catastrophic outcomes.
  if (severity === "Fatal") return { label: "High", cls: "risk-high" };
  if (score >= 9) return { label: "High", cls: "risk-high" };
  if (score >= 4) return { label: "Medium", cls: "risk-med" };
  return { label: "Low", cls: "risk-low" };
}

// ============================================================
// PPE LIBRARY — reference guide, not task-specific.
// "act" fields cite the OSH Act Ch. 88:08 provision that backs
// the requirement, where one applies directly. Some numeric
// benchmarks (noise limits, boot ratings, respirator triggers)
// are drawn from Proman Energy's published PPE Standard, a
// local Trinidad & Tobago plant-industry standard, as a
// concrete real-world reference point — not a legal citation.
// ============================================================
const PPE_LIBRARY = [
  {
    name: "Hard hat / safety helmet",
    description: "Rigid shell helmet protecting the head from falling objects, impact, and limited electrical contact. Type I protects vertical/top impact only; Type II adds lateral/side impact. Class G gives limited protection to 2,200V, Class E to 20,000V — Type II Class E/G is the common plant-industry baseline.",
    whenToUse: "Any area with overhead work, moving machinery, or where required by site signage — standard baseline PPE on most plant sites. Use a chin strap or lanyard when working at height, around excavations deep enough to enter, or over water. Replace immediately after any fall or impact from height, even without visible damage, and on a fixed schedule (5 years from manufacture is a common industry benchmark) regardless of condition.",
    act: "OSH Act s.23 — suitable protective devices required wherever there's risk of head injury, with instruction in their use."
  },
  {
    name: "Safety glasses / spectacles",
    description: "Impact-resistant lenses with side shields against flying particles and dust.",
    whenToUse: "Grinding, drilling, cutting, general workshop and process area work.",
    act: "OSH Act s.23 — eye protection required wherever there's risk of eye injury."
  },
  {
    name: "Goggles",
    description: "Sealed eye protection against splashes, fine dust, and chemical spray — more protection than glasses against liquids and fine particulate.",
    whenToUse: "Chemical handling/transfer, concrete work, grinding where splash or dust is a factor."
  },
  {
    name: "Face shield",
    description: "Full-face polycarbonate shield worn over safety glasses, protecting the whole face from flying debris, sparks, or chemical splash.",
    whenToUse: "Grinding, chipping, battery work, high-pressure fluid work, and any task combining eye and facial exposure. Always worn over safety glasses, never as a standalone substitute for primary eye protection."
  },
  {
    name: "Welding helmet (shaded / auto-darkening)",
    description: "Helmet with a filter lens matched to the welding process, protecting eyes and face from arc radiation, sparks, and heat.",
    whenToUse: "Any arc welding, plasma cutting, or brazing task.",
    act: "Treated as a named exception to general eye-protection minimums in OSHA 10/30-Hour PPE modules, because arc radiation isn't covered by standard eye protection."
  },
  {
    name: "Ear plugs",
    description: "Disposable or reusable inserts reducing noise exposure, worn inside the ear canal. Typical attenuation: foam plugs ~29-33 dB, reusable plugs ~20-28 dB when properly fitted.",
    whenToUse: "Moderate sustained noise — compressors, pumps, general workshop background noise. Hearing protection becomes mandatory once exposure exceeds an 85 dBA 8-hour time-weighted average; double up (plugs + muffs) above about 100 dBA."
  },
  {
    name: "Ear muffs",
    description: "Cupped over-ear protection, typically ~20-30 dB attenuation, generally higher than plugs and easier to visually confirm compliance.",
    whenToUse: "High-noise tools — grinders, jackhammers, chop saws — or combined with plugs in very high-noise areas (double protection recommended above ~100 dBA TWA).",
    act: "OSH Act s.34 — duty on the owner/occupier/employer to prevent hearing impairment and ensure protective equipment is worn at appropriate times."
  },
  {
    name: "Respirator — half-face (cartridge)",
    description: "Covers nose and mouth, filters dust, mist, or specific vapours depending on the cartridge fitted.",
    whenToUse: "Painting, dry cutting, dust-generating work — cartridge type matched to the specific product's SDS, not assumed. Only NIOSH-approved respirators should be used; anyone wearing one beyond a basic dust mask needs a medical evaluation and a passed fit test (repeated at least annually, and whenever the mask model changes). Facial hair crossing the seal line invalidates the fit.",
    act: "OSH Act s.32 — respiratory protection of an approved standard shall be provided and maintained where necessary."
  },
  {
    name: "Respirator — full-face / supplied-air",
    description: "Covers the entire face or supplies breathing air from a separate source, used where cartridge filtration isn't sufficient.",
    whenToUse: "Confined space with poor or unknown atmosphere, oxygen-deficient environments (below 19.5% oxygen), high-hazard chemical exposure, abrasive blasting. Self-contained breathing apparatus (SCBA) is the standard for IDLH (immediately dangerous to life/health) conditions — cartridge respirators are never a substitute in an oxygen-deficient or IDLH atmosphere."
  },
  {
    name: "Gloves — general work",
    description: "Basic hand protection against abrasion, cuts, and dirt for everyday tasks. A common minimum for process-area entry is a nitrile-palm glove meeting at least Level 1 abrasion/cut/tear/puncture resistance (e.g. EN 388) without impairing dexterity.",
    whenToUse: "General handling, housekeeping, light mechanical work, and routine movement through process areas where hands may contact handrails, ladders, or structural surfaces. Some sites mandate gloves at all times anywhere inside a live process area (including workshops, warehouses, and laydown yards), not just while actively performing a task — check whether your site's zone rules work the same way. Wash and dry hands before gloving, fit snugly to avoid snagging on moving equipment, inspect before each use and replace at the first sign of damage, and remove carefully from the wrist without touching the outer surface. Gloves don't replace hand hygiene — wash hands again after removal."
  },
  {
    name: "Gloves — cut-resistant",
    description: "Rated by cut-resistance level (commonly ANSI/EN cut scale), engineered specifically against blades and sharp edges rather than general abrasion.",
    whenToUse: "Hand tool work with cutting edges, sheet metal handling, glass handling, box cutters/utility knives. A general work glove is not a substitute — cut-resistance is a specific, tested property, not a byproduct of any thick glove."
  },
  {
    name: "Gloves — chemical-resistant",
    description: "Nitrile, neoprene, or similar material selected against the specific chemical in use — not a universal glove.",
    whenToUse: "Painting, chemical transfer, cleaning with solvents. Match glove material to the product's SDS, since one glove type does not resist all chemicals."
  },
  {
    name: "Gloves — insulated / electrical-rated",
    description: "Rubber insulating gloves rated to a specific voltage class, tested and dated.",
    whenToUse: "Any live electrical work or work near energized parts — never substitute general work gloves."
  },
  {
    name: "Gloves — impact-resistant",
    description: "Gloves with padded or reinforced panels (commonly TPR ridges) across the knuckles and back of the hand, built to absorb crushing/striking force and cut down on the vibration transmitted into the hand and wrist.",
    whenToUse: "Manual striking tools (pickaxe, sledgehammer, mattock) and vibrating power tools (breakers, grinders, impact wrenches) used for extended periods. Cut-resistant and general work gloves don't provide this — impact absorption and vibration damping are specific, tested properties, same logic as cut-resistance.",
    act: "OSH Act s.23 — the employer's general duty to provide suitable protective devices extends to matching the glove to the actual hazard, not just issuing 'a pair of gloves.'"
  },
  {
    name: "Safety boots (steel / composite toe)",
    description: "Reinforced-toe footwear protecting against impact and compression, often with puncture-resistant soles. A common plant-industry benchmark: toe cap rated to withstand at least 200 joules impact, minimum 6-inch boot height for ankle support, slip-resistant outsole, and soles resistant to hydrocarbons and heat.",
    whenToUse: "Virtually all plant/site work — standard baseline PPE. Inspect daily for cracked soles, worn treads, loose toe caps, or chemical degradation; damaged boots are replaced immediately, not at the end of shift."
  },
  {
    name: "High-visibility vest / clothing",
    description: "Fluorescent material with reflective strips improving visibility to vehicle and plant operators.",
    whenToUse: "Any area with vehicle or mobile equipment movement, including site walkways near active traffic."
  },
  {
    name: "Full body harness (fall arrest)",
    description: "Straps distributing fall-arrest forces across the body, connected to a rated anchor point via a lanyard.",
    whenToUse: "Any work at height where guardrails aren't practical, per site fall protection procedure."
  },
  {
    name: "Arc-rated (AR) clothing & arc flash PPE",
    description: "Clothing, face and hand protection tested and rated for arc flash, with a minimum arc rating in cal/cm². Flame-resistant (FR) cloth is not automatically arc-rated, and rubber insulating gloves alone are shock protection, not arc flash protection. NFPA 70E (2021) groups AR PPE into four categories by minimum arc rating: Category 1 = 4 cal/cm², Category 2 = 8, Category 3 = 25, Category 4 = 40 (CSA Z462 in Canada adds a Category 5 at 75). The categories add protection step by step — hard hat, safety glasses, hearing protection, leather footwear, and AR gloves or rubber insulating gloves with leather protectors — and move from a single layer and face shield at Category 1 to a full flash suit with hood at Categories 3 and 4.",
    whenToUse: "Any energised work, switching or racking where an arc flash is possible. Select it from the equipment's arc flash label or study, not a generic assumption. Most burn injuries come from clothing igniting, so check what is worn underneath — melting synthetics make burns worse, and molten metal can pass through seams and closures. NFPA 70E is a consensus standard: US OSHA has never incorporated it by reference and it is not T&T law — follow your site's electrical safety standard. Source: OSHA 4472 (2024)."
  },
  {
    name: "Flame-resistant (FR) coveralls",
    description: "Fabric engineered to self-extinguish and resist ignition, worn as a barrier against flash fire. FR is not the same as arc-rated — for arc flash the garment must carry an arc rating (see the Arc-rated PPE entry). One-piece coveralls are generally preferred over a separate FR shirt/pants combination, since a two-piece set can gap at the waist during bending or climbing and lets flame or hot gas reach the skin. Non-FR clothing (rain gear, unrated vests, belts) worn over FR coveralls defeats the protection, so any outer layer must also be FR-rated.",
    whenToUse: "Hot work, electrical work with arc flash potential, and process areas with flash fire risk. Collar worn closed, shirt tucked in if a two-piece set is ever used, and nothing flammable worn underneath or over top."
  },
  {
    name: "Gloves — welding (heat / spark-resistant)",
    description: "Heavy gloves, usually leather with long cuffs, that protect the hands and wrists from sparks, spatter, hot metal and radiant heat during welding and cutting. They give no electrical or chemical protection, and wet or oily leather conducts heat badly.",
    whenToUse: "Welding, cutting and brazing, and handling hot work pieces. Use a different glove for grinding or rigging. Replace them when the leather is burnt through or stiff, and keep them dry."
  },
  {
    name: "Chemical apron",
    description: "A chemical-resistant apron worn over work or flame-resistant clothing to keep splashes off the chest, abdomen and thighs. The material has to match the chemical — the SDS (Section 8) names suitable materials — and no single apron suits every chemical.",
    whenToUse: "Decanting, transferring, sampling and cleaning with corrosives, solvents or other splash-hazard chemicals, usually with chemical gloves, goggles and a face shield. Take it off carefully so the outside doesn't touch skin, and wash or discard it after contamination."
  },
  {
    name: "Welder's spats (foot and ankle covers)",
    description: "Covers worn over safety boots and the lower trouser leg that stop sparks, slag and molten metal from dropping into footwear or burning through laces. They add to safety boots — they don't replace them.",
    whenToUse: "Welding and cutting where sparks and slag fall to the floor around your feet, especially overhead or vertical work. Check the fasteners and wear them over the trouser cuff so nothing can run inside."
  },
  {
    name: "Escape set (emergency escape respirator / hood)",
    description: "A compact emergency respirator or hood for escaping from an atmosphere that becomes hazardous. It is for getting out, not for working in a bad atmosphere. Filter types protect only against the gases they are rated for and give no protection in oxygen-deficient air; self-contained types supply their own air for a limited time.",
    whenToUse: "Carried or kept at hand where a toxic release is possible, for example near ammonia. Know where yours is kept, check the seal and expiry date, and practise putting it on — you won't have time to read the instructions during a release."
  },
  {
    name: "Personal Flotation Device (PFD) — Type 1",
    description: "Buoyant vest providing 150N-275N of buoyancy, built to keep the wearer's airway above water even if unconscious. Distinct from a general life jacket — rated for rough-sea and offshore conditions, and compatible with a harness.",
    whenToUse: "Boarding or working on jetties, platforms, or vessels; any work over or near open water; unmanned installations without full handrail protection. Inspect before each use — a compressed, torn, or waterlogged PFD is removed from service immediately, not patched up."
  },
];

// ============================================================
// TOOLS & EQUIPMENT LIBRARY — hot work vs cold work
// classification and the PPE each tool typically demands.
// "Hot work" here follows the common plant-permit definition:
// any activity producing a flame, spark, or heat capable of
// acting as an ignition source — not just welding.
// ============================================================
const TOOLS_LIBRARY = [
  {
    name: "Angle grinder",
    classification: "Hot Work",
    classificationNote: "Produces sparks capable of igniting flammable material or atmosphere — treated as hot work under most plant permit systems, with the same radius/fire-watch logic as welding.",
    ppe: ["Face shield over safety glasses", "Ear protection", "Cut-resistant gloves", "FR clothing if near flammables"],
    hazardNote: "Disc failure/kickback, sparks, flying fragments, noise."
  },
  {
    name: "Cutting torch (oxy-fuel)",
    classification: "Hot Work",
    classificationNote: "Open flame and molten metal — always hot work, always needs a fire watch per permit.",
    ppe: ["Cutting goggles or helmet, correct shade", "FR coveralls", "Welding gloves", "Hand/face protection from slag"],
    hazardNote: "Burns, fire, fuel gas leaks, cylinder explosion risk."
  },
  {
    name: "Arc / MIG / TIG welding set",
    classification: "Hot Work",
    classificationNote: "Arc, spatter, and heat — always hot work.",
    ppe: ["Welding helmet, correct filter shade", "FR coveralls", "Welding gauntlets", "Ear protection in an enclosed/noisy bay"],
    hazardNote: "Arc flash/UV, metal fume, burns, electric shock."
  },
  {
    name: "Bench grinder",
    classification: "Hot Work",
    classificationNote: "Fixed, but still spark-producing on metal — same hot-work logic as an angle grinder applies in its immediate area.",
    ppe: ["Face shield or grinder-mounted eye shield", "Ear protection", "Snug-fitting gloves (loose gloves are a snag risk on rotating wheels)"],
    hazardNote: "Wheel failure, sparks, entanglement."
  },
  {
    name: "Abrasive / chop saw (metal cutting)",
    classification: "Hot Work",
    classificationNote: "Cutting metal with an abrasive wheel throws sparks the same way grinding does — hot work rules apply.",
    ppe: ["Face shield", "Ear protection", "Gloves", "FR clothing near flammables"],
    hazardNote: "Sparks, kickback, disc failure, noise."
  },
  {
    name: "Soldering iron / heat gun",
    classification: "Hot Work (small-scale)",
    classificationNote: "An open heat source — technically hot work, though some sites apply a lower-threshold 'controlled hot work' category for small electrical soldering. Check local site procedure before assuming it's exempt.",
    ppe: ["Safety glasses", "Heat-resistant gloves for extended contact", "Ventilation for solder fume"],
    hazardNote: "Burns, fume inhalation (rosin/flux), fire from hot-tip contact with combustible surfaces."
  },
  {
    name: "Circular saw (wood/composite cutting)",
    classification: "Cold Work",
    classificationNote: "No spark or ignition source when cutting non-metal — cold work, but blade-contact and dust hazards remain.",
    ppe: ["Safety glasses", "Ear protection", "Dust mask for prolonged cutting", "Gloves removed when hands are near the blade"],
    hazardNote: "Blade contact, kickback, dust."
  },
  {
    name: "Electric hand drill",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work. Standard cordless/mains tools are not rated for use inside classified (Zone 1/Division 1) process areas — confirm intrinsically safe or Ex-rated equipment is used where required.",
    ppe: ["Safety glasses", "General work gloves", "Ear protection for prolonged use"],
    hazardNote: "Bit breakage/ejection, entanglement on loose clothing, drilling into hidden services."
  },
  {
    name: "Pneumatic impact wrench / air tools",
    classification: "Cold Work",
    classificationNote: "No spark/ignition source, but the compressed air supply itself carries its own hazard.",
    ppe: ["Safety glasses", "Ear protection (pneumatic tools are consistently loud)", "Gloves", "Vibration-reducing gloves for prolonged use"],
    hazardNote: "Noise, hand-arm vibration, compressed-air injection injury, flying fasteners."
  },
  {
    name: "Jackhammer / breaker",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work, but among the highest noise and vibration exposures on this list.",
    ppe: ["Ear protection (mandatory)", "Safety glasses", "Anti-vibration gloves", "Steel-toe, puncture-resistant boots", "Dust mask if dry-cutting concrete"],
    hazardNote: "Hand-arm vibration, noise, silica dust, musculoskeletal strain."
  },
  {
    name: "Grit / abrasive blasting equipment",
    classification: "Cold Work",
    classificationNote: "No ignition source from the blast process itself — cold work, though check what's being removed: old coatings can be flammable.",
    ppe: ["Full-face supplied-air blast hood/respirator", "Ear protection", "Heavy-duty coveralls", "Abrasion-rated gloves"],
    hazardNote: "Silica/abrasive media inhalation, media rebound, noise."
  },
  {
    name: "Pressure washer",
    classification: "Cold Work",
    classificationNote: "Cold work — no ignition source, though petrol/diesel-powered units should be refuelled cold and away from ignition sources.",
    ppe: ["Face shield or safety glasses (splash/debris)", "Ear protection if engine-driven", "Waterproof gloves", "Safety boots"],
    hazardNote: "High-pressure injection injury (same logic as airless paint spray), slip hazard on wet surfaces."
  },
  {
    name: "Compressed air blow gun / pneumatic tools",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work. The hazard here is the air pressure itself, not heat or spark.",
    ppe: ["Safety glasses / face shield", "Ear protection", "Gloves"],
    hazardNote: "Never used to clean skin, hair, or clothing — compressed air can penetrate skin and cause a fatal air embolism at surprisingly low pressures. Also: hose/fitting failure, flying debris from cleaning surfaces."
  },
  {
    name: "Nippers / wire cutters",
    classification: "Cold Work",
    classificationNote: "No spark or ignition source under normal use — cold work, though cutting wire under tension releases stored energy at the moment it parts.",
    ppe: ["Safety glasses (cut ends can spring back toward the face)", "Cut-resistant gloves", "General work gloves acceptable for light-gauge wire only"],
    hazardNote: "Pinch/crush point at the pivot, wire ends whipping or springing back when cut under tension, repetitive-strain hand fatigue on high-volume cutting."
  },
  {
    name: "Pickaxe / mattock / sledgehammer (manual striking tools)",
    classification: "Cold Work",
    classificationNote: "No ignition source from the tool itself — cold work, though striking on rock or concrete can throw sparks near buried services or flammable atmospheres; check ground conditions and permit status before use.",
    ppe: ["Impact-resistant gloves", "Safety glasses / face shield (flying chips and debris)", "Steel-toe boots", "Long sleeves/leg protection from flying debris"],
    hazardNote: "Hand/wrist impact and fatigue from repeated striking, flying rock or debris, overstrike injury to feet/shins, strain injury from prolonged swinging. Impact-resistant gloves are a specific control here — general work gloves don't absorb striking force."
  },
  {
    name: "Pipe wrench / adjustable spanner",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work. Never used as a substitute for the correctly sized wrench, and never used as a hammer.",
    ppe: ["Safety glasses", "General work gloves", "Impact-resistant gloves if a cheater bar is used to extend leverage"],
    hazardNote: "Slip-off injury when the jaw is worn or overloaded, pinch points at the jaw, strain injury breaking a seized fitting without penetrating oil or proper technique."
  },
  {
    name: "Socket set / ratchet",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Safety glasses", "General work gloves — removed for fine work needing dexterity"],
    hazardNote: "Slipped socket or rounded fastener head, pinch points, strain injury breaking torque on a seized bolt."
  },
  {
    name: "Torque wrench (calibrated, manual)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work. Process-safety critical: under- or over-torqued flange bolting is a direct cause of loss-of-containment incidents on ammonia and methanol lines, not just a mechanical concern.",
    ppe: ["Safety glasses", "General work gloves"],
    hazardNote: "Slip/pinch injury to the hand, but the bigger risk is downstream — confirm the calibration sticker is current before using on any critical joint, since an out-of-calibration wrench can leave a flange under- or over-torqued without anyone knowing until it leaks."
  },
  {
    name: "Hydraulic torque wrench (bolting tool)",
    classification: "Cold Work",
    classificationNote: "No ignition source from the tool itself — cold work, though the hydraulic pump unit should meet the area's hazardous-area rating if used inside a classified process area.",
    ppe: ["Safety glasses / face shield", "Cut-resistant gloves", "Hearing protection near the hydraulic pump", "Steel-toe boots"],
    hazardNote: "High-pressure hydraulic hose failure or fluid injection injury, reaction-arm pinch points, crush injury if the tool slips off the nut under load. Standard equipment for turnaround-scale flange bolting on ammonia/methanol/urea process lines."
  },
  {
    name: "Bolt cutters",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work, though cutting material under spring tension releases stored energy at the moment of the cut.",
    ppe: ["Safety glasses (cut ends can spring back)", "Cut-resistant gloves"],
    hazardNote: "Pinch point at the pivot, stored-energy release on the cut piece, strain injury attempting material beyond the tool's rated capacity."
  },
  {
    name: "Hand files, hacksaw, cold chisel & hammer",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work. A cold chisel striking hardened steel can occasionally throw a spark; avoid use near a confirmed flammable atmosphere.",
    ppe: ["Safety glasses", "General work or cut-resistant gloves"],
    hazardNote: "Blade/edge contact, a mushroomed chisel head shedding metal fragments when struck, hand injury from a glancing hammer blow."
  },
  {
    name: "Multimeter / non-contact voltage tester",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work, though use inside a classified electrical area requires an intrinsically safe or Ex-rated meter, not a standard bench multimeter.",
    ppe: ["Insulated/electrical-rated gloves matched to the voltage present", "Arc-rated clothing per the equipment's incident energy label where applicable"],
    hazardNote: "The single most important use of this tool is proving zero energy during lockout/tagout before anyone touches equipment — test the meter on a known-live source before and after checking the isolated circuit, since a faulty meter reading 'dead' is worse than no meter at all."
  },
  {
    name: "Non-sparking (spark-resistant) hand tools",
    classification: "Cold Work",
    classificationNote: "Purpose-built for use inside classified/hazardous (Zone 1 or Division 1) areas where a standard steel tool's spark risk is unacceptable — brass, bronze, or beryllium-copper construction. This is exactly the environment ammonia, methanol, and hydrocarbon process areas present.",
    ppe: ["Standard task PPE for the work being done — the tool material is the control here, not extra PPE"],
    hazardNote: "Softer than steel, so these wear and round off faster — a worn non-sparking tool that slips is a bigger hazard than the spark it was issued to prevent. Confirm the tool is genuinely rated (not just brass-plated steel) and check its condition before relying on it in a classified area."
  },
  {
    name: "Chain hoist / come-along (manual lifting aid)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Hard hat", "Safety boots", "Gloves"],
    hazardNote: "Overloading beyond rated capacity, an improperly rigged anchor point failing, chain or cable snap-back under load, crush injury from a dropped load. Treat as lifting equipment under the Lifting Operations task, not a casual hand tool — inspect and rate it the same way."
  },
  {
    name: "Rotary hammer drill (SDS) / core drill",
    classification: "Cold Work",
    classificationNote: "No spark/ignition source drilling concrete or masonry — cold work. Drilling into steel with a rotary hammer bit can occasionally spark; treat as hot work near a confirmed flammable atmosphere.",
    ppe: ["Safety glasses", "Ear protection", "Dust mask/respirator for dry drilling", "Anti-vibration gloves for extended use"],
    hazardNote: "Hand-arm vibration, silica dust from concrete drilling, drilling into hidden rebar or buried services, reaction torque if the bit binds."
  },
  {
    name: "Portable multi-gas detector/monitor",
    classification: "Cold Work",
    classificationNote: "Not a hazard source itself, but treated as safety-critical equipment — calibration status and bump-test record must be checked before every use, never assumed.",
    ppe: ["Standard task PPE — this is a detection tool, not something requiring its own PPE"],
    hazardNote: "An uncalibrated or un-bump-tested monitor gives false confidence. Verify the calibration due date and perform a bump test before relying on a reading for confined space entry, hot work clearance, or excavation atmosphere testing."
  },
  {
    name: "Pipe cutter / pipe threading machine",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work.",
    ppe: ["Safety glasses", "Cut-resistant gloves — removed near a powered threading machine's rotating chuck, where entanglement outweighs cut risk", "Ear protection for powered threading machines"],
    hazardNote: "Entanglement on a powered threading machine's rotating chuck (loose gloves or clothing are a serious risk here), pinch points, metal swarf."
  },
  {
    name: "Powder-actuated fastening tool (stud gun)",
    classification: "Cold Work",
    classificationNote: "Uses a gunpowder-charge cartridge to drive a fastener — no open flame in normal use, but the explosive charge and projectile nature put it under its own strict controls, separate from general cold-work rules. Only used by someone with documented tool-specific training/certification, never general-issue.",
    ppe: ["Safety glasses / face shield", "Ear protection (cartridge discharge is loud)", "Hard hat for overhead work"],
    hazardNote: "Misfire or hangfire (a cartridge that fires late), fastener or fragment penetrating through the material and out the other side, ricochet, unintentional discharge if the safety tip isn't fully depressed against the work surface."
  },
  {
    name: "Concrete/masonry cut-off saw (walk-behind, wet-cut)",
    classification: "Hot Work",
    classificationNote: "An abrasive blade cutting concrete throws sparks the same way a metal-cutting disc does, especially on contact with embedded rebar — treated as hot work near flammable atmospheres or materials.",
    ppe: ["Face shield", "Ear protection (mandatory — extremely loud)", "Dust mask/respirator if not wet-cutting", "Gloves", "Safety boots"],
    hazardNote: "Blade shatter or kickback, sparks, silica dust if cutting dry, hand-arm vibration, noise-induced hearing loss on prolonged use."
  },
  {
    name: "Concrete vibrator (poker vibrator)",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work. Petrol-driven units should be refuelled cold and away from ignition sources, same as any small engine.",
    ppe: ["Safety glasses", "General work gloves", "Ear protection for petrol-driven units", "Safety boots"],
    hazardNote: "Hand-arm vibration on prolonged use, entanglement in the flexible drive shaft, electric shock on electric-driven units used around wet concrete — confirm GFCI/RCD protection is in place."
  },
  {
    name: "Rebar cutter/bender (manual or hydraulic)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Safety glasses", "Cut-resistant gloves", "Steel-toe boots"],
    hazardNote: "Pinch/crush point at the cutting or bending head, stored-energy release as the cut piece whips back, strain injury on manual units used beyond their rated bar size."
  },
  {
    name: "Plate compactor / vibratory roller",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work, though petrol-driven units should be refuelled cold and away from ignition sources.",
    ppe: ["Ear protection", "Safety glasses", "Steel-toe boots", "Gloves"],
    hazardNote: "Hand-arm and whole-body vibration, foot/toe crush risk from the compacting plate, engine exhaust in an enclosed or trench area, tip-over on sloped or uneven ground near an excavation edge."
  },
  {
    name: "Pipe bender (manual or hydraulic)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Safety glasses", "General work gloves", "Steel-toe boots"],
    hazardNote: "Pinch/crush point at the bending head, spring-back energy stored in the pipe if it slips from the die, strain injury on manual units."
  },
  {
    name: "Propane torch (soldering/brazing, plumbing)",
    classification: "Hot Work",
    classificationNote: "Open flame — always hot work, same fire-watch logic as oxy-fuel cutting, even though the flame is smaller.",
    ppe: ["Safety glasses", "Heat-resistant gloves", "FR clothing if near flammables", "Fire watch/extinguisher within reach"],
    hazardNote: "Burns, fire from an unattended flame or a hot pipe contacting combustible material, propane cylinder leak or flashback, fume inhalation from flux or old paint/coating on the pipe being heated."
  },
  {
    name: "Plumber's snake / drain auger",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Cut-resistant or heavy-duty rubber gloves", "Safety glasses (splash-back from the drain)", "Disposable coveralls or apron for sewage-line work"],
    hazardNote: "Entanglement of loose clothing or gloves in the rotating cable on powered augers, cable whip/kickback, exposure to sewage or biological contamination — treat any drain-clearing job on a waste line as a biohazard exposure risk, not just a mechanical one."
  },
  {
    name: "Drain/sewer jetting equipment (high-pressure)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work, though engine-driven jetting units should be refuelled cold and away from ignition sources.",
    ppe: ["Face shield or safety glasses", "Waterproof gloves and apron", "Ear protection", "Biohazard-rated PPE for sewage lines, same reasoning as the drain auger"],
    hazardNote: "High-pressure injection injury from the jetting nozzle or a hose failure — the same injury category as a pressure washer, but working inside a confined pipe run under higher pressure. Also slip hazard and biological exposure on waste lines."
  },
  {
    name: "Megger / insulation resistance tester",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work, though it applies a high test voltage to the circuit under test and must only be used on equipment already confirmed isolated and de-energized.",
    ppe: ["Insulated/electrical-rated gloves", "Safety glasses"],
    hazardNote: "The tester itself generates several hundred to a few thousand volts to check insulation resistance — never used on live equipment, and anyone else working on the same circuit needs to be warned before testing starts, since the test voltage is dangerous to someone who assumes the circuit is simply 'off.'"
  },
  {
    name: "Crowbar / pry bar",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Safety glasses", "General work gloves", "Steel-toe boots"],
    hazardNote: "Sudden release of tension when material breaks free (the bar can slip and swing back unexpectedly), pinch/crush point at the fulcrum, overreach strain on stuck material, flying debris or nails when stripping formwork."
  },
  {
    name: "Shovel / hoe (manual digging and mixing tools)",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["General work gloves", "Steel-toe boots", "Safety glasses when mixing dry materials"],
    hazardNote: "Manual handling strain from repetitive digging or mixing, struck-by injury to a nearby worker when swinging in a group, blisters or cuts from a worn or damaged handle."
  },
  {
    name: "Rubber mallet",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["General work gloves", "Safety glasses for overhead or paving work"],
    hazardNote: "Hand injury from a glancing or missed strike, material kickback when setting pavers or tiles under force."
  },
  {
    name: "Carpentry hand tools — claw hammer & wood chisel",
    classification: "Cold Work",
    classificationNote: "No ignition source under normal use — cold work.",
    ppe: ["Safety glasses (nails and wood fragments can fly when pulling or striking)", "General work gloves"],
    hazardNote: "A flying nail when pulling with the claw end, a glancing hammer blow to the hand, chisel slip toward the supporting hand if not cutting away from the body."
  },
  {
    name: "Masonry finishing tools — trowels & float",
    classification: "Cold Work",
    classificationNote: "No ignition source — cold work.",
    ppe: ["Waterproof gloves", "Safety glasses (mortar/plaster splash)"],
    hazardNote: "Skin contact with wet cement or mortar — caustic, same concern as general concrete work, so wash off promptly. Also minor cuts on trowel edges and repetitive strain on prolonged finishing work."
  },
  {
    name: "Measuring and marking tools — spirit level, try square, plumb bob",
    classification: "Cold Work",
    classificationNote: "Minimal direct hazard from the tools themselves — included because a missed or inaccurate check is what leads to a later structural or alignment problem, not because the tool is dangerous.",
    ppe: ["No specific PPE beyond standard task PPE for the area"],
    hazardNote: "The main risk isn't the tool — it's a plumb bob line or measuring tape left strung across a walkway becoming a trip hazard. Coil and stow lines immediately after use."
  },
  {
    name: "Static bonding/grounding cable and clamp",
    classification: "Cold Work",
    classificationNote: "Not a hazard source itself — it's a control device, but treated as safety-critical equipment for any flammable liquid transfer (road tanker, vessel, drum decanting).",
    ppe: ["Standard task PPE for the transfer operation being performed"],
    hazardNote: "A clamp that looks connected but is biting on paint, rust, or a coated surface instead of bare metal provides no actual path to ground — visually confirming a connection isn't the same as confirming continuity. Inspect the cable itself for damage before relying on it, and connect it before any hatch, valve, or hose fitting is opened, not after."
  },
];

// ============================================================
// OSH ACT (TRINIDAD & TOBAGO) QUICK REFERENCE
// Pulled directly from the Chapter 88:08 text published by the
// Ministry of the Attorney General and Legal Affairs (unofficial
// version, updated to 31 Dec 2016 at time of writing). Section
// numbers are quoted so they can be checked against the current
// authorised text at rgd.legalaffairs.gov.tt.
// ============================================================
const OSH_ACT_REFERENCE = [
  {
    section: "Section 6(1)–(2)",
    title: "Employer's General Duty",
    text: "Every employer must ensure, so far as is reasonably practicable, the safety, health and welfare at work of all employees. This specifically includes safe plant and systems of work, safe handling/storage/transport of substances, provision of adequate PPE with instruction in its use, sufficient training and supervision, and a safe working environment and means of access/egress."
  },
  {
    section: "Section 8",
    title: "Occupier's General Duty",
    text: "The occupier of an industrial establishment must ensure compliance with the Safety, Fire, Health and Welfare provisions of the Act. Occupiers with 25 or more employees must prepare a written safety and health policy and a written emergency plan, based on the annual risk assessment, and bring both to employees' attention."
  },
  {
    section: "Section 10(1)",
    title: "Employee's General Duties",
    text: "Every employee must take reasonable care for their own safety and that of others affected by their acts; cooperate with employer duties under the Act; report any contravention they're aware of; correctly use PPE provided; and not be impaired by an intoxicant to a degree that endangers their own or others' safety at work."
  },
  {
    section: "Section 13A",
    title: "Annual Risk Assessment",
    text: "Every employer must make a suitable and sufficient annual assessment of the risks to employees' safety and health, and to others who may be affected by the undertaking. The assessment must be reviewed if there's reason to suspect it's no longer valid or if circumstances change significantly. Employers with 25+ employees must keep a record of the findings."
  },
  {
    section: "Sections 14–21 (Part III)",
    title: "Right to Refuse Unsafe Work",
    text: "An employee may refuse to do particular work where they have sufficient reason to believe there is serious and imminent danger, that a machine, plant or device they must use is likely to endanger them or another employee, that the physical condition of the workplace is likely to endanger them, or that a contravention of the Act or Regulations is likely to endanger someone (s.15). They must immediately report the refusal to the employer and a safety and health committee representative; the committee investigates at once, with the employee, a union or employee-selected representative, and the employer's representative present (s.16). Where there is no committee, the report goes to the employer and the Chief Inspector. An inspector must investigate within 24 hours and give a written decision within 24 hours (s.18). While the investigation is pending the employee stays in a safe place and is paid the usual rate (ss.19–21). Limits: s.14 excludes the Defence Force, Police, Fire and Prison Services and workers in hospitals, clinics, laboratories and similar facilities where the danger is inherent in the job or refusal would endanger another person's life."
  },
  {
    section: "Section 20A",
    title: "No Reprisal for Acting on Safety",
    text: "No employer or person acting for an employer may dismiss, discipline, suspend, penalise, intimidate or coerce a worker (or threaten to) because the worker complied with the Act, sought its enforcement, followed the employer's own safety procedures, or gave evidence in an enforcement proceeding."
  },
  {
    section: "Sections 25E–25F",
    title: "Safety and Health Committees",
    text: "Every employer must, in consultation with the employees' representatives, establish a safety and health committee at an industrial establishment with 25 or more employees, or at a smaller one if the Chief Inspector directs it (s.25E). The committee must keep the measures protecting safety and health under review; investigate any matter a committee member or employee considers unsafe or a health risk and that has been brought to the employer's attention; try to resolve it; and, if it cannot, ask the Chief Inspector to inspect the workplace (s.25F). The committee also has a role in work refusals under s.16. The Act itself does not set out committee membership, meeting frequency or minutes — confirm those against your site's own procedure and any prescribed requirements."
  },
  {
    section: "Section 7",
    title: "Duty to Contractors, Visitors and the Public",
    text: "Every employer must conduct the undertaking so that, so far as is reasonably practicable, people who are not employees but may be affected (contractors, visitors, neighbours) are not exposed to risks to their safety or health. Self-employed persons carry the same duty toward themselves and others."
  },
  {
    section: "Section 6(3)–(6A)",
    title: "Hazardous Chemicals — Labels and Safety Data Sheets",
    text: "Employers must ensure hazardous chemicals are labelled in a way employees can easily understand, hold an unexpired safety data sheet for each one, make labels and SDSs available in English (and other prescribed languages), mark the contents when chemicals are transferred to other containers, and give information on disposal of residues and empty containers. A hazardous chemical may not be used, handled or stored unless the identification, SDS and worker instruction and training requirements are met. The inventory and SDSs must be open to employees' examination and given to the safety committee representative (or an employee-selected representative). Nobody may remove or deface a hazardous chemical's identification."
  },
  {
    section: "Section 25K",
    title: "Health Surveillance",
    text: "Every employer must provide employees with health surveillance appropriate to the risks identified in the annual risk assessment, and keep a record of it in accordance with section 75."
  },
  {
    section: "Section 12",
    title: "No Charging Employees for Safety Requirements",
    text: "An employer may not charge employees for anything done or provided to meet a specific requirement of the Act. The exceptions are canteen items, things lost or damaged wilfully or through the employee's negligence, and protective clothing or devices where the employee is employed for one month or less (capped at half their value)."
  },
  {
    section: "Sections 6(2)(c) & 23",
    title: "PPE — Provision and Use",
    text: "Employers must provide adequate, suitable PPE 'of an approved standard' and instruction in its use, wherever employees face risk of head, eye, ear, hand, or foot injury, injury from an air contaminant, or other bodily injury. A notice must be posted in any area where PPE is mandatory, and no one may be permitted in that area without wearing it."
  },
  {
    section: "Section 25",
    title: "Confined Spaces — Legal Requirements",
    text: "Sets out detailed entry requirements: easy egress, mechanical equipment disconnected and locked out, supply lines blanked off, and testing/certification by a competent person. Where a hazardous atmosphere exists or is likely (oxygen below 18% or above 23%, or hazardous gas/vapour/dust/fume), additional requirements apply — purging and ventilation, a standby worker with rescue equipment stationed outside, and, where the atmosphere can't be made safe, supplied breathing apparatus plus a harness and line to an attendant equipped with an alarm."
  },
  {
    section: "Sections 25A–25D",
    title: "Machine Guarding",
    text: "Every prime mover, transmission machinery, and dangerous part of any machine must be securely fenced or guarded, unless its position or construction makes it inherently as safe as if it were fenced."
  },
  {
    section: "Section 34",
    title: "Noise and Vibration",
    text: "The owner, occupier, or employer must take adequate steps to prevent hearing impairment from noise and disease from vibration. This includes ensuring protective equipment is worn at appropriate times, arranging medical exams (including audiometric testing) for exposed employees, and keeping records of results."
  },
  {
    section: "Sections 46 & 46A",
    title: "Accident Notification Timelines",
    text: "Death or critical injury: the Chief Inspector must be informed immediately by phone, fax, or email, followed by written notice within 48 hours. Incidents with potential for critical injury — fire, explosion, toxic release — carry the same 48-hour written notice requirement. Other injuries causing inability to work or requiring medical attention: written notice within 4 days."
  },
  {
    section: "Section 47",
    title: "Preservation of the Accident Scene",
    text: "Following a death or critical injury, nothing at the scene may be interfered with, disturbed, or removed — except to save life, maintain an essential public service, or prevent unnecessary damage — until an inspector gives permission."
  },
  {
    section: "Sections 26–29 (Part V)",
    title: "Fire Safety Provisions",
    text: "Applies where more than 20 employees work in a building, more than 10 work above the ground floor, or explosive/highly flammable substances are stored or used. Requires a certified means of escape, fire exits that are unlocked or quickly openable from inside, illuminated exit signage, an audible fire warning distinct from other site signals, adequate firefighting equipment, and trained personnel with a record of drill frequency."
  },
];

// ============================================================
// CHEMICALS REFERENCE — common substances on a T&T petrochemical
// estate. Not exhaustive and not a substitute for the specific
// product's SDS — always defer to the SDS for exact figures.
// ============================================================
const CHEMICALS_LIBRARY = [
  {
    name: "Ammonia (anhydrous)",
    hazardClass: "Toxic gas, corrosive, flammable within a narrow range",
    exposureSigns: "Sharp irritating odour even at very low concentration, eye/throat irritation, coughing, and at higher concentration chemical burns to eyes/skin/lungs and breathing difficulty.",
    immediateResponse: "Move upwind and away immediately, removing contaminated clothing as you go. For eye contact: get to the nearest deluge shower/eyewash station and flush continuously for a minimum of 15 minutes — hold the eyelids open with fingers so water actually reaches under the lid, remove contact lenses if it can be done without delaying the flush, and don't stop early just because irritation seems to ease. For skin contact: flush the affected area at the deluge shower for the same 15-minute minimum. Do not rub eyes or skin — this drives the chemical in further. Seek medical attention even for what seems like brief exposure or inhalation only — respiratory effects can develop after the fact, sometimes hours later.",
    incompatible: "Strong acids, halogens, oxidizers — do not mix or store together.",
    note: "One of the primary products handled on the Point Lisas estate. Its own strong odour is a warning most people notice well before a harmful concentration — never ignore it as 'just the smell of the plant.' Know the nearest deluge shower/eyewash location before starting any task near ammonia — under s.43(2) of the OSH Act, the Chief Inspector can direct an occupier to provide these, and a 15-minute flush only works if you can reach one in seconds, not minutes."
  },
  {
    name: "Methanol",
    hazardClass: "Flammable liquid, toxic by ingestion/inhalation/skin absorption",
    exposureSigns: "Headache, dizziness, nausea; at higher exposure, visual disturbance is a distinctive warning sign specific to methanol and should be treated as a medical emergency, not just discomfort.",
    immediateResponse: "Remove from exposure to fresh air immediately. Remove contaminated clothing and flush exposed skin at the nearest deluge shower for a minimum of 15 minutes; for eye contact, flush at an eyewash station for the same minimum, holding the eyelids open. Any visual disturbance, confusion, or breathing difficulty following exposure is a medical emergency — get the person to hospital immediately rather than waiting to see if it passes. Methanol is metabolised into a toxic compound that damages the eyes and nervous system, and the specific treatment for this has to be given by medical staff — the officer's job is fast recognition and fast transport, not treatment.",
    incompatible: "Strong oxidizers.",
    note: "Also produced at Point Lisas. Vapour is flammable and heavier than air — can travel and pool in low areas, which matters for excavation or confined space work nearby. Methanol poisoning symptoms can be delayed by several hours after exposure, so 'the person seems fine now' isn't a reason to skip medical evaluation after a known significant exposure."
  },
  {
    name: "Natural gas / LNG",
    hazardClass: "Flammable gas, asphyxiant in high concentration",
    exposureSigns: "Odourless in its raw state — commercial natural gas has an odourant (mercaptan) added specifically so a leak is noticeable. Symptoms of exposure to a leak are primarily asphyxiation risk (from oxygen displacement) rather than direct toxicity.",
    immediateResponse: "Evacuate the area, eliminate ignition sources, do not operate electrical switches in the area. Report immediately per site gas leak procedure.",
    incompatible: "Any ignition source — oxidizers not typically the primary concern, ignition control is.",
    note: "LNG's extremely low storage temperature also creates cryogenic burn/frostbite risk on contact, separate from the flammability hazard."
  },
  {
    name: "Sulphuric acid",
    hazardClass: "Corrosive, strong oxidizer under some conditions",
    exposureSigns: "Immediate burning pain on contact, visible tissue damage on skin/eyes, respiratory irritation from mist/vapour.",
    immediateResponse: "Flush affected area with copious water for at least 15–20 minutes while removing contaminated clothing. Do not attempt to neutralize the acid directly on skin. Seek medical attention for any significant contact.",
    incompatible: "Water (adding water TO concentrated acid causes violent reaction — always add acid to water, never the reverse, if dilution is required), most metals (generates flammable hydrogen gas), organic materials.",
    note: "Common in water treatment and various process applications — treat any transfer or handling as a high-consequence task regardless of how routine it feels."
  },
  {
    name: "Chlorine",
    hazardClass: "Toxic gas, oxidizer",
    exposureSigns: "Sharp, distinctive odour at low concentration; eye/throat/lung irritation, coughing, and at higher concentrations severe respiratory distress.",
    immediateResponse: "Evacuate upwind immediately. Do not attempt to approach a leak without appropriate respiratory protection. Seek medical attention for any symptomatic exposure.",
    incompatible: "Ammonia (produces toxic gas), flammable materials, most metals.",
    note: "Commonly used in water treatment. Cylinder leaks are a recognized site emergency scenario — know your site's specific chlorine leak response before you need it, not during."
  },
  {
    name: "Diesel / fuel oil",
    hazardClass: "Combustible liquid (not as readily ignitable as gasoline, but still a fire hazard), mild toxicity",
    exposureSigns: "Skin/eye irritation on contact, headache/nausea from prolonged vapour exposure in enclosed spaces.",
    immediateResponse: "Remove contaminated clothing, wash skin. Ventilate enclosed spaces where vapour has accumulated. Treat spills as a slip hazard and environmental release, not just a fire risk.",
    incompatible: "Strong oxidizers.",
    note: "Because it's less obviously dangerous than the other substances on this list, it's the one most often handled casually — the spill/environmental-release consequence is usually the bigger practical risk on a day-to-day basis."
  },
];

// ============================================================
// EMA (ENVIRONMENTAL MANAGEMENT AUTHORITY) QUICK REFERENCE
// Pulled directly from the Environmental Management Act Chapter
// 35:05 (unofficial version, updated to 31 Dec 2016). This is
// separate legislation from the OSH Act — the EMA regulates
// environmental impact, not workplace safety.
// ============================================================
const EMA_REFERENCE = [
  {
    section: "Section 35",
    title: "Certificate of Environmental Clearance (CEC)",
    text: "No person may proceed with an activity the Minister has designated as requiring a CEC until they've applied for and received one from the EMA. The Designated Activities Order lists 44 activities requiring a CEC. Where an Environmental Impact Assessment is required, it must go through public comment before a Certificate is issued."
  },
  {
    section: "Section 38",
    title: "CEC Blocks Other Approvals Until Issued",
    text: "Where an activity requires an EIA, no other government entity may grant any permit, licence, or authorisation for that activity until the CEC has been issued. Getting other approvals first does not bypass this requirement."
  },
  {
    section: "Section 47",
    title: "Record-Keeping and Monitoring",
    text: "The EMA can require anyone releasing a pollutant, or handling a hazardous substance, to sample and analyse it, install and maintain monitoring equipment, keep records of sampling/monitoring/audit activity, and submit reports and compliance certifications on request."
  },
  {
    section: "Sections 55–58",
    title: "Waste Management",
    text: "The EMA runs a waste management programme and separately identifies categories of hazardous waste. Waste disposal activities and waste-handling facilities require an EMA permit or licence. Handling or disposing of waste in violation of an applicable licence, permit, or standard is prohibited outright."
  },
  {
    section: "Sections 59–60",
    title: "Hazardous Substances — Handling and Permits",
    text: "Once a substance is designated hazardous, it may only be handled according to approved performance standards and procedures, or under a licence/permit granted by the EMA. This applies whether you handle it directly or arrange for someone else to handle it on your behalf."
  },
  {
    section: "Section 61",
    title: "Notification of Spills, Releases and Incidents",
    text: "Anyone in charge of premises or a vehicle must notify the EMA as soon as they have knowledge of a spill, release, or other incident involving a hazardous substance or pollutant. The notification must include a description of the incident, an assessment of the damage or risk to health/environment, and a description of the response measures taken and planned."
  },
  {
    section: "Sections 49–54",
    title: "Air, Noise and Water Pollution Permits",
    text: "Processes releasing air or water pollutants generally require an EMA permit, with conditions covering design, construction, operation, and monitoring. Noise emissions are capped by the Noise Pollution Control Rules, 2001 — releasing pollutants or noise in violation of permit conditions or prescribed standards is a distinct offence from the underlying activity itself."
  },
  {
    section: "Sections 62–66, 71",
    title: "Enforcement — Notices, Orders, and Individual Liability",
    text: "Where the EMA believes an environmental requirement has been violated, it issues a written Notice of Violation, which can escalate to an Administrative Order requiring the violation to stop and any environmental damage to be remedied, plus a possible administrative civil assessment. Individual directors, managers, or supervisors can be held personally liable for a company's violation if it happened with their direct consent, or if they failed to exercise reasonable diligence to prevent it — this isn't only a corporate liability."
  },
];

// ============================================================
// WEATHER & HEAT STRESS REFERENCE — standalone quick-reference,
// not buried inside individual task hazards, because both heat
// stress and severe weather are routine operational realities
// in Trinidad, not edge cases.
// ============================================================
const WEATHER_REFERENCE = {
  heatStress: {
    title: "Heat Stress — Recognition & Response",
    intro: "Heat exhaustion and heat stroke sit on the same spectrum — heat exhaustion is the warning stage; heat stroke is a medical emergency. Knowing the difference, and acting fast, matters more than any single number on a thermometer.",
    earlySigns: [
      "Heavy sweating",
      "Weakness or fatigue beyond what the task explains",
      "Cool, pale, clammy skin",
      "Fast, weak pulse",
      "Nausea, dizziness, or headache",
      "Muscle cramps",
    ],
    severeSigns: [
      "Body temperature feels very hot to the touch",
      "Skin that is hot and dry, OR still sweating heavily but with confusion — either pattern is dangerous",
      "Fast, strong pulse",
      "Confusion, slurred speech, or agitation",
      "Loss of consciousness",
    ],
    response: [
      "Early signs: move the person to shade or a cool area immediately, loosen/remove excess clothing, sip cool water, cool the skin with wet cloths, and rest until fully recovered before returning to work.",
      "Severe signs: treat as a medical emergency — call for emergency medical help immediately. Move to a cool area, cool the person rapidly (wet cloths or ice packs at neck, armpits, groin) while waiting for help. Do not give fluids if the person is confused or unconscious.",
      "Never send someone showing severe signs back to work 'to walk it off' — heat stroke can escalate quickly and is fatal if not treated promptly.",
    ],
    prevention: [
      "Build in a work/rest cycle for extreme heat, not just a fixed lunch break",
      "Hydration on a schedule, before thirst sets in — thirst is already a lagging indicator",
      "Shaded rest areas genuinely accessible during the task, not just in theory",
      "Allow new or returning workers time to acclimatize rather than a full-intensity first day",
      "Use a buddy system on hot days — early signs are often easier for someone else to notice first",
    ],
  },
  lightning: {
    title: "Lightning / Severe Weather Stop-Work Protocol",
    intro: "Trinidad's sudden afternoon squalls and thunderstorms are routine, not exceptional — this needs a pre-agreed trigger, not an in-the-moment judgement call.",
    triggers: [
      "The 30-30 rule: if the time between seeing lightning and hearing thunder is 30 seconds or less, stop work immediately",
      "Any work at height, on open ground, near metal structures (pipe racks, scaffolding, fencing), or near water is highest priority to stop first",
      "Don't wait for rain to start — lightning risk precedes visible rain, often by several minutes",
    ],
    actions: [
      "Suspend all work at height, on open/exposed ground, and near tall or metal structures",
      "Move to a substantial building or a fully enclosed, hard-topped vehicle — an open-sided shelter is not adequate protection",
      "Stay away from isolated tall structures, trees, metal fencing, and water",
      "Do not resume work until at least 30 minutes have passed since the last observed lightning or thunder",
      "Log the stoppage and resumption time — this is exactly the kind of record a JHA/toolbox talk record should capture",
    ],
  },
};

// ============================================================
// INCIDENT INVESTIGATION REFERENCE — basic root-cause method
// (5 Whys) for when you have to investigate an incident, not
// just report it. Pairs with the accident notification duties
// in the OSH Act reference above.
// ============================================================
const INCIDENT_INVESTIGATION = {
  title: "Basic Incident Investigation Method",
  intro: "The goal is finding the systemic cause, not just the immediate one — a corrective action aimed only at 'the worker should have been more careful' almost never prevents recurrence.",
  steps: [
    {
      title: "Secure the scene and gather immediate facts",
      description: "Before anything else, capture what/who/when/where while it's fresh — photos, positions of equipment, environmental conditions. Remember the OSH Act's scene preservation duty (s.47) for anything involving death or critical injury: nothing may be disturbed except to save life, maintain an essential service, or prevent further damage, until an inspector permits it."
    },
    {
      title: "Interview witnesses separately",
      description: "Talk to each witness on their own, using factual, non-blame language. People describe events more accurately without a group narrative already forming, and separately gathered accounts let you cross-check for consistency."
    },
    {
      title: "Ask 'why' repeatedly (5 Whys)",
      description: "Start from the immediate cause and keep asking why, one layer at a time, until you reach something systemic — a missing procedure, a training gap, a maintenance schedule, a resourcing decision. Five is a guideline, not a hard rule: stop when you hit a genuinely systemic cause, even if that's the third why or the seventh."
    },
    {
      title: "Don't stop at human error — and investigate near-misses too",
      description: "If the finding is 'the worker made an error', keep asking: did they have the right tools and enough time, were they trained, were they supervised? If equipment failed, ask why it failed, whether it was maintained properly, and whether it was past its service life. Include near-misses in the investigation process — they show where hazards aren't being controlled — and put both a management and a worker representative on the team. Source: OSHA 3885."
    },
    {
      title: "Look for contributing factors, not just one root cause",
      description: "Most real incidents have more than one contributing factor. Resist collapsing the investigation into a single cause just because you found one plausible chain — ask what else had to be true for this to happen."
    },
    {
      title: "Develop corrective actions aimed at the root cause",
      description: "An action item that only addresses the immediate cause (e.g. 're-trained the worker') without addressing the systemic one (e.g. 'no PM schedule existed for that seal') will not prevent recurrence. Aim corrective actions at the level where the 5 Whys actually stopped."
    },
    {
      title: "Verify the corrective action actually worked",
      description: "Set a follow-up date to confirm the corrective action was implemented and is functioning as intended — a corrective action that exists only on paper isn't a corrective action."
    },
  ],
  example: {
    issue: "Worker slipped on a wet floor near a machine.",
    chain: [
      "Why was the floor wet? — A machine seal was leaking.",
      "Why was the seal leaking? — It had exceeded its service life.",
      "Why had it exceeded its service life? — There was no preventive maintenance schedule for that seal.",
      "Why was there no PM schedule? — The maintenance plan for that machine class was never formally established after installation.",
      "Root cause: a gap in the maintenance planning process at commissioning — not the worker's footing, and not even the leaking seal itself.",
    ],
  },
};

// ============================================================
// BARRICADES & SIGNAGE REFERENCE
// General safety-sign colour convention (ANSI Z535 / ISO 3864
// family, the same convention OSHA general industry sign
// provisions draw on) applied to barricade tape and physical
// barriers — not a Trinidad-specific standard, but universally
// used on plant sites here.
// ============================================================
const TAPE_COLOURS = [
  {
    colour: "Red",
    swatch: "solid",
    hex: "#C81E1E",
    meaning: "Danger — immediate, serious hazard",
    example: "Fire hazards, electrical danger, do-not-enter zones, active confined space entry points"
  },
  {
    colour: "Red & white diagonal stripes",
    swatch: "stripes",
    hex1: "#C81E1E",
    hex2: "#F2F0EA",
    meaning: "Do not cross — serious or immediate hazard boundary",
    example: "Excavation edges, fall-hazard perimeters, active lifting exclusion zones"
  },
  {
    colour: "Black & yellow diagonal stripes",
    swatch: "stripes",
    hex1: "#17191A",
    hex2: "#FFC400",
    meaning: "Caution — physical hazard boundary",
    example: "The standard general-purpose barricade tape for marking a hazard perimeter on a plant site"
  },
  {
    colour: "Yellow",
    swatch: "solid",
    hex: "#FFC400",
    meaning: "Caution — potential hazard requiring care",
    example: "Temporary hazard marking, trip/slip risk, general work-in-progress boundary"
  },
  {
    colour: "Orange",
    swatch: "solid",
    hex: "#E8590C",
    meaning: "Warning — machinery or equipment with moving parts",
    example: "Machine-guarding boundaries, equipment actively in operation"
  },
  {
    colour: "Green",
    swatch: "solid",
    hex: "#1E8E5A",
    meaning: "Safety information / safe condition",
    example: "First aid stations, muster points, emergency equipment location"
  },
  {
    colour: "Blue",
    swatch: "solid",
    hex: "#3A5A78",
    meaning: "Mandatory instruction",
    example: "Areas requiring specific PPE before entry, notice/information boundary"
  },
];

const BARRICADE_SPECS = [
  {
    title: "Height",
    text: "At least 1m (3–4 ft) off the ground so the barrier is genuinely visible and not easily stepped over — low tape gets ignored or missed entirely in a busy plant environment."
  },
  {
    title: "Material",
    text: "Durable and weather-resistant. Trinidad's sun and rain degrade cheap tape far faster than in a temperate climate — expect to replace it more often than the packaging suggests."
  },
  {
    title: "Visibility",
    text: "High-contrast colour, with reflective elements for any barrier that needs to remain visible after dark or in low light."
  },
  {
    title: "Coverage",
    text: "Fully enclose the hazard, not just the side facing the main walkway — people approach from unexpected angles more often than officers plan for."
  },
  {
    title: "Tape is a warning, not a physical barrier",
    text: "For anything with real fall, vehicle, or drop risk, pair tape with an actual physical barricade (stands, fencing, hard barriers) — tape alone stops no one who's determined or distracted."
  },
];

const BARRICADE_PRACTICES = [
  "Barricade before work starts, not partway through once someone's already walked into the area.",
  "Post a sign at the entry point explaining the specific hazard — tape with no context just becomes background noise.",
  "Inspect barricades and tape daily and after any heavy rain or wind, especially on an outdoor plant site.",
  "Remove promptly once the hazard is gone. Old tape left up past its relevance is exactly how people learn to stop respecting it.",
];

// ============================================================
// PERMIT-TO-WORK SYSTEM — REFERENCE
// A Permit-to-Work (PTW) system itself is not an OSH Act term —
// it's an internationally-recognized process safety management
// practice (used across the oil, gas, and petrochemical
// industry, including by companies operating at Point Lisas).
// Where a card's content is grounded directly in the OSH Act
// Chapter 88:08 rather than general industry practice, its
// "section" field cites the relevant provision. Cards without a
// section are general good-practice guidance, not legal text.
// ============================================================
const PTW_REFERENCE = [
  {
    title: "What a Permit-to-Work actually is",
    text: "A formal, documented system that authorizes specific high-risk work, for a specific person or crew, at a specific location, for a defined time window, under stated conditions and precautions — not a generic form filled in from memory. Its purpose is to force a documented check that isolation, atmosphere testing, and precautions are actually in place before work starts, rather than relying on verbal agreement or the assumption that 'someone already checked.'"
  },
  {
    title: "The legal backbone behind it",
    section: "s.8(2)(b)",
    text: "The OSH Act requires an occupier with 25+ employees to prepare a written emergency plan based on a risk assessment, and separately (s.25(2)(d), s.25(7)(a)) requires confined spaces to be tested and certified by a 'competent person' certified by the Chief Inspector before entry. A PTW system is how a site operationalizes these duties day to day — the permit is the paper trail proving the required check actually happened, by the person qualified to make it."
  },
  {
    title: "The permit types you'll use across the task cards",
    text: "Hot Work Permit (welding, cutting, grinding with sparks, open flame), Confined Space Entry Permit (with atmospheric testing certificate), Ground-Breaking/Excavation Permit, Lifting Plan/Permit for critical or complex lifts, Electrical Isolation Certificate tied to Lockout/Tagout, Working at Height Permit where required by site policy, and Nitrogen/Inert Gas Purge Permit. Several tasks require more than one permit simultaneously — for example, hot work inside a vessel needs both a Hot Work Permit and a Confined Space Entry Permit, not one covering the other."
  },
  {
    title: "Key roles in the system",
    text: "Permit Issuer/Area Authority — the person with authority over that area who confirms conditions are safe and authorizes the work. Permit Holder/Performing Authority — the person actually doing or supervising the work, responsible for following the permit's conditions. Authorized Gas Tester/Competent Person — certified to test and certify atmosphere, matching the OSH Act's own definition of 'competent person' for confined space work. Standby/Attendant — dedicated to monitoring the work and raising the alarm, not doubling as another pair of hands on the task."
  },
  {
    title: "Isolation certificates and lockout/tagout — related but separate",
    text: "A work permit authorizes the work; an isolation certificate (tied to your Lockout/Tagout procedure) proves the specific equipment has actually been isolated, locked, and verified de-energized or depressurized. Treat these as two linked documents, not one — a permit referencing an isolation that was never actually verified is exactly the gap that leads to someone working on live equipment."
  },
  {
    title: "The permit lifecycle",
    text: "Issue (conditions checked and signed) → toolbox talk/briefing to the crew doing the work → work in progress, with the permit displayed at the job site → suspension if conditions change (shift change, weather, gas alarm, emergency) → close-out/handback once work is complete or the shift ends. A permit that's still 'open' after the crew has gone home is not a paperwork oversight — it means the next shift, or an emergency responder, has no accurate picture of what state that equipment or area is actually in."
  },
  {
    title: "Common permit-to-work failures on real sites",
    text: "Permit fatigue — renewing a permit as a formality without re-checking conditions that may have changed. Scope creep — starting extra work not actually covered by the permit as written, because it's 'basically the same job.' Poor shift handover — the incoming crew continuing work on a permit issued to a crew that's no longer on site. Skipped re-testing — treating a gas test from hours ago as still valid after a break in work, wind shift, or nearby process change. Every one of these is a documentation habit, not a technical failure — which is exactly why they're preventable."
  },
];

// ============================================================
// EMERGENCY RESPONSE / MUSTER — REFERENCE
// Alarm tones, muster arrangements, and mutual aid activation
// are set by each individual site's own emergency plan and vary
// between estates and even between plants on the same estate —
// this reference gives the general categories and the legal
// backbone behind them, not your specific site's actual codes.
// Confirm your own site's real alarm tones and muster point
// assignments with your emergency plan; never assume based on
// this guide alone.
// ============================================================
const EMERGENCY_RESPONSE_REFERENCE = [
  {
    title: "Understanding site alarms — general categories",
    section: "s.27(6)–(7)",
    text: "The OSH Act requires a warning system that is clearly audible throughout the building and distinct from any other signal in use on the premises — but it doesn't standardize what the tone means. As a general industry convention (confirm against your own site's actual codes): a continuous siren commonly signals evacuate-and-muster, typically for fire; an intermittent or warbling siren commonly signals a toxic gas release, which may mean shelter-in-place rather than evacuate depending on wind direction and your site's own plan; an all-clear is typically a steady tone or a verbal announcement. Learn your actual site's tones on day one — never assume a generic guide matches your plant's real signal."
  },
  {
    title: "Muster points and wind direction",
    text: "A muster point isn't automatically safe just because it's the designated one — if a gas release is coming from a direction that puts the usual muster point downwind, the correct response is to move to an upwind or crosswind alternate, not to muster in the path of the release out of habit. Know your site's primary and at least one alternate muster point, and build a basic sense of prevailing wind direction into your situational awareness, not just into the emergency plan document."
  },
  {
    title: "Roles during an emergency",
    text: "Fire Warden/Marshal — sweeps their assigned area, confirms evacuation, reports headcount status to the muster point coordinator. Muster point coordinator — takes headcount against the day's sign-in/visitor log and reports missing persons to the incident commander immediately, not after a full recount. The 'don't be a hero' rule applies here the same way it does in Confined Space Entry — someone without the training or equipment to attempt a rescue safely should not attempt it; get trained responders there instead."
  },
  {
    title: "Evacuation drills and fire-fighting equipment",
    section: "s.28, s.29",
    text: "Where more than 20 persons work above the ground floor of a building, or explosive/highly flammable materials are stored or used, the occupier must ensure employees are familiar with the means of escape and keep a record of evacuation drill frequency for inspection. Separately, the occupier must maintain adequate fire-fighting equipment and keep a sufficient number of trained persons available during working hours, with records of training and drill frequency kept for inspection. As an HSE officer, maintaining these records is part of the job, not paperwork on top of it."
  },
  {
    title: "First aid and medical response infrastructure required on site",
    section: "s.43",
    text: "Every factory must maintain fully equipped first aid boxes, under the control of persons trained in first aid and retested every three years. The Chief Inspector can direct an occupier to provide deluge showers, eye baths, and similar first aid devices where necessary — directly relevant to ammonia and methanol handling on this estate. Any factory or industrial estate with more than 250 employees must maintain a dedicated first-aid room and an ambulance with appropriate medical/nursing staff, unless specifically exempted by the Chief Inspector."
  },
  {
    title: "Notifying the authorities — the legal reporting clocks",
    section: "s.46, s.46A",
    text: "Death or critical injury: the occupier must inform the Chief Inspector immediately by phone, fax, or e-mail, followed by written notice within 48 hours. An incident with the potential for critical injury — including fire, explosion, or release of a toxic substance, even without an actual injury — must also be reported within 48 hours; this applies directly to a significant ammonia or methanol release even if no one is hurt. A lost-time injury not amounting to critical injury has a 4-day written notice window. These are the actual legal clocks that start running the moment something happens — your app's own Incident/Near-Miss module should be treated as feeding into this reporting obligation, not replacing it."
  },
  {
    title: "Estate mutual aid",
    text: "Point Lisas operates interplant mutual aid arrangements for major emergencies, coordinated through the estate's industry association. The specific activation procedure, contact points, and what resources are shared varies by estate arrangement and isn't set out in the OSH Act itself — obtain your own site's current mutual aid activation procedure directly rather than assuming it matches a generic description. (Flagged as a roadmap item for this app — a fuller, site-specific mutual aid reference can be added once that procedure is confirmed.)"
  },
];


// ============================================================
// LIFTING APPLIANCE COLOUR CODES — Energy Chamber of T&T advisory
// (Advisory #36/2026, dated 1 July 2026). Industry guidance, not
// legislation. Colour changes every six months and the four-colour
// sequence repeats on a two-year cycle. Hex values are on-screen
// approximations only — the advisory itself warns screens do not
// show RAL colours accurately.
// ============================================================
const LIFTING_COLOUR_SEQUENCE = [
  { name: "Purple Violet",  ral: "RAL 4007", hex: "#6B2D5C" },
  { name: "Yellow Orange",  ral: "RAL 2000", hex: "#ED760E" },
  { name: "Luminous Yellow", ral: "RAL 1026", hex: "#FFFF00" },
  { name: "Pearl Green",    ral: "RAL 6035", hex: "#1B5E2F" },
];
// Cycle starts 1 July 2026 with index 0 and advances every 6 months.
const LIFTING_CYCLE_START = { year: 2026, monthIndex: 6 }; // July (0-based month)


// ============================================================
// SDS 16-SECTION GUIDE and HAZARD PICTOGRAMS — from OSHA 3514 (SDS
// brief), OSHA Quick Cards 3493 and 3491. US HCS wording; the SDS
// format and pictogram set follow the UN GHS. Always read the actual
// supplier label and SDS for the product in your hand.
// ============================================================
const SDS_SECTIONS = [
  { n: 1,  title: "Identification", text: "Product name as on the label, supplier name, address and phone, an emergency phone number, recommended and restricted uses." },
  { n: 2,  title: "Hazard(s) identification", text: "The hazard classification, signal word, hazard statements, pictograms and precautionary statements — the quick read of how dangerous the product is." },
  { n: 3,  title: "Composition / ingredients", text: "Ingredient names and CAS numbers, including hazardous impurities and stabilisers. Trade-secret ingredients may be withheld with a statement saying so." },
  { n: 4,  title: "First-aid measures", text: "What an untrained responder should do for inhalation, skin, eye and swallowing exposure, the most important acute and delayed symptoms, and when to get medical care." },
  { n: 5,  title: "Fire-fighting measures", text: "Suitable and unsuitable extinguishing media, hazards that develop in a fire (such as toxic combustion products), and firefighter protection." },
  { n: 6,  title: "Accidental release measures", text: "Personal precautions and PPE, emergency procedures, containment and cleanup methods, sometimes split into small and large spills." },
  { n: 7,  title: "Handling and storage", text: "Safe handling precautions, hygiene rules, storage conditions and incompatible materials." },
  { n: 8,  title: "Exposure controls / personal protection", text: "Occupational exposure limits (such as OSHA PELs and ACGIH TLVs), engineering controls like local exhaust ventilation, and PPE — including the glove material and respirator type to use." },
  { n: 9,  title: "Physical and chemical properties", text: "Appearance, odour, pH, flash point, flammability limits, vapour pressure and density, auto-ignition temperature and similar data." },
  { n: 10, title: "Stability and reactivity", text: "Whether the product is stable, what conditions to avoid (heat, static discharge, shock), which materials it reacts with, and hazardous decomposition products." },
  { n: 11, title: "Toxicological information", text: "Routes of exposure, immediate and delayed effects, symptoms from mild to severe, toxicity figures such as LD50, and whether it is a listed or suspected carcinogen." },
  { n: 12, title: "Ecological information", text: "Effects on aquatic and land life, persistence and bioaccumulation. Not enforced by OSHA, but useful for spill response and EMA reporting." },
  { n: 13, title: "Disposal considerations", text: "Suitable disposal containers and methods, and any special precautions for landfill or incineration." },
  { n: 14, title: "Transport information", text: "UN number, proper shipping name, hazard class and packing group, and any special precautions for moving it." },
  { n: 15, title: "Regulatory information", text: "Safety, health and environmental regulations that apply to the product and aren't covered elsewhere on the sheet." },
  { n: 16, title: "Other information", text: "The date the SDS was prepared or last revised, and often what changed. Check it — an old sheet may be out of date." }
];

const SDS_TIPS = [
  "Sections 1–8 are the fast-read for an emergency: Section 2 for the hazard, 4 for first aid, 5 for fire, 6 for spills, 8 for PPE.",
  "Employers should keep SDSs readily accessible to workers without leaving their work area, with a back-up for a power outage or emergency, whether in a binder or on a computer.",
  "If you don't have an SDS for a product, ask the supplier or manufacturer for one before using it.",
  "Section 8's glove material and respirator type are specific — nitrile, PVC and other materials resist different chemicals, so don't assume your general work gloves are suitable."
];

const GHS_PICTOGRAMS = [
  { name: "Health hazard", covers: "Carcinogen, mutagenicity, reproductive toxicity, respiratory sensitiser, target organ toxicity, aspiration toxicity" },
  { name: "Flame", covers: "Flammables, pyrophorics, self-heating, emits flammable gas, self-reactives, organic peroxides, desensitised explosives" },
  { name: "Exclamation mark", covers: "Skin and eye irritant, skin sensitiser, acute toxicity (harmful), narcotic effects, respiratory tract irritant" },
  { name: "Gas cylinder", covers: "Gases under pressure, chemicals under pressure" },
  { name: "Corrosion", covers: "Skin corrosion/burns, eye damage, corrosive to metals" },
  { name: "Exploding bomb", covers: "Explosives, self-reactives, organic peroxides" },
  { name: "Flame over circle", covers: "Oxidisers" },
  { name: "Environment", covers: "Aquatic toxicity (non-mandatory in the US; often shown on products sold in T&T)" },
  { name: "Skull and crossbones", covers: "Acute toxicity — fatal or toxic" }
];


// ============================================================
// SAFE WORK PERMIT (CSWP-style) MAPPING
// Based on the printed layout of a Contractors' Safe Work Permit used
// at a Point Lisas power-generation plant. Only the printed form
// structure is used (task types, precaution/PPE boxes, specific-hazard
// boxes, sections). This is a SUGGESTED starting point for the person
// filling in or checking the permit — the permit issuer and the
// competent person decide what is ticked, and other sites' forms
// differ. Box wording is kept exactly as printed.
// ============================================================
const SWP_TASK_TYPES = ["Hot Work", "Cold Work", "Live Work", "Height", "Excavation", "Confined Space", "Other"];

const SWP_PRECAUTIONS = [
  "Drained/Purged", "Depressurized & Vented", "Washed", "Isolated", "Area Barricaded",
  "Lifting Equipt. Inspected", "Fire Extinguisher", "Water Hose-Fire/Chemicals", "Additional Illumination",
  "Air Mover/Ventilator", "Hot Work Requirements", "Blinded/Screened (Welding)", "Ventilated",
  "Electrical Tools Grounded", "Eye Protection", "Head Protection", "Hearing Protection",
  "Protective Clothing", "Safety Shoe/Boots", "Breathing Equipment", "Full body Harness/Lifeline",
  "Excavation Approved", "Ladder/Scaffold Inspected", "Hazard Warning signs posted"
];

const SWP_HAZARDS = [
  "Flammable Atmosphere", "Toxic Gas Atmosphere", "Underground/Overhead Hazards",
  "Radioactive Sources", "Energized Electrical Equipment/Conductors"
];

// Which printed permit PPE box each PPE library item belongs under.
const PPE_PERMIT_BOX = {
  "Hard hat / safety helmet": "Head Protection",
  "Safety glasses / spectacles": "Eye Protection",
  "Goggles": "Eye Protection",
  "Face shield": "Eye Protection",
  "Welding helmet (shaded / auto-darkening)": "Eye Protection",
  "Ear plugs": "Hearing Protection",
  "Ear muffs": "Hearing Protection",
  "Respirator — half-face (cartridge)": "Breathing Equipment",
  "Respirator — full-face / supplied-air": "Breathing Equipment",
  "Gloves — general work": "Protective Clothing",
  "Gloves — cut-resistant": "Protective Clothing",
  "Gloves — chemical-resistant": "Protective Clothing",
  "Gloves — insulated / electrical-rated": "Protective Clothing",
  "Gloves — impact-resistant": "Protective Clothing",
  "Safety boots (steel / composite toe)": "Safety Shoe/Boots",
  "High-visibility vest / clothing": "Protective Clothing",
  "Full body harness (fall arrest)": "Full body Harness/Lifeline",
  "Arc-rated (AR) clothing & arc flash PPE": "Protective Clothing",
  "Flame-resistant (FR) coveralls": "Protective Clothing",
  "Gloves — welding (heat / spark-resistant)": "Protective Clothing",
  "Chemical apron": "Protective Clothing",
  "Welder's spats (foot and ankle covers)": "Protective Clothing (worn over safety boots)",
  "Escape set (emergency escape respirator / hood)": "Breathing Equipment",
  "Personal Flotation Device (PFD) — Type 1": "No printed box — write it in Other Instructions (Section 11)"
};

// Per task card: t = task-type boxes, tc = task types to consider, to = text for
// the "Other" task type, p = precaution/PPE boxes that usually apply, pc = boxes to
// consider when the stated condition is true, h = specific-hazard boxes, hc = hazard
// boxes to consider, o = text for "Other Hazards — State", n = a note.
const _SWP_BASIC = ["Head Protection", "Eye Protection", "Safety Shoe/Boots", "Protective Clothing"];

const _SWP_CEILING = {
  t: ["Height", "Cold Work"],
  p: ["Area Barricaded", "Ladder/Scaffold Inspected", "Isolated", "Breathing Equipment", "Full body Harness/Lifeline",
      "Hearing Protection", "Electrical Tools Grounded", "Hazard Warning signs posted", ..._SWP_BASIC],
  pc: ["Lifting Equipt. Inspected — MEWP, hoist or board lifter in use",
       "Additional Illumination — lighting for the ceiling void",
       "Air Mover/Ventilator — hot or dusty enclosed voids",
       "Ventilated — dust-generating work in a closed room"],
  h: ["Energized Electrical Equipment/Conductors", "Underground/Overhead Hazards"],
  hc: [],
  o: "Possible asbestos or other legacy material, hidden services above the ceiling, falling through the ceiling, falling debris, heat and pests in the void",
  n: "Fire detector and sprinkler isolation, and the HSE suspect-material (asbestos) clearance, have no printed box — write them in Other Instructions (Section 11) and have them approved before work starts."
};

const TASK_PERMIT_MAP = {
  "hot-work": {
    t: ["Hot Work"],
    p: ["Area Barricaded", "Fire Extinguisher", "Water Hose-Fire/Chemicals", "Hot Work Requirements", "Blinded/Screened (Welding)",
        "Electrical Tools Grounded", "Hearing Protection", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Ventilated — welding or cutting fume can build up", "Breathing Equipment — fume exposure can't be controlled by ventilation",
         "Isolated — the work is on or near process lines or other energy sources", "Additional Illumination — dark areas or night work"],
    h: ["Flammable Atmosphere"],
    hc: ["Energized Electrical Equipment/Conductors — welding leads and nearby panels"],
    o: "Sparks and molten metal, fire spreading to combustibles, welding fume, burns",
    n: "The gas testing and fire watch belong under Hot Work Requirements — see the Hot Work task."
  },
  "confined-space": {
    t: ["Confined Space"],
    p: ["Isolated", "Ventilated", "Air Mover/Ventilator", "Additional Illumination", "Area Barricaded", "Electrical Tools Grounded",
        "Breathing Equipment", "Full body Harness/Lifeline", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Drained/Purged — the space has held product", "Depressurized & Vented — connected to pressurised systems", "Washed — residues remain",
         "Blinded/Screened (Welding) — connecting lines must be blanked, or welding is done inside",
         "Hot Work Requirements — hot work is done inside", "Hearing Protection — noisy ventilation or tools"],
    h: ["Flammable Atmosphere", "Toxic Gas Atmosphere"],
    hc: ["Energized Electrical Equipment/Conductors — agitators, pumps and lighting inside"],
    o: "Oxygen deficiency or enrichment, engulfment, heat, difficult rescue",
    n: "Entry normally also needs its own confined-space entry certificate and gas test record, and often a PTW/LOA for isolation — answer Section 5 accordingly."
  },
  "work-at-height": {
    t: ["Height"],
    p: ["Area Barricaded", "Ladder/Scaffold Inspected", "Full body Harness/Lifeline", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Lifting Equipt. Inspected — tools or materials are hoisted", "Additional Illumination — poor light", "Hearing Protection — noisy surroundings"],
    h: ["Underground/Overhead Hazards"],
    hc: ["Energized Electrical Equipment/Conductors — near overhead lines or open panels"],
    o: "Falls from height, falling objects, weather, fragile surfaces"
  },
  "loto": {
    t: ["Other"], to: "Isolation (lock-out / tag-out)",
    p: ["Isolated", "Depressurized & Vented", "Hazard Warning signs posted", "Area Barricaded", ..._SWP_BASIC],
    pc: ["Drained/Purged — the equipment holds product", "Washed — residues remain", "Blinded/Screened (Welding) — lines must be blanked"],
    h: ["Energized Electrical Equipment/Conductors"],
    hc: ["Flammable Atmosphere — stored product could escape on opening", "Toxic Gas Atmosphere — stored product could escape on opening"],
    o: "Stored energy — pressure, spring, gravity, thermal, residual electrical",
    n: "Isolating plant equipment normally runs through the host's own isolation and PTW/LOA system — check Section 5, and don't treat the safe work permit as the isolation."
  },
  "lifting": {
    t: ["Other"], to: "Lifting operation",
    p: ["Lifting Equipt. Inspected", "Area Barricaded", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Additional Illumination — night or poor light", "Hearing Protection — noisy crane or surroundings"],
    h: ["Underground/Overhead Hazards"],
    hc: ["Energized Electrical Equipment/Conductors — overhead power lines near the lift path"],
    o: "Suspended loads, rigging or crane failure, ground bearing capacity, people under the load"
  },
  "excavation": {
    t: ["Excavation"],
    p: ["Excavation Approved", "Area Barricaded", "Hazard Warning signs posted", "Ladder/Scaffold Inspected", ..._SWP_BASIC],
    pc: ["Additional Illumination — night or poor light", "Ventilated — gas or fumes in a deep trench", "Breathing Equipment — gas is detected",
         "Hearing Protection — breakers or nearby plant"],
    h: ["Underground/Overhead Hazards"],
    hc: ["Flammable Atmosphere — near hydrocarbon or gas lines, or in low-lying ground", "Toxic Gas Atmosphere — near ammonia or other toxic lines",
         "Energized Electrical Equipment/Conductors — buried cable"],
    o: "Cave-in, buried services, water ingress, vehicles near the edge",
    n: "'Excavation Approved' means the dig has been approved against drawings and a service scan — see the Excavation task."
  },
  "scaffolding": {
    t: ["Height"],
    p: ["Ladder/Scaffold Inspected", "Area Barricaded", "Hazard Warning signs posted", "Full body Harness/Lifeline", ..._SWP_BASIC],
    pc: ["Lifting Equipt. Inspected — materials are hoisted", "Additional Illumination — poor light"],
    h: ["Underground/Overhead Hazards"],
    hc: ["Energized Electrical Equipment/Conductors — scaffold near live lines or panels"],
    o: "Scaffold collapse, falling materials, dismantling hazards"
  },
  "housekeeping": {
    t: [],
    p: [..._SWP_BASIC],
    pc: ["Area Barricaded — clearing creates a hazard for others", "Hearing Protection — noisy areas"],
    h: [],
    o: "",
    n: "A general housekeeping walk-around isn't normally a permit job on its own. If the clean-up involves height, chemicals or waste removal, use the matching task card."
  },
  "painting": {
    t: ["Cold Work"], tc: ["Height — painting at height"],
    p: ["Ventilated", "Breathing Equipment", "Area Barricaded", "Hazard Warning signs posted", "Fire Extinguisher", ..._SWP_BASIC],
    pc: ["Air Mover/Ventilator — enclosed or poorly ventilated areas", "Ladder/Scaffold Inspected — access equipment is used",
         "Full body Harness/Lifeline — working at height", "Hearing Protection — abrasive blasting or power tools",
         "Hot Work Requirements — hot work happens nearby"],
    h: ["Flammable Atmosphere"],
    hc: ["Toxic Gas Atmosphere — solvent vapour in enclosed areas"],
    o: "Solvent vapour, overspray, dust from surface preparation, old paint that may contain lead"
  },
  "civil-work": {
    t: ["Cold Work"], tc: ["Excavation — digging", "Height — working at height", "Hot Work — cutting or welding rebar or steel"],
    p: ["Area Barricaded", "Hazard Warning signs posted", "Electrical Tools Grounded", "Hearing Protection", ..._SWP_BASIC],
    pc: ["Excavation Approved — digging", "Ladder/Scaffold Inspected — access equipment is used", "Full body Harness/Lifeline — working at height",
         "Lifting Equipt. Inspected — cranes or hoists are used", "Breathing Equipment — cutting concrete or masonry (silica dust)",
         "Fire Extinguisher — hot work is carried out"],
    h: [],
    hc: ["Underground/Overhead Hazards — buried services and overhead lines", "Energized Electrical Equipment/Conductors — hidden cable in walls and slabs"],
    o: "Plant traffic, concrete and silica dust, noise, rebar and formwork"
  },
  "electrical-work": {
    t: ["Cold Work"], tc: ["Live Work — only if the equipment cannot be isolated, and the energised work has been justified and approved"],
    p: ["Isolated", "Electrical Tools Grounded", "Area Barricaded", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Additional Illumination — dark rooms or panels", "Hearing Protection — noisy plant rooms",
         "Full body Harness/Lifeline — working at height", "Fire Extinguisher — hot work or battery and charging areas"],
    h: ["Energized Electrical Equipment/Conductors"],
    hc: ["Flammable Atmosphere — classified areas, where tools and equipment must suit the zone"],
    o: "Arc flash and arc blast, stored energy, back-feed from other sources",
    n: "Isolation of plant electrical equipment normally follows the host's isolation and PTW/LOA system and lock/tag procedure — check Section 5. For arc flash PPE there's no printed box: write the required arc rating in Other Instructions (Section 11)."
  },
  "vehicle-operations": {
    t: ["Other"], to: "Vehicle movement / journey",
    p: ["Hazard Warning signs posted", "Area Barricaded", "Head Protection", "Safety Shoe/Boots", "Protective Clothing"],
    pc: ["Lifting Equipt. Inspected — forklift, crane or loader operations", "Additional Illumination — night work"],
    h: ["Underground/Overhead Hazards"],
    hc: [],
    o: "Pedestrian–vehicle interaction, reversing, speed limits, ignition and static hazards near classified areas",
    n: "Vehicle access into process areas usually needs separate permission under the host's own rules."
  },
  "lone-working": {
    t: ["Other"], to: "Lone working",
    p: [..._SWP_BASIC],
    pc: [],
    h: [],
    o: "No immediate help, undetected injury or medical event",
    n: "The permit records that Operations have been informed (Section 10) — make sure someone knows where you are and when you will check in. Many sites restrict lone work on permit jobs."
  },
  "marine-jetty": {
    t: ["Other"], to: "Marine / jetty operations",
    p: ["Area Barricaded", "Hazard Warning signs posted", "Additional Illumination", ..._SWP_BASIC],
    pc: ["Lifting Equipt. Inspected — cranes, hoists and mooring gear", "Full body Harness/Lifeline — working over an edge or at height",
         "Fire Extinguisher — product transfer or hot work", "Water Hose-Fire/Chemicals — product transfer"],
    h: [],
    hc: ["Flammable Atmosphere — hydrocarbon or methanol transfer", "Toxic Gas Atmosphere — ammonia transfer or vapour"],
    o: "Drowning, mooring loads, product transfer, slips on wet surfaces",
    n: "A flotation device (PFD) has no printed box — write it in Other Instructions (Section 11)."
  },
  "waste-handling": {
    t: ["Cold Work"],
    p: ["Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Area Barricaded — the waste area needs to be kept clear", "Breathing Equipment — dust, fumes or vapour",
         "Ventilated — enclosed waste storage", "Washed — contaminated containers or equipment"],
    h: [],
    hc: ["Toxic Gas Atmosphere — mixed or incompatible chemical waste", "Flammable Atmosphere — solvent or fuel waste"],
    o: "Cuts and puncture wounds, chemical contact, incompatible wastes, manual handling"
  },
  "contractor-induction": {
    t: [], p: ["Head Protection", "Safety Shoe/Boots", "Protective Clothing"], pc: [], h: [], hc: [], o: "",
    n: "This task is Section 9 (Contractor orientation) and Section 10 (Operations informed) of the permit — it isn't a work type. Complete the orientation before the permit is signed, and record who gave it and when."
  },
  "hand-power-tools": {
    t: ["Cold Work"], tc: ["Hot Work — the tool makes sparks or heat (grinding, cutting); check the Tools tab classification"],
    p: ["Electrical Tools Grounded", "Hearing Protection", "Area Barricaded", ..._SWP_BASIC],
    pc: ["Breathing Equipment — dust from cutting or sanding", "Fire Extinguisher — sparks are produced",
         "Hot Work Requirements — sparks are produced", "Ventilated — enclosed areas"],
    h: [],
    hc: ["Flammable Atmosphere — classified areas, where only suitable (for example non-sparking) tools may be used",
         "Energized Electrical Equipment/Conductors — drilling or cutting into hidden cable"],
    o: "Flying debris, kickback, noise and vibration"
  },
  "plumbing": {
    t: ["Cold Work"], tc: ["Hot Work — brazing, soldering or welding pipe"],
    p: ["Isolated", "Depressurized & Vented", "Area Barricaded", ..._SWP_BASIC],
    pc: ["Drained/Purged — lines that held fluid", "Washed — lines that held chemicals", "Hot Work Requirements — brazing, soldering or welding",
         "Excavation Approved — buried pipework", "Ladder/Scaffold Inspected — pipework at height", "Ventilated — enclosed or poorly ventilated areas",
         "Breathing Equipment — solvent-based pipe cement or primer in enclosed areas"],
    h: [],
    hc: ["Toxic Gas Atmosphere — sewer and drain gases", "Flammable Atmosphere — fuel gas or solvent cement vapours"],
    o: "Stored pressure and hot water, sewer gas, cuts and manual handling"
  },
  "ceiling-grid": {
    ..._SWP_CEILING,
    tc: ["Hot Work — only if cutting hangers, angle or steel with a grinder or torch"],
    pc: [..._SWP_CEILING.pc, "Hot Work Requirements — only if cutting hangers or steel", "Fire Extinguisher — hot work is carried out"]
  },
  "ceiling-board": { ..._SWP_CEILING },
  "ceiling-panel": {
    ..._SWP_CEILING,
    tc: ["Hot Work — only if unavoidable; keep PVC and adhesives clear"],
    pc: [..._SWP_CEILING.pc, "Fire Extinguisher — adhesives, solvents or hot work in use"],
    hc: ["Flammable Atmosphere — solvent-based adhesives in a closed room or void"]
  },
  "chemical-handling": {
    t: ["Cold Work"],
    p: ["Area Barricaded", "Water Hose-Fire/Chemicals", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Breathing Equipment — respirator or gas detector required, or an escape set kept at hand", "Hearing Protection — noisy plant areas",
         "Ventilated — enclosed or poorly ventilated areas", "Isolated — opening chemical lines, pumps or vessels",
         "Drained/Purged — opening lines or vessels that held product", "Depressurized & Vented — opening pressurised lines",
         "Washed — equipment that held chemicals", "Fire Extinguisher — flammable chemicals",
         "Hot Work Requirements — hot work near flammable chemicals", "Additional Illumination — dark areas"],
    h: ["Toxic Gas Atmosphere"],
    hc: ["Flammable Atmosphere — flammable or volatile chemicals"],
    o: "Skin and eye burns, inhalation, fire, incompatible mixing, releases to drain",
    n: "Opening chemical lines or vessels normally runs through the host's isolation and PTW/LOA system — check Section 5. An escape set: tick Breathing Equipment and note in Other Instructions (Section 11) where escape sets are kept."
  },
  "man-lift": {
    t: ["Height"],
    p: ["Area Barricaded", "Full body Harness/Lifeline", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Lifting Equipt. Inspected — many sites treat a man-lift as lifting equipment; confirm with the issuer",
         "Additional Illumination — poor light", "Hearing Protection — noisy plant areas"],
    h: ["Underground/Overhead Hazards"],
    hc: ["Energized Electrical Equipment/Conductors — overhead lines and nearby live equipment"],
    o: "Tip-over, ejection from the platform, crushing against structure"
  },
  "compressed-air": {
    t: ["Cold Work"],
    p: ["Hearing Protection", "Hazard Warning signs posted", ..._SWP_BASIC],
    pc: ["Isolated — working on air lines, receivers or compressors", "Depressurized & Vented — before disconnecting or opening any air line",
         "Area Barricaded — blow-down or cleaning where debris could reach others"],
    h: [],
    hc: [],
    o: "Air injection injury, hose whip, flying debris, noise, stored pressure"
  },
  "nitrogen-purging": {
    t: ["Other"], to: "Purging / inerting",
    p: ["Isolated", "Drained/Purged", "Depressurized & Vented", "Area Barricaded", "Hazard Warning signs posted", "Hearing Protection", ..._SWP_BASIC],
    pc: ["Ventilated — areas where nitrogen can collect", "Breathing Equipment — entry into or near a nitrogen-rich atmosphere is unavoidable",
         "Additional Illumination — dark areas", "Blinded/Screened (Welding) — lines must be blanked",
         "Full body Harness/Lifeline — retrieval line where vessel geometry requires it"],
    h: [],
    hc: ["Flammable Atmosphere — the system being purged"],
    o: "Oxygen-deficient atmosphere (nitrogen asphyxiation) — invisible and odourless, with no warning",
    n: "Process purging and inerting normally run under the host's own PTW/LOA system — check Section 5. Nitrogen is an asphyxiant, not a toxic gas, so describe it under Other Hazards rather than ticking Toxic Gas."
  }
};

// Section-by-section guide to a CSWP-style permit, shown in the Permit-to-Work reference tab.
const CSWP_REFERENCE = [
  {
    title: "Who, what, where and how many (permit header and Sections 1–4)",
    section: "Sections 1–4",
    text: "The permit names the location, permit number and service contract number, the contractor it is issued to, the task type, the reference numbers (certificate, job safety briefing and work order), the number of people on the job, and the area, equipment and description of the work. Describe the work in plain words and name the equipment or area exactly. The head-count should match who is actually working — use the Crew Sign-Off tab to see who has signed on."
  },
  {
    title: "Task type boxes (Section 2)",
    section: "Section 2",
    text: "The printed task types are Hot Work, Cold Work, Live Work, Height, Excavation, Confined Space and Other. Each Fieldwise task card suggests which to tick in its PPE & Permits tab. More than one can apply (a roof job is Height and Cold Work; cutting steel on a scaffold is Hot Work and Height). Use the Tools tab to check whether a tool makes the job Hot Work."
  },
  {
    title: "Is a separate Permit to Work / LOA needed? (Section 5)",
    section: "Section 5",
    text: "The permit asks whether a Permit to Work or LOA is required, and for its number and date. The safe work permit covers the work activity; isolating plant equipment, entering vessels and similar jobs normally run through the host's own PTW/LOA system — a separate document and a separate set of rules. Confirm with the permit issuer how your host splits the two, and don't treat one as covering the other."
  },
  {
    title: "Safety precautions and PPE boxes (Section 6)",
    section: "Section 6",
    text: "Section 6 is a list of boxes covering isolation and process precautions (Drained/Purged, Depressurized & Vented, Washed, Isolated, Blinded/Screened), site precautions (Area Barricaded, Lifting Equipt. Inspected, Fire Extinguisher, Water Hose, Additional Illumination, Air Mover/Ventilator, Hot Work Requirements, Ventilated, Electrical Tools Grounded, Excavation Approved, Ladder/Scaffold Inspected, Hazard Warning signs posted) and the seven PPE boxes. The seven PPE boxes are broad — Eye, Head, Hearing, Protective Clothing, Safety Shoe/Boots, Breathing Equipment and Full body Harness/Lifeline — so gloves, coveralls, hi-vis and arc-rated clothing all go under Protective Clothing. Write the specific item (glove type, arc rating, respirator filter) in Other Instructions."
  },
  {
    title: "Specific hazards (Section 7) — a blank box is not an all-clear",
    section: "Section 7",
    text: "The printed hazard boxes are Flammable Atmosphere, Toxic Gas Atmosphere, Underground/Overhead Hazards, Radioactive Sources, Energized Electrical Equipment/Conductors, and Other Hazards — State. Whatever the JHA found goes here. The permit says in its own wording that failing to identify a hazard in Section 7 doesn't mean it doesn't exist, and doesn't relieve the person receiving the permit of the duty to stay alert for it. Use the hazards in your task card's JHA tab as the checklist."
  },
  {
    title: "Emergency contact, orientation and operations informed (Sections 8–10)",
    section: "Sections 8–10",
    text: "The permit carries the emergency contact name and number (Section 8), who gave the contractor orientation and when (Section 9), and whether Operations has been informed (Section 10). Read the Section 8 contact out in the toolbox talk so every crew member knows who to call. The Contractor Induction task card is the orientation behind Section 9 — it should happen before the permit is signed."
  },
  {
    title: "Other Instructions (Section 11) — where the specifics go",
    section: "Section 11",
    text: "Anything no printed box covers goes in Other Instructions: fire detector or sprinkler isolation, asbestos (suspect-material) clearance, arc flash rating, flotation devices, access restrictions, special limits. If your task card's notes say a control has 'no printed box', this is where it is written."
  },
  {
    title: "Competent person and authorised person declarations (Sections 12–13)",
    section: "Sections 12–13",
    text: "A competent person declares they inspected the work area, identified the hazards and that the precautions listed have been taken (name, signature, time and date). An authorised person then declares they are authorised to issue the permit, that the hazards and precautions noted have been taken, and that the area or equipment has been made safe as far as reasonably practicable. The JHA in Fieldwise is the working record behind that inspection — it does not replace the signatures on the permit."
  },
  {
    title: "Revalidation and the Job Safety Briefing",
    section: "Revalidation",
    text: "The permit has a revalidation table (date, time, inspected by, signature, revalidated by, signature) and notes that a Job Safety Briefing must be done by the contractor before the permit is revalidated. The Toolbox Talk and Crew Sign-Off tabs are the briefing and its attendance record — run them before each revalidation, not just on day one, and save a field record each time. How often the permit must be revalidated is set by the host's own rules."
  },
  {
    title: "Receipt — accepting the permit (Section 15)",
    section: "Section 15",
    text: "The person accepting the permit signs a receipt confirming they accept responsibility for the work described on it and will comply with the requirements. Read the printed wording on your own copy before signing, and don't carry out work on any equipment other than what the permit names."
  }
];


// ============================================================
// SITE PPE MATRIX (example)
// Transcribed from the wall board of a Point Lisas power-generation
// plant ("Wear the gear"): PPE columns against task rows. This is ONE
// site's standard — the host site's own matrix and permit always govern.
// Row names are kept as printed. The "Escape sets" column has no row
// marked on the board photographed.
// ============================================================
const SITE_PPE_MATRIX = {
  columns: ["Safety boots", "Safety glasses", "Safety goggles", "Face shield", "Ear muffs / plugs", "Respirator", "Hard hat",
            "Safety gloves", "Welding gloves", "Chemical gloves", "FR clothing", "Chemical apron", "Welder's spats",
            "Full body harness", "Escape sets", "Arc flash suit with hood"],
  groups: [
    { name: "Electrical & Instrumentation Tasks", rows: [
      { task: "Working at height", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing", "Full body harness"] },
      { task: "Working around live electrical equipment", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing"] },
      { task: "Working with chemicals", ppe: ["Safety boots", "Safety goggles", "Face shield", "Ear muffs / plugs", "Respirator", "Hard hat", "Safety gloves", "Chemical gloves", "FR clothing", "Chemical apron"] },
      { task: "Working on a man-lift", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing", "Full body harness"] }
    ] },
    { name: "Mechanical Tasks", rows: [
      { task: "Hot work", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Respirator", "Hard hat", "Welding gloves", "FR clothing", "Welder's spats"] },
      { task: "Working in a confined space", ppe: ["Safety boots", "Safety glasses", "Hard hat", "Safety gloves", "FR clothing", "Full body harness"] },
      { task: "Lifting, moving and carrying loads", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing"] },
      { task: "Working with pressurized air", ppe: ["Safety boots", "Safety goggles", "Face shield", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing"] },
      { task: "Using a grinder", ppe: ["Safety boots", "Safety glasses", "Face shield", "Ear muffs / plugs", "Respirator", "Hard hat", "Safety gloves", "FR clothing"] }
    ] },
    { name: "Operations Tasks", rows: [
      { task: "Monitoring of plant", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing"] },
      { task: "Removing HV Switch Gear from Cubicle", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing", "Arc flash suit with hood"] }
    ] },
    { name: "Quality / Assurance", rows: [
      { task: "Using infrared equipment in the HV switch yard", ppe: ["Safety boots", "Safety glasses", "Ear muffs / plugs", "Hard hat", "Safety gloves", "FR clothing"] }
    ] }
  ]
};

// Which matrix rows relate to which Fieldwise task card (closest matches).
const SITE_MATRIX_LINKS = {
  "hot-work": ["Hot work"],
  "confined-space": ["Working in a confined space"],
  "lifting": ["Lifting, moving and carrying loads"],
  "hand-power-tools": ["Using a grinder"],
  "work-at-height": ["Working at height"],
  "electrical-work": ["Working around live electrical equipment", "Removing HV Switch Gear from Cubicle", "Using infrared equipment in the HV switch yard"],
  "housekeeping": ["Monitoring of plant"],
  "chemical-handling": ["Working with chemicals"],
  "man-lift": ["Working on a man-lift"],
  "compressed-air": ["Working with pressurized air"]
};
