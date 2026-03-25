/**
 * Service-specific content for pSEO pages.
 * Each service has unique descriptions, equipment lists, inspection details,
 * regulation specifics, and FAQs — ensuring no two service types share body copy.
 *
 * All regulatory references are based on LOLER 1998, PUWER 1998, and HSE guidance.
 * No fabricated statistics or claims.
 */

export const serviceContent = {
  "lifting-equipment": {
    intro: "Lifting equipment covers a broad category of machinery used to raise, lower, and suspend loads across industrial, commercial, and public sector environments. From chain hoists and pulley blocks to powered lifting tables and dock levellers, these items require regular thorough examination to remain legally compliant and safe for continued use.",
    whatWeInspect: [
      "Chain hoists and lever hoists",
      "Electric and pneumatic hoists",
      "Lifting beams and spreader bars",
      "Eyebolts and lifting points",
      "Shackles, slings, and lifting accessories",
      "Pallet trucks and stackers",
      "Scissor lifts and lifting tables",
      "Dock levellers",
      "Runway beams and monorails"
    ],
    typicalSectors: [
      "Warehousing and distribution",
      "Manufacturing",
      "Construction",
      "Retail (loading bays)",
      "Food processing",
      "Automotive workshops"
    ],
    inspectionDetails: "A thorough examination of general lifting equipment assesses the structural integrity of load-bearing components, condition of chains, ropes and slings, operation of braking and locking mechanisms, security of anchor points and fixings, and verification that safe working load markings are legible and accurate.",
    commonDefects: [
      "Chain link elongation and wear beyond tolerance",
      "Damaged or deformed hooks missing safety catches",
      "Worn or frayed wire rope slings",
      "Cracked welds on fabricated lifting beams",
      "Illegible or missing SWL markings"
    ],
    regulationNotes: "Under LOLER Regulation 9, lifting equipment must receive a thorough examination by a competent person at intervals not exceeding 12 months, or 6 months for equipment used to lift persons. Lifting accessories such as slings, shackles, and eyebolts must be examined at least every 6 months regardless of use.",
    inspectionFrequency: "Every 6 months for lifting accessories; every 12 months for lifting equipment (6 months if lifting persons)",
    faq: [
      {
        q: "What counts as lifting equipment under LOLER?",
        a: "LOLER defines lifting equipment as any work equipment used for lifting or lowering loads, including the load itself. This covers cranes, hoists, lifts, slings, chains, eyebolts, and even a simple rope and pulley arrangement."
      },
      {
        q: "What is the difference between a thorough examination and a service?",
        a: "A thorough examination is a statutory safety inspection carried out by an independent competent person. It is not the same as routine maintenance or servicing. The examiner looks specifically for defects that could lead to dangerous failure, whereas a service focuses on operational performance."
      },
      {
        q: "Do we need to keep records of thorough examinations?",
        a: "Yes. LOLER requires that a written report is produced after every thorough examination. These reports must be kept available for inspection by the HSE. Reports for lifting equipment must be retained until the next examination; reports for lifting accessories must be kept for at least two years."
      }
    ]
  },

  "crane-inspections": {
    intro: "Cranes are among the most safety-critical items of lifting equipment found on construction sites, in ports, and across heavy industry. The forces involved in crane operations mean that any undetected defect can have catastrophic consequences. Thorough examinations verify that every structural, mechanical, and safety system is functioning within safe parameters.",
    whatWeInspect: [
      "Tower cranes",
      "Mobile cranes",
      "Crawler cranes",
      "Overhead travelling cranes",
      "Gantry cranes",
      "Jib cranes (wall-mounted and free-standing)",
      "Loader cranes (lorry-mounted)",
      "Mini cranes and spider cranes"
    ],
    typicalSectors: [
      "Construction and civil engineering",
      "Steel erection",
      "Port and dockside operations",
      "Heavy manufacturing",
      "Infrastructure and utilities",
      "Demolition"
    ],
    inspectionDetails: "Crane thorough examinations assess structural integrity of the boom, jib, and mast sections. Wire rope condition is checked for broken strands, corrosion, and distortion. Hook blocks, safety catches, and load indicators are tested. Slew rings, bearings, and outrigger systems are inspected for wear. Limit switches, overload protection, and emergency stop systems are verified as operational.",
    commonDefects: [
      "Wire rope deterioration — broken strands, birdcaging, or corrosion",
      "Hydraulic hose wear, chafing, and oil leaks",
      "Structural cracking at boom weld joints",
      "Limit switch or anti-two-block device malfunction",
      "Outrigger pad cracking or deformation",
      "Slew ring bearing wear beyond tolerance"
    ],
    regulationNotes: "Under LOLER Regulation 9, cranes must be thoroughly examined at least every 12 months. Cranes used for lifting persons must be examined every 6 months. After installation, erection, or any assembly that could affect safety, a crane must be thoroughly examined before being put into service. The competent person must also assess the adequacy of the crane's installation including ground conditions and proximity hazards.",
    inspectionFrequency: "Every 12 months (every 6 months if used for lifting persons); also after each erection or assembly",
    faq: [
      {
        q: "How often do cranes need a thorough examination?",
        a: "Cranes require thorough examination at least every 12 months under LOLER. If the crane is used to lift people, the interval reduces to 6 months. A thorough examination is also required after every installation, erection, or assembly at a new location."
      },
      {
        q: "Can a crane be used if the examination certificate has expired?",
        a: "No. Operating a crane beyond its thorough examination due date is a breach of LOLER and a criminal offence. The crane must be taken out of service immediately until a valid report of thorough examination has been issued by a competent person."
      },
      {
        q: "Who is responsible for arranging crane inspections?",
        a: "The duty holder — typically the employer or the person who controls the use of the crane — is legally responsible for ensuring thorough examinations are carried out on time. This responsibility cannot be delegated to the crane operator."
      }
    ]
  },

  "mobile-plant-inspection": {
    intro: "Mobile plant encompasses a wide range of powered machinery used on construction sites, in quarries, and across industrial operations. Telehandlers, excavators, and forklift trucks are among the most commonly used — and most frequently involved in workplace incidents. Thorough examinations ensure these machines meet the safety standards required under both LOLER and PUWER.",
    whatWeInspect: [
      "Telehandlers (telescopic handlers)",
      "Forklift trucks (counterbalance and reach)",
      "Excavators with lifting duties",
      "Rough terrain forklifts",
      "Skid steer loaders with lifting attachments",
      "Lorry-mounted cranes (hiab/grab)",
      "Vacuum lifters and manipulators",
      "Container handlers"
    ],
    typicalSectors: [
      "Construction",
      "Agriculture",
      "Warehousing and logistics",
      "Waste management and recycling",
      "Quarrying and aggregates",
      "Timber and building merchants"
    ],
    inspectionDetails: "Mobile plant thorough examinations focus on the structural integrity of booms, chassis, and lifting frames. Hydraulic systems are checked for leaks, hose condition, and ram seal integrity. Safety devices including load moment indicators, overload cutouts, and tilt protection are tested. Operator controls, braking systems, and stability mechanisms are verified. Attachments such as forks, buckets, and lifting jibs are assessed for wear and secure fixing.",
    commonDefects: [
      "Hydraulic ram seal failure and oil leaks",
      "Boom section wear pins and bushes beyond tolerance",
      "Fork blade cracking or heel wear on forklifts",
      "Tilt sensor or load moment indicator malfunction",
      "Structural damage to ROPS/FOPS safety cabs",
      "Worn or incorrectly adjusted parking brakes"
    ],
    regulationNotes: "Mobile plant used for lifting operations falls under LOLER and requires thorough examination at prescribed intervals. Where the machine is also classified as work equipment under PUWER, both sets of regulations apply simultaneously. The HSE emphasises that an excavator used for any lifting duty — even occasional — becomes lifting equipment and must be examined accordingly.",
    inspectionFrequency: "Every 12 months for the lifting function; every 6 months for lifting accessories attached to the plant",
    faq: [
      {
        q: "Does a forklift truck need a thorough examination?",
        a: "Yes. Forklift trucks are lifting equipment under LOLER and require thorough examination at least every 12 months. The forks themselves are lifting accessories and should be examined at least every 6 months."
      },
      {
        q: "Is an excavator classed as lifting equipment?",
        a: "An excavator used for any lifting operation — including lifting materials, pipes, or any other load — becomes lifting equipment under LOLER and must be thoroughly examined. This applies even if lifting is not the machine's primary function."
      },
      {
        q: "What about telehandlers used on farms?",
        a: "Agricultural telehandlers are subject to the same LOLER requirements as those used on construction sites. The duty holder — the farmer or farm business — is legally responsible for ensuring thorough examinations are carried out on time."
      }
    ]
  },

  "work-at-height-equipment-inspections": {
    intro: "Work at height remains the single largest cause of fatal workplace injuries in the UK. MEWPs (mobile elevating work platforms), scaffold hoists, and powered access equipment must be thoroughly examined at regular intervals to protect the workers who rely on them. A thorough examination is not optional — it is a legal requirement wherever equipment is used to lift people to height.",
    whatWeInspect: [
      "Scissor lifts (electric and diesel)",
      "Cherry pickers and boom lifts",
      "Truck-mounted access platforms",
      "Mast climbers",
      "Scaffold hoists and material hoists",
      "Building maintenance units (BMUs)",
      "Suspended access cradles",
      "Ladder hoists"
    ],
    typicalSectors: [
      "Construction and fit-out",
      "Facilities management",
      "Window cleaning and building maintenance",
      "Telecommunications mast work",
      "Event and exhibition setup",
      "Film and broadcast production"
    ],
    inspectionDetails: "Access equipment thorough examinations prioritise platform stability and guardrail security, since personnel are directly exposed to fall risk. Hydraulic and electrical systems controlling boom extension and platform levelling are tested. Emergency lowering mechanisms must function independently of the main control system. Outrigger interlock systems and chassis levelling indicators are verified. Structural integrity of the boom, mast, and platform decking is assessed for fatigue, cracking, and corrosion.",
    commonDefects: [
      "Emergency descent system failure or slow response",
      "Platform guardrail looseness or gate latch failure",
      "Boom section hydraulic cylinder leaks",
      "Outrigger interlock bypass or malfunction",
      "Control system wiring damage or water ingress",
      "Chassis structural cracking on older machines"
    ],
    regulationNotes: "Because MEWPs and access platforms are used to lift persons, LOLER Regulation 9 requires thorough examination at intervals not exceeding 6 months — twice as frequent as equipment used only for lifting loads. The Work at Height Regulations 2005 impose additional duties on employers to plan, organise, and supervise work at height using suitable equipment.",
    inspectionFrequency: "Every 6 months (mandatory for all equipment lifting persons)",
    faq: [
      {
        q: "Why is the inspection interval 6 months instead of 12?",
        a: "LOLER requires equipment used for lifting persons to be thoroughly examined every 6 months, rather than the standard 12 months for load-only lifting equipment. This reflects the higher risk to human life if the equipment were to fail."
      },
      {
        q: "Do hired MEWPs need a thorough examination?",
        a: "Yes. The duty holder — typically the company hiring the MEWP — is responsible for ensuring the equipment has a valid thorough examination certificate before it is used. Reputable hire companies will provide this, but the duty holder must verify it."
      },
      {
        q: "What about scaffold hoists used temporarily on site?",
        a: "Scaffold hoists and material hoists used on construction sites require thorough examination before first use and then at least every 6 months if lifting persons, or 12 months if lifting loads only. Temporary use does not exempt the equipment from inspection."
      }
    ]
  },

  "garage-equipment-inspections": {
    intro: "Vehicle lifts, wheel-free lifts, and workshop jacks are essential equipment in automotive garages, MOT testing stations, and fleet maintenance facilities. These items are subject to LOLER because they lift vehicles — and by extension, any persons working beneath them. Regular thorough examination protects technicians from the catastrophic risk of a vehicle falling from a lift.",
    whatWeInspect: [
      "Two-post vehicle lifts",
      "Four-post vehicle lifts and alignment lifts",
      "Scissor vehicle lifts (in-ground and above-ground)",
      "Mobile column lifts",
      "Wheel-free lifts and ATL lifts",
      "Motorcycle lifts",
      "Jacking beams",
      "Transmission jacks and engine hoists",
      "Pit jacks and trolley jacks (commercial)"
    ],
    typicalSectors: [
      "Independent garages and MOT centres",
      "Franchise car dealerships",
      "Fleet maintenance workshops",
      "Commercial vehicle (HGV/PSV) workshops",
      "Tyre fitting centres",
      "Emergency service vehicle workshops"
    ],
    inspectionDetails: "Vehicle lift thorough examinations focus on the structural integrity of columns, platforms, and locking mechanisms. Hydraulic seals, pistons, and flow control valves are assessed for leaks and correct operation. Mechanical safety locks must engage automatically and hold the full rated load. Electrical control systems, limit switches, and emergency stop functions are tested. Foundation fixings and floor anchor bolts are checked for integrity — a critical point often overlooked in routine servicing.",
    commonDefects: [
      "Mechanical safety lock wear or failure to engage",
      "Hydraulic seal degradation causing slow descent",
      "Cracked or worn lift arm pads and adapters",
      "Floor anchor bolt corrosion or loosening",
      "Control cable damage or incorrect limit switch setting",
      "Uneven lifting caused by hydraulic synchronisation failure"
    ],
    regulationNotes: "Vehicle lifts fall under LOLER because they are used to raise and support loads. The HSE considers the vehicle as the load, and any person working beneath a raised vehicle is at direct risk. Thorough examination at 12-month intervals is the minimum requirement. The HSE's INDG339 guidance specifically addresses vehicle lift safety in garage environments.",
    inspectionFrequency: "Every 12 months (minimum); the HSE recommends more frequent checks for heavily used lifts",
    faq: [
      {
        q: "Do vehicle lifts in garages need LOLER inspections?",
        a: "Yes. Vehicle lifts are lifting equipment under LOLER. The vehicle is the load, and any person beneath a raised vehicle is at direct risk. The HSE requires thorough examination at least every 12 months by an independent competent person."
      },
      {
        q: "Is a daily check the same as a thorough examination?",
        a: "No. Daily pre-use checks by the operator are important but are not a substitute for a thorough examination. The thorough examination is a detailed, independent statutory inspection that looks for defects not visible during routine checks — such as internal hydraulic wear, structural fatigue, and foundation integrity."
      },
      {
        q: "What about mobile column lifts used for HGVs?",
        a: "Mobile column lifts are lifting equipment under LOLER and require thorough examination at the same intervals. Each column in a set must be individually examined, including the synchronisation system that ensures all columns lift evenly."
      }
    ]
  },

  "passenger-and-goods-lifts-inspections": {
    intro: "Passenger lifts, goods lifts, and service lifts are permanent installations found in offices, residential buildings, hospitals, shopping centres, and industrial premises. They carry people and goods multiple times daily, often for decades. Thorough examination verifies that safety-critical systems — including door interlocks, overspeed governors, and emergency braking — are functioning correctly to prevent entrapment, free-fall, or crush injuries.",
    whatWeInspect: [
      "Passenger lifts (traction and hydraulic)",
      "Goods lifts and service lifts",
      "Platform lifts (disabled access)",
      "Dumbwaiters and food service lifts",
      "Stairlifts in commercial premises",
      "Home lifts (where used in a work context)",
      "Inclined platform lifts",
      "Vertical platform lifts"
    ],
    typicalSectors: [
      "Commercial offices and business centres",
      "Residential developments and housing associations",
      "NHS hospitals and healthcare facilities",
      "Hotels and hospitality",
      "Retail and shopping centres",
      "Schools, colleges, and universities",
      "Care homes and assisted living"
    ],
    inspectionDetails: "Lift thorough examinations cover the car structure and platform, guide rails and fixings, suspension ropes or hydraulic rams, door interlocks and landing door mechanisms, overspeed governor and safety gear, buffer assemblies, and the control system. The competent person checks that all safety devices operate within their design parameters and that no deterioration has occurred that could lead to failure.",
    commonDefects: [
      "Door interlock wear or maladjustment allowing doors to open between floors",
      "Suspension rope wear, corrosion, or uneven tension",
      "Hydraulic cylinder seal leaks causing creep",
      "Guide shoe or roller wear affecting ride quality and safety",
      "Overspeed governor requiring recalibration",
      "Pit equipment damage from water ingress"
    ],
    regulationNotes: "Passenger lifts must be thoroughly examined at intervals not exceeding 6 months under LOLER, because they lift persons. Goods-only lifts require examination every 12 months. The Lifts Regulations 2016 (implementing EU Directive 2014/33/EU) apply additional requirements to new lift installations. Building owners and managing agents are typically the duty holders responsible for arranging thorough examinations.",
    inspectionFrequency: "Every 6 months for passenger lifts; every 12 months for goods-only lifts",
    faq: [
      {
        q: "How often does a passenger lift need inspecting?",
        a: "Passenger lifts must be thoroughly examined at least every 6 months under LOLER, because they are used to carry people. This applies to all passenger lifts regardless of age, type, or usage level."
      },
      {
        q: "Who is responsible for lift inspections in a building?",
        a: "The duty holder is responsible — this is typically the building owner, landlord, managing agent, or facilities management company. In multi-tenanted buildings, the responsibility usually falls on whoever has control of the common parts including the lift."
      },
      {
        q: "What happens if a defect is found during examination?",
        a: "If the competent person identifies an immediate danger, they must notify the duty holder immediately and may issue a defect notification to the HSE under LOLER Regulation 10. The lift must be taken out of service until the defect is rectified. Less critical defects are noted in the report with a timeframe for remedial action."
      }
    ]
  },

  "firefighting-and-evacuation-lift-inspections": {
    intro: "Firefighting lifts and evacuation lifts are specialist installations designed to operate during building emergencies. Firefighting lifts provide fire crews with controlled access to upper floors, while evacuation lifts enable the safe removal of mobility-impaired persons. These lifts must meet additional design and performance standards beyond those of standard passenger lifts, and their inspection requirements reflect this critical safety role.",
    whatWeInspect: [
      "Firefighting lifts (BS EN 81-72 compliant)",
      "Evacuation lifts (BS EN 81-76 compliant)",
      "Fire-rated lift landing doors",
      "Secondary power supply and switchover systems",
      "Fireman's control panels and communication systems",
      "Smoke ventilation shafts serving lift wells",
      "Water drainage systems in lift pits"
    ],
    typicalSectors: [
      "High-rise residential buildings",
      "Commercial office towers",
      "Hospitals and healthcare facilities",
      "Hotels above a certain height",
      "Shopping centres and public buildings",
      "Student accommodation"
    ],
    inspectionDetails: "Firefighting and evacuation lift thorough examinations include all standard lift checks plus additional verification of fire-mode operation, fireman's switch and recall functions, communication systems between the car and fire command station, secondary power supply switchover under load, fire-rated landing door integrity, and water management systems in the pit. The competent person must confirm that the lift can operate safely in fire conditions as designed.",
    commonDefects: [
      "Fireman's switch or recall function failure",
      "Secondary power supply not switching correctly under load",
      "Communication system faults between car and fire command",
      "Fire-rated landing door seal deterioration",
      "Pit drainage pump failure or water accumulation",
      "Smoke detector integration faults preventing fire mode activation"
    ],
    regulationNotes: "Firefighting lifts must comply with BS EN 81-72 and evacuation lifts with BS EN 81-76. In addition to the standard LOLER requirements (thorough examination every 6 months as they carry persons), Building Regulations Approved Document B and BS 9999 set requirements for when firefighting lifts must be installed. The Regulatory Reform (Fire Safety) Order 2005 also places duties on the responsible person to maintain firefighting and evacuation facilities.",
    inspectionFrequency: "Every 6 months (lifts carry persons); additional fire system checks may be required by the fire risk assessment",
    faq: [
      {
        q: "Is a firefighting lift inspection different from a normal lift inspection?",
        a: "Yes. In addition to all standard passenger lift checks, a firefighting lift examination verifies fire-mode operation, the fireman's recall switch, communication systems, secondary power supply, fire-rated door integrity, and water drainage. These additional checks reflect the lift's critical role during building emergencies."
      },
      {
        q: "Who decides if a building needs a firefighting lift?",
        a: "Building Regulations Approved Document B and BS 9999 set the criteria. Generally, buildings over 18 metres in height or with a floor more than 7.5 metres below ground level require a firefighting lift. The requirement is determined at the design stage and enforced through building control."
      },
      {
        q: "Can a standard passenger lift be used as a firefighting lift?",
        a: "No. A firefighting lift must be specifically designed and installed to BS EN 81-72 standards, including fire-rated construction, independent power supply, water protection, and fireman's control features. A standard passenger lift does not meet these requirements and must not be used by fire crews."
      }
    ]
  }
};
