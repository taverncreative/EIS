/**
 * County-specific content for pSEO pages.
 * Each county has unique economic profile, industrial context, and sector information.
 *
 * All references to locations, industrial estates, and infrastructure are factually accurate.
 * Where specific details cannot be verified, general descriptions are used.
 */

export const countyContent = {
  kent: {
    economicProfile: "Kent's economy is shaped by its position as the UK's principal gateway to continental Europe. The Port of Dover handles a significant share of the country's roll-on/roll-off freight traffic, and the Channel Tunnel terminal at Folkestone connects the county directly to France. This strategic location drives a substantial logistics, distribution, and warehousing sector, concentrated along the M20 and M2 corridors.",
    industrialAreas: [
      "Crossways Business Park, Dartford",
      "Eurolink Industrial Estate, Sittingbourne",
      "Larkfield Trading Estate, Aylesford",
      "Chatham Maritime and Gillingham Business Park",
      "Discovery Park, Sandwich",
      "Orbital Park, Ashford"
    ],
    keyInfrastructure: [
      "Port of Dover",
      "Channel Tunnel / Eurotunnel terminal, Folkestone",
      "M20 and M2 motorway corridors",
      "Thames Gateway regeneration zone",
      "High Speed 1 (HS1) rail link",
      "Medway ports at Sheerness and Thamesport"
    ],
    sectorMix: "Construction and logistics dominate demand for lifting equipment inspections across Kent. The Thames Gateway development programme continues to drive building activity in the north of the county, while cross-Channel freight operations sustain a large fleet of material handling equipment along the M20 corridor. Manufacturing, food processing, and agricultural operations across the county's rural areas also generate steady inspection demand.",
    regionalNotes: "Kent businesses often require flexible scheduling to accommodate the county's spread-out geography, from the Thames Estuary in the north to the Romney Marsh in the south. Our local Engineer Surveyors operate across the entire county, reducing travel time and enabling responsive service.",
    countyDemographics: "Kent is one of the most populous counties in England, with a diverse economic base spanning agriculture, manufacturing, logistics, construction, and the service sector. The county's proximity to London also means many Kent businesses serve the capital's supply chain.",
    localFaq: {
      q: "Do you cover all of Kent including rural areas?",
      a: "Yes. Our Engineer Surveyors are based across Kent and cover the entire county from the Thames Estuary towns in the north through to the Romney Marsh in the south. We regularly attend sites in rural locations, farms, and small workshops as well as major industrial estates and construction sites."
    },

    serviceHub: {
      "lifting-equipment": {
        overview: "Kent's logistics, manufacturing, and construction sectors drive consistent demand for lifting equipment inspections across the county. The M20 and M2 corridors — connecting the Channel ports to London — are lined with distribution centres and warehouses where hoists, dock levellers, and pallet trucks operate continuously. Further inland, manufacturing operations in Medway, Sittingbourne, and Ashford use overhead cranes, runway beams, and lifting accessories that require regular thorough examination under LOLER.",
        keyEquipment: ["Chain hoists and lever hoists", "Dock levellers and loading bay equipment", "Pallet trucks and powered stackers", "Scissor lifts and lifting tables", "Runway beams and monorails", "Lifting slings, shackles, and eyebolts"],
        topSectors: ["Logistics and distribution (M20/M2 corridors, Port of Dover)", "Manufacturing (Medway, Sittingbourne, Ashford)", "Construction (Thames Gateway regeneration)", "Food processing (rural Kent)", "Retail (loading bays and goods handling)"],
        inspectionNote: "Kent's spread-out geography — from the Thames Estuary to the Channel coast — means inspection scheduling must balance site density in northern Kent with the more dispersed locations across the Weald and East Kent. Our surveyors are based locally across the county to minimise travel delays."
      },
      "crane-inspections": {
        overview: "Crane activity in Kent is concentrated around two major drivers: the Thames Gateway regeneration programme in the north, and port and infrastructure operations across the county. Tower cranes and mobile cranes support large-scale construction at Ebbsfleet, Dartford, and the Medway towns, while overhead and gantry cranes operate in Kent's engineering workshops and port facilities. Every crane used for lifting operations must be thoroughly examined after each erection and at least every 12 months.",
        keyEquipment: ["Tower cranes on major construction sites", "Mobile cranes (all-terrain and rough terrain)", "Overhead travelling cranes in workshops", "Loader cranes (lorry-mounted hiab type)", "Gantry cranes at port and industrial facilities", "Mini cranes and spider cranes"],
        topSectors: ["Construction and civil engineering (Thames Gateway, HS1 corridor)", "Port operations (Dover, Sheerness, Thamesport)", "Heavy engineering and fabrication (Medway)", "Infrastructure and utilities", "Steel erection and structural work"],
        inspectionNote: "Crane thorough examinations in Kent often need to be coordinated around construction programme schedules, port vessel timetables, and site access restrictions. Our engineers hold the necessary site induction certifications for major Kent construction sites and port facilities."
      },
      "mobile-plant-inspection": {
        overview: "Mobile plant — telehandlers, forklifts, excavators with lifting duties — is in constant use across Kent's construction sites, farms, warehouses, and industrial estates. The county's construction boom along the Thames Gateway and ongoing residential development across Kent towns sustain high demand for telehandler and excavator inspections. Kent's agricultural sector adds further volume, with farm telehandlers and loader cranes subject to the same LOLER requirements as construction equipment.",
        keyEquipment: ["Telehandlers (telescopic handlers)", "Counterbalance and reach forklifts", "Excavators with lifting duties", "Rough terrain forklifts", "Lorry-mounted cranes (hiab/grab)", "Skid steer loaders with lifting attachments"],
        topSectors: ["Construction (Thames Gateway, Ashford, Maidstone)", "Agriculture (rural Kent, Weald)", "Warehousing and logistics (M20/M2 corridor)", "Waste management and recycling", "Quarrying and aggregates (Medway Valley)", "Timber and building merchants"],
        inspectionNote: "Kent farm telehandlers require the same LOLER examination as construction-site machines. The duty holder — the farmer or farm business — is legally responsible. Our surveyors regularly attend agricultural sites across rural Kent as well as industrial estates and construction sites."
      },
      "work-at-height-equipment-inspections": {
        overview: "Work at height is the leading cause of fatal workplace injuries in the UK. Kent's construction and building maintenance sectors rely heavily on MEWPs, scaffold hoists, and powered access equipment — all of which must be thoroughly examined every 6 months because they lift persons. From cherry pickers maintaining commercial properties in Maidstone to mast climbers on residential tower cladding in Dartford, powered access equipment is in daily use across the county.",
        keyEquipment: ["Scissor lifts (electric and diesel)", "Cherry pickers and boom lifts", "Truck-mounted access platforms", "Mast climbers", "Scaffold hoists and material hoists", "Building maintenance units (BMUs)"],
        topSectors: ["Construction and fit-out", "Facilities management and building maintenance", "Window cleaning and external cleaning", "Telecommunications mast work", "Event setup and exhibition work", "Film and broadcast production"],
        inspectionNote: "Because all access equipment lifts persons, the mandatory inspection interval is 6 months — twice as frequent as load-only lifting equipment. Kent businesses must plan inspection schedules carefully to avoid equipment downtime."
      },
      "garage-equipment-inspections": {
        overview: "Kent's position on major road routes — the M20, M2, M25, A2, and A249 — supports a high volume of vehicle traffic and a dense network of garages, MOT stations, and fleet workshops. Vehicle lifts in these premises are lifting equipment under LOLER because the vehicle is the load and anyone working beneath it is at direct risk. From independent garages in Dartford to HGV workshops in Medway, vehicle lifts require thorough examination at least every 12 months.",
        keyEquipment: ["Two-post vehicle lifts", "Four-post lifts and alignment lifts", "Scissor vehicle lifts (in-ground and above-ground)", "Mobile column lifts for HGVs", "Pit jacks and trolley jacks (commercial)", "Transmission jacks and engine hoists"],
        topSectors: ["Independent garages and MOT centres", "Franchise car dealerships", "HGV and PSV fleet workshops", "Emergency service vehicle maintenance", "Tyre fitting centres", "Agricultural machinery workshops"],
        inspectionNote: "The HSE's INDG339 guidance specifically addresses vehicle lift safety. Kent's high vehicle volumes and concentration of garages along major routes mean we regularly schedule multiple garage inspections in a single visit area to reduce costs."
      },
      "passenger-and-goods-lifts-inspections": {
        overview: "Kent's growing stock of commercial, residential, and public buildings means passenger and goods lifts are increasingly common across the county — from office buildings in Maidstone to residential towers in Dartford and retail centres in Ashford. Passenger lifts require 6-monthly thorough examination under LOLER because they carry people. Goods-only lifts require 12-monthly examination. Building owners, managing agents, and facilities managers are the duty holders responsible for arranging these examinations.",
        keyEquipment: ["Passenger lifts (traction and hydraulic)", "Goods lifts and service lifts", "Platform lifts (disabled access, DDA compliance)", "Dumbwaiters and food service lifts", "Stairlifts in commercial premises", "Home lifts (in work contexts)"],
        topSectors: ["Commercial offices and business centres", "Residential developments and housing associations", "NHS hospitals and healthcare facilities (Medway, Maidstone)", "Hotels and hospitality", "Retail and shopping centres (Bluewater, Ashford)", "Care homes and assisted living", "Schools, colleges, and universities"],
        inspectionNote: "Many of Kent's older buildings contain lifts that are reaching ages where thorough examination becomes increasingly critical. Our surveyors identify deterioration patterns in ageing hydraulic and traction lift systems that routine maintenance may miss."
      },
      "firefighting-and-evacuation-lift-inspections": {
        overview: "Buildings over 18 metres in height are generally required to have firefighting lifts compliant with BS EN 81-72, and evacuation lifts compliant with BS EN 81-76 may be required where mobility-impaired persons need safe egress during emergencies. Kent's growing number of high-rise residential towers — particularly in Dartford, Medway, and Ashford — means this specialist inspection requirement is expanding. These lifts need examination beyond standard lift checks, covering fire-mode operation, fireman's recall, secondary power supply, and water drainage systems.",
        keyEquipment: ["Firefighting lifts (BS EN 81-72 compliant)", "Evacuation lifts (BS EN 81-76 compliant)", "Fire-rated lift landing doors", "Secondary power supply and switchover systems", "Fireman's control panels and communication systems", "Water drainage systems in lift pits"],
        topSectors: ["High-rise residential developments (Dartford, Medway, Ashford)", "Commercial office towers", "Hospitals and healthcare facilities", "Hotels above the height threshold", "Student accommodation blocks", "Shopping centres and public buildings"],
        inspectionNote: "Firefighting lift inspections require the competent person to verify fire-mode operation — this is a specialist check that goes beyond standard lift examination. Our engineers are experienced in the additional BS EN 81-72 and BS EN 81-76 requirements."
      }
    }
  },

  london: {
    economicProfile: "London's economy is the largest of any city in the UK and one of the largest in Europe. The city's built environment is in a constant state of renewal, with major construction projects, infrastructure upgrades, and building refurbishment programmes generating continuous demand for lifting equipment across every borough. The density of commercial, residential, and public sector buildings also creates sustained demand for lift and access equipment maintenance.",
    industrialAreas: [
      "Park Royal industrial estate, NW London",
      "Meridian Water regeneration, Enfield",
      "London Riverside, Barking and Dagenham",
      "Croydon town centre regeneration zone",
      "Stratford and the Olympic Park area",
      "Thames Gateway London, including Woolwich and Thamesmead"
    ],
    keyInfrastructure: [
      "Crossrail / Elizabeth Line",
      "Thames Tideway Tunnel",
      "Bank Station capacity upgrade",
      "Old Oak Common and HS2 terminus",
      "Battersea Power Station development",
      "Nine Elms regeneration, Vauxhall"
    ],
    sectorMix: "London's inspection demand spans virtually every service category. High-rise construction drives crane and access equipment needs. The city's vast stock of commercial and residential buildings sustains continuous demand for passenger lift examinations. Logistics operations across outer London boroughs require mobile plant and general lifting equipment inspections. Hospital trusts, local authorities, and educational institutions represent a significant public sector client base.",
    regionalNotes: "Operating in London presents unique logistical considerations including congestion charge zones, restricted delivery hours, and limited site access. Our Engineer Surveyors are experienced in navigating these constraints and can schedule inspections during early mornings, evenings, or weekends to minimise disruption to building occupants.",
    countyDemographics: "Greater London is home to over 9 million people and hundreds of thousands of commercial premises, from single-unit workshops to major corporate headquarters. The sheer density of built infrastructure means lifting equipment is present in almost every commercial building, car park, and construction site across the capital.",
    localFaq: {
      q: "Can you work around London's access restrictions and congestion charges?",
      a: "Yes. Our London-based Engineer Surveyors are experienced with congestion charge zones, ULEZ requirements, restricted delivery hours, and limited site access. We routinely schedule inspections during early mornings, evenings, or weekends to minimise disruption to building occupants and avoid peak traffic."
    }
  },

  essex: {
    economicProfile: "Essex has a diverse economic base combining major logistics operations along the Thames Estuary and M25 corridor with significant manufacturing, automotive, and construction activity. The county's proximity to London and its own substantial population base sustain a broad range of industrial and commercial operations requiring regular lifting equipment inspections.",
    industrialAreas: [
      "London Gateway logistics park, Stanford-le-Hope",
      "Lakeside Basin and West Thurrock industrial area",
      "Basildon industrial estates",
      "Chelmsford Business Park and Springfield industrial area",
      "Southend Airport Business Park",
      "Colchester Northern Gateway"
    ],
    keyInfrastructure: [
      "Port of Tilbury",
      "London Gateway deep-water port",
      "M25 and A13 corridor",
      "Dartford Crossing / A282",
      "London Southend Airport",
      "Freeport East (Harwich)"
    ],
    sectorMix: "Logistics and distribution are the dominant sectors for lifting equipment demand in Essex, driven by the Thames Estuary ports and the M25/A13 corridor. The county also has a significant manufacturing base, particularly in Basildon and Chelmsford, along with a strong construction sector serving both residential and commercial developments. The automotive trade is well-represented across the county, generating demand for garage equipment inspections.",
    regionalNotes: "Essex's mix of dense urban areas in the south and more rural communities in the north means inspection schedules need to account for varying site types — from major port facilities and distribution centres to small independent workshops and farm operations.",
    countyDemographics: "Essex is one of the most economically active counties in the East of England, with a population exceeding 1.8 million. Its southern border along the Thames Estuary is among the most industrialised areas in South East England, while the north of the county retains a more agricultural and market town character.",
    localFaq: {
      q: "Do you cover the Essex ports and logistics parks?",
      a: "Yes. We regularly attend sites at the Port of Tilbury, London Gateway, Lakeside Basin, and logistics parks along the A13 and M25 corridors. Our Engineer Surveyors are familiar with port security requirements and can coordinate inspections around vessel schedules and shift patterns."
    }
  }
};
