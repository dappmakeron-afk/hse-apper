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
    permits: ["Hot Work Permit if cutting/grinding masonry with sparks present", "Excavation Permit if groundworks involve digging"],
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
          "Control pour rate and sequence per the formwork design — don't overload one section"
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
      }
    ],
    toolboxTalk: [
      "Confirm today's manual handling loads and whether mechanical aids are available and being used",
      "Confirm formwork/shoring has been inspected before today's pour, if pouring",
      "Confirm wet-cutting or dust extraction is set up before any masonry cutting starts",
      "Confirm the banksman/spotter for any vehicle movement on site today",
      "Remind the crew: wash off wet concrete contact immediately, don't wait",
      "Walk the material laydown area — confirm stacking is stable and secure"
    ],
    ppe: ["Hard hat", "Safety boots (steel toe)", "Waterproof gloves for concrete work", "Safety glasses", "Respiratory protection for dry cutting", "High-visibility vest"],
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
          "Use insulated, voltage-rated tools for any work near live parts"
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
    ppe: ["Insulated/arc-rated gloves matched to system voltage", "Arc-rated flash suit or coveralls per incident energy", "Face shield / arc-rated hood", "Insulated hand tools", "Voltage-rated tester (proven before and after use)"],
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
      }
    ],
    toolboxTalk: [
      "Check today's weather and road/flood advisories before departure",
      "Confirm the planned route and any known hazards along it — flooding, road works, high-risk junctions",
      "Confirm the driver has had adequate rest before a long trip",
      "Confirm the pre-trip vehicle walk-around has been done",
      "Agree the no-phone-while-driving rule for this trip, out loud, before leaving",
      "Confirm who to contact, and how, if the journey is delayed or the driver doesn't arrive as expected"
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
          "Static bonding/grounding between vessel and shore connections before transfer begins",
          "Emergency shutdown procedure and location confirmed by all parties before starting transfer"
        ],
        why: "Loading/unloading combines chemical-transfer hazards with the added complexity of two separate organizations — vessel and shore — needing to agree on the same procedure in real time."
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

// ============================================================
// PPE LIBRARY — reference guide, not task-specific.
// "act" fields cite the OSH Act Ch. 88:08 provision that backs
// the requirement, where one applies directly.
// ============================================================
const PPE_LIBRARY = [
  {
    name: "Hard hat / safety helmet",
    description: "Rigid shell helmet protecting the head from falling objects, impact, and limited electrical contact.",
    whenToUse: "Any area with overhead work, moving machinery, or where required by site signage — standard baseline PPE on most plant sites.",
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
    whenToUse: "Grinding, chipping, battery work, and any task combining eye and facial exposure."
  },
  {
    name: "Welding helmet (shaded / auto-darkening)",
    description: "Helmet with a filter lens matched to the welding process, protecting eyes and face from arc radiation, sparks, and heat.",
    whenToUse: "Any arc welding, plasma cutting, or brazing task.",
    act: "Treated as a named exception to general eye-protection minimums in OSHA 10/30-Hour PPE modules, because arc radiation isn't covered by standard eye protection."
  },
  {
    name: "Ear plugs",
    description: "Disposable or reusable inserts reducing noise exposure, worn inside the ear canal.",
    whenToUse: "Moderate sustained noise — compressors, pumps, general workshop background noise."
  },
  {
    name: "Ear muffs",
    description: "Cupped over-ear protection, generally higher attenuation than plugs, and easier to visually confirm compliance.",
    whenToUse: "High-noise tools — grinders, jackhammers, chop saws — or combined with plugs in very high-noise areas.",
    act: "OSH Act s.34 — duty on the owner/occupier/employer to prevent hearing impairment and ensure protective equipment is worn at appropriate times."
  },
  {
    name: "Respirator — half-face (cartridge)",
    description: "Covers nose and mouth, filters dust, mist, or specific vapours depending on the cartridge fitted.",
    whenToUse: "Painting, dry cutting, dust-generating work — cartridge type matched to the specific product's SDS, not assumed.",
    act: "OSH Act s.32 — respiratory protection of an approved standard shall be provided and maintained where necessary."
  },
  {
    name: "Respirator — full-face / supplied-air",
    description: "Covers the entire face or supplies breathing air from a separate source, used where cartridge filtration isn't sufficient.",
    whenToUse: "Confined space with poor or unknown atmosphere, oxygen-deficient environments, high-hazard chemical exposure, abrasive blasting."
  },
  {
    name: "Gloves — general work",
    description: "Basic hand protection against abrasion, cuts, and dirt for everyday tasks.",
    whenToUse: "General handling, housekeeping, light mechanical work."
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
    name: "Safety boots (steel / composite toe)",
    description: "Reinforced-toe footwear protecting against impact and compression, often with puncture-resistant soles.",
    whenToUse: "Virtually all plant/site work — standard baseline PPE."
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
    name: "Flame-resistant (FR) coveralls",
    description: "Fabric engineered to self-extinguish and resist ignition, worn as a barrier against flash fire and arc flash.",
    whenToUse: "Hot work, electrical work with arc flash potential, and process areas with flash fire risk."
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
    classificationNote: "No ignition source under normal use — cold work.",
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
    section: "Sections 15–21 (Part III)",
    title: "Right to Refuse Unsafe Work",
    text: "An employee may refuse to do particular work where they have sufficient reason to believe there is serious/imminent danger, a dangerous machine or plant, a dangerous physical condition of the workplace, or a contravention of the Act likely to endanger themselves or another employee. The refusal must be reported immediately to the employer and safety committee (or the Chief Inspector, where there's no committee). An inspector must investigate and decide within 24 hours of the refusal. The employee is deemed to be at work and paid throughout."
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
    immediateResponse: "Move upwind and away immediately. Remove contaminated clothing. Flush skin/eyes with water for at least 15 minutes if contact occurred. Seek medical attention even for what seems like brief exposure — respiratory effects can develop after the fact.",
    incompatible: "Strong acids, halogens, oxidizers — do not mix or store together.",
    note: "One of the primary products handled on the Point Lisas estate. Its own strong odour is a warning most people notice well before a harmful concentration — never ignore it as 'just the smell of the plant.'"
  },
  {
    name: "Methanol",
    hazardClass: "Flammable liquid, toxic by ingestion/inhalation/skin absorption",
    exposureSigns: "Headache, dizziness, nausea; at higher exposure, visual disturbance is a distinctive warning sign specific to methanol and should be treated as a medical emergency, not just discomfort.",
    immediateResponse: "Remove from exposure/fresh air immediately. Remove contaminated clothing, flush skin with water. Any visual disturbance following exposure needs urgent medical attention — this isn't a 'wait and see' symptom.",
    incompatible: "Strong oxidizers.",
    note: "Also produced at Point Lisas. Vapour is flammable and heavier than air — can travel and pool in low areas, which matters for excavation or confined space work nearby."
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
