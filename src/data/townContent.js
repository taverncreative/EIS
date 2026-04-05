/**
 * Town-specific content for pSEO pages.
 * Each town has unique local context, nearby areas, key sectors, and notable locations.
 *
 * All references are factually accurate. Where specific details cannot be verified,
 * general descriptions based on the town's known character are used.
 * No invented business parks, landmarks, or statistics.
 */

export const townContent = {
  // === KENT TOWNS ===

  dartford: {
    localContext: "Dartford sits at the southern end of the Dartford Crossing, making it one of the most strategically connected towns in Kent for logistics and distribution. The town's industrial base has evolved from its paper-making and engineering heritage into a mix of modern warehousing, construction services, and commercial development, particularly around the Crossways Business Park and Bluewater retail area.",
    nearbyAreas: ["Crayford", "Swanley", "Wilmington", "Stone", "Greenhithe", "Bluewater"],
    keySectors: ["Logistics and distribution", "Construction", "Retail and commercial property", "Warehousing", "Engineering services"],
    localLandmarks: ["Crossways Business Park", "The Bridge development", "Dartford town centre regeneration"],

    typicalEquipment: {
      "lifting-equipment": ["Dock levellers and loading bay equipment at Crossways Business Park warehouses", "Pallet trucks and powered stackers in distribution centres near the Dartford Crossing", "Chain hoists and lever hoists in engineering workshops along the A206 corridor"],
      "crane-inspections": ["Mobile cranes supporting Thames Gateway residential tower construction", "Overhead travelling cranes in Dartford's remaining engineering and fabrication workshops", "Loader cranes (hiab-type) servicing logistics and construction supply yards"],
      "mobile-plant-inspection": ["Telehandlers on Thames Gateway housebuilding sites", "Counterbalance forklifts operating across Crossways Business Park distribution units", "Rough terrain forklifts at building material merchants in the Dartford area"],
      "work-at-height-equipment-inspections": ["Scissor lifts used in warehouse fit-out and racking installation", "Cherry pickers supporting building maintenance along the Bluewater retail corridor", "Truck-mounted access platforms used for signage and cladding work on commercial developments"],
      "garage-equipment-inspections": ["Two-post and four-post vehicle lifts at independent garages along the A2 corridor", "HGV column lifts at fleet workshops serving Dartford Crossing freight operators", "Wheel-free lifts at MOT testing stations across the town"],
      "passenger-and-goods-lifts-inspections": ["Passenger lifts in The Bridge residential development towers", "Goods lifts and service lifts in Bluewater retail complex", "Platform lifts providing disabled access in Dartford town centre regeneration buildings"],
      "firefighting-and-evacuation-lift-inspections": ["Firefighting lifts in The Bridge high-rise residential towers", "Evacuation lifts in new-build commercial properties at Crossways", "Fire-rated lift installations in multi-storey car parks near Bluewater"]
    },

    industryContext: {
      "lifting-equipment": "Dartford's position at the Dartford Crossing makes it a logistics chokepoint for the South East — warehouses and distribution centres along Crossways Business Park run continuous goods handling operations where dock levellers, hoists, and pallet trucks are in daily use. Regular thorough examination keeps these operations compliant without downtime.",
      "crane-inspections": "The Thames Gateway regeneration programme has brought sustained crane activity to Dartford. Residential tower blocks and large-scale commercial developments require mobile crane support across multiple phases, with each crane needing thorough examination after every erection or relocation on site.",
      "mobile-plant-inspection": "Construction and logistics are Dartford's two dominant plant-using sectors. Telehandlers and excavators with lifting duties operate across Thames Gateway building sites, while forklifts are the backbone of the Crossways Business Park warehouse operations — both requiring regular LOLER-compliant thorough examinations.",
      "work-at-height-equipment-inspections": "Dartford's ongoing regeneration creates constant demand for powered access equipment. Scissor lifts and boom lifts are used for warehouse fit-outs, retail signage installation at Bluewater, and building maintenance across the town's expanding commercial property stock.",
      "garage-equipment-inspections": "Dartford sits on major freight and commuter routes feeding the Dartford Crossing and M25. This generates high vehicle volumes and supports a concentration of garages, MOT stations, and HGV workshops where vehicle lifts, jacking beams, and transmission jacks require regular inspection.",
      "passenger-and-goods-lifts-inspections": "New residential towers at The Bridge development, the Bluewater retail complex, and ongoing town centre regeneration have significantly increased Dartford's lift stock. Building managers and developers must ensure passenger and goods lifts receive 6-monthly and 12-monthly thorough examinations respectively.",
      "firefighting-and-evacuation-lift-inspections": "High-rise residential construction at The Bridge and surrounding developments means Dartford now has a growing number of buildings requiring firefighting and evacuation lifts compliant with BS EN 81-72 and BS EN 81-76. These specialist installations need separate thorough examination covering fire-mode operation, secondary power supply, and communication systems."
    },

    coverageDetail: "We attend sites across Dartford, Crayford, Swanley, Wilmington, Stone, and Greenhithe. Our Engineer Surveyors are familiar with access requirements at Crossways Business Park, Bluewater service areas, The Bridge development, and industrial units along the A206 and A296 corridors."
  },

  maidstone: {
    localContext: "As Kent's county town, Maidstone is a commercial and administrative hub serving central Kent. The town benefits from strong road connections via the M20 motorway and A229, supporting a concentration of distribution, manufacturing, and public sector operations. The surrounding area includes significant food processing and agricultural supply businesses.",
    nearbyAreas: ["Aylesford", "Bearsted", "Tovil", "Barming", "Loose", "Ditton"],
    keySectors: ["Public sector and local government", "Warehousing and distribution", "Food processing", "Construction", "Healthcare"],
    localLandmarks: ["Maidstone East industrial area", "20/20 Business Park, Aylesford", "Eclipse Business Park"]
  },

  ashford: {
    localContext: "Ashford has experienced significant growth driven by the High Speed 1 rail link providing fast connections to London and continental Europe. The town is a major commercial centre for the eastern part of Kent, with substantial construction activity, a growing logistics sector, and a diverse manufacturing base. Ashford International Station anchors ongoing regeneration and development in the town centre.",
    nearbyAreas: ["Willesborough", "Kennington", "Wye", "Charing", "Hamstreet", "Great Chart"],
    keySectors: ["Construction and housebuilding", "Logistics", "Manufacturing", "Retail", "Agriculture and food"],
    localLandmarks: ["Orbital Park", "Eureka Business Park", "Ashford Commercial Quarter"]
  },

  canterbury: {
    localContext: "Canterbury is known primarily as a historic cathedral city and major tourist destination, but it also serves as an important commercial centre for east Kent. The city's economy includes significant healthcare provision through Canterbury hospitals, a large higher education sector, and service industries supporting both residents and visitors. Construction and facilities management are steady sources of lifting equipment demand.",
    nearbyAreas: ["Herne Bay", "Whitstable", "Sturry", "Bridge", "Chartham", "Littlebourne"],
    keySectors: ["Healthcare (Canterbury hospitals)", "Higher education (university campuses)", "Tourism and hospitality", "Facilities management", "Construction"],
    localLandmarks: ["Canterbury Business Park", "University of Kent campus", "Canterbury Christ Church University"]
  },

  sevenoaks: {
    localContext: "Sevenoaks is an affluent commuter town in west Kent with a mixed local economy that includes corporate offices, construction and property development, and professional services. The town's proximity to the M25 and M26 motorways provides good connectivity to London and the wider South East. Residential and commercial construction is a consistent driver of lifting equipment demand in the area.",
    nearbyAreas: ["Westerham", "Otford", "Seal", "Kemsing", "Dunton Green", "Riverhead"],
    keySectors: ["Construction and property development", "Corporate offices", "Facilities management", "Residential developments", "Education"],
    localLandmarks: ["Sevenoaks Business Centre", "Bat and Ball Enterprise Centre"]
  },

  "tunbridge-wells": {
    localContext: "Royal Tunbridge Wells is a substantial commercial centre serving the southern part of Kent and the High Weald area. The town has a diverse economy including professional services, healthcare, retail, and a notable independent business sector. Construction and property refurbishment in the town centre and surrounding residential areas generate consistent demand for lifting and access equipment inspections.",
    nearbyAreas: ["Tonbridge", "Southborough", "Paddock Wood", "Crowborough", "Pembury", "Langton Green"],
    keySectors: ["Construction and refurbishment", "Healthcare", "Professional services", "Retail and hospitality", "Education"],
    localLandmarks: ["North Farm industrial estate", "Tunbridge Wells town centre regeneration"]
  },

  medway: {
    localContext: "The Medway towns — Rochester, Chatham, Gillingham, Strood, and Rainham — form one of the largest urban areas in Kent. The area has a strong industrial heritage rooted in the former Chatham Dockyard and retains a substantial engineering, manufacturing, and construction sector. Rochester Airport industrial estate and the Medway City Estate are significant centres of commercial activity.",
    nearbyAreas: ["Rochester", "Chatham", "Gillingham", "Strood", "Rainham", "Hoo Peninsula"],
    keySectors: ["Engineering and manufacturing", "Construction", "Logistics", "Maritime services", "Public sector"],
    localLandmarks: ["Medway City Estate", "Gillingham Business Park", "Rochester Airport industrial area"]
  },

  thanet: {
    localContext: "Thanet encompasses the coastal towns of Margate, Ramsgate, and Broadstairs on Kent's north-east tip. The area's economy includes port operations at Ramsgate, a growing creative and tourism sector, and local manufacturing. The former Manston Airport site is subject to redevelopment proposals that could significantly increase industrial activity in the area.",
    nearbyAreas: ["Margate", "Ramsgate", "Broadstairs", "Westgate-on-Sea", "Birchington", "Minster"],
    keySectors: ["Port operations (Ramsgate)", "Tourism and hospitality", "Manufacturing", "Construction", "Renewable energy"],
    localLandmarks: ["Ramsgate Port", "Manston Business Park", "Thanet Reach Business Park"]
  },

  // === LONDON TOWNS ===

  croydon: {
    localContext: "Croydon is one of London's largest commercial centres outside the City and West End, with a significant concentration of offices, retail, and residential development. The town centre has been subject to major regeneration and construction activity. The Purley Way industrial corridor and surrounding commercial areas host a wide range of businesses requiring lifting equipment and lift inspections.",
    nearbyAreas: ["Purley", "Thornton Heath", "South Norwood", "Shirley", "Coulsdon", "Addington"],
    keySectors: ["Commercial construction", "Office and retail property management", "Residential development", "Healthcare", "Education"],
    localLandmarks: ["Purley Way industrial corridor", "Croydon town centre regeneration zone", "Ruskin Square development"],

    typicalEquipment: {
      "lifting-equipment": ["Goods hoists in Purley Way retail and warehouse units", "Chain hoists and runway beams in light industrial workshops", "Powered pallet trucks in commercial building loading bays"],
      "crane-inspections": ["Tower cranes on Croydon town centre residential tower sites", "Mobile cranes supporting structural steel erection in commercial developments", "Mini cranes used for glazing installation on high-rise refurbishments"],
      "mobile-plant-inspection": ["Telehandlers on regeneration construction sites in the town centre", "Counterbalance forklifts at Purley Way distribution and retail warehouses", "Excavators with lifting duties on demolition and groundwork sites"],
      "work-at-height-equipment-inspections": ["Building maintenance units (BMUs) on Croydon's commercial office towers", "Scissor lifts used for shop fit-outs along Purley Way retail corridor", "Mast climbers on residential tower cladding and facade works"],
      "garage-equipment-inspections": ["Two-post vehicle lifts at independent garages along Purley Way", "Four-post alignment lifts at franchise dealerships in the Croydon area", "Mobile column lifts at bus and commercial fleet workshops"],
      "passenger-and-goods-lifts-inspections": ["Passenger lifts in Croydon's high-rise office towers (some 20+ storeys)", "Goods and service lifts in Whitgift and Centrale shopping centres", "Platform lifts in healthcare and education facilities across the borough"],
      "firefighting-and-evacuation-lift-inspections": ["Firefighting lifts in Croydon's high-rise residential towers including Ruskin Square", "Evacuation lifts in healthcare facilities and care homes", "Fire-rated lift installations in newly built student accommodation blocks"]
    },

    industryContext: {
      "lifting-equipment": "Croydon's Purley Way industrial corridor and the town's commercial office stock create two distinct sources of lifting equipment demand — warehouse and distribution operations requiring hoists and dock equipment, and office buildings needing goods lift and loading bay maintenance.",
      "crane-inspections": "Croydon has been one of London's most active construction zones for the past decade. Residential tower developments in the town centre and ongoing commercial regeneration have made tower cranes and mobile cranes a persistent feature of the skyline, each requiring thorough examination after every erection.",
      "mobile-plant-inspection": "Active construction sites across Croydon's regeneration zone rely on telehandlers and excavators with lifting duties. The Purley Way corridor adds further demand with forklifts operating in retail warehouses and distribution units — all classified as lifting equipment under LOLER.",
      "work-at-height-equipment-inspections": "Croydon's high-rise commercial and residential buildings create year-round demand for powered access equipment. Building maintenance units on office towers, scissor lifts for internal fit-outs, and boom lifts for external facade work all require 6-monthly thorough examination as they lift persons.",
      "garage-equipment-inspections": "South London's vehicle population supports a dense network of garages, MOT centres, and fleet workshops across the Croydon borough. Vehicle lifts at these premises are lifting equipment under LOLER — the vehicle is the load, and anyone working beneath it is at risk if the lift fails.",
      "passenger-and-goods-lifts-inspections": "Croydon has one of the highest concentrations of passenger lifts in outer London — commercial office towers, shopping centres, residential blocks, and public buildings all contain lifts requiring 6-monthly thorough examination. Many of Croydon's older buildings also have goods lifts and service lifts on 12-month examination cycles.",
      "firefighting-and-evacuation-lift-inspections": "Croydon's growing stock of high-rise residential towers means an increasing number of buildings now require BS EN 81-72 firefighting lifts and BS EN 81-76 evacuation lifts. These specialist installations need additional checks beyond standard lift examinations, including fire-mode recall, secondary power switchover, and communication system testing."
    },

    coverageDetail: "We cover the entire London Borough of Croydon including Purley, Thornton Heath, South Norwood, Shirley, Coulsdon, and Addington. Our engineers regularly attend sites in the town centre regeneration zone, along the Purley Way corridor, and at healthcare and education facilities across the borough."
  },

  enfield: {
    localContext: "Enfield is a north London borough with a strong industrial and logistics heritage. The Brimsdown industrial area along the Lee Valley is one of the largest concentrations of industrial premises in London, and the Meridian Water regeneration programme is one of the capital's most significant development schemes. These factors combine to create substantial and ongoing demand for lifting equipment inspections.",
    nearbyAreas: ["Edmonton", "Southgate", "Palmers Green", "Ponders End", "Brimsdown", "Winchmore Hill"],
    keySectors: ["Manufacturing and light industry", "Logistics and distribution", "Construction (Meridian Water)", "Food processing", "Waste management"],
    localLandmarks: ["Brimsdown industrial estate", "Meridian Water development site", "Edmonton EcoPark"]
  },

  watford: {
    localContext: "Watford sits at the junction of the M1 and M25 motorways, making it one of the best-connected commercial centres in the London fringe area. The town serves as a major employment hub for south-west Hertfordshire and the north-west London corridor. Significant office, retail, and residential developments drive consistent construction and facilities management activity.",
    nearbyAreas: ["Bushey", "Rickmansworth", "Abbots Langley", "Garston", "Croxley Green", "Leavesden"],
    keySectors: ["Office and commercial property", "Film and media production (Leavesden Studios area)", "Construction", "Retail", "Healthcare"],
    localLandmarks: ["Clarendon Road business district", "Watford Business Park", "Leavesden studios vicinity"]
  },

  ilford: {
    localContext: "Ilford is a major commercial centre in the London Borough of Redbridge, with a dense mix of retail, commercial, and residential properties. The town's location on the Elizabeth Line (Crossrail) has stimulated new development and construction activity. Nearby industrial areas along the A13 corridor in Barking and Dagenham add to the local demand for lifting equipment services.",
    nearbyAreas: ["Barking", "Seven Kings", "Gants Hill", "Chadwell Heath", "Goodmayes", "Barkingside"],
    keySectors: ["Construction and residential development", "Retail and commercial property", "Healthcare (King George Hospital)", "Logistics (nearby A13 corridor)", "Education"],
    localLandmarks: ["Ilford town centre regeneration", "Exchange development"]
  },

  romford: {
    localContext: "Romford is a major town centre in the London Borough of Havering, with a strong retail, commercial, and residential base. The town serves as a service centre for a wide catchment area across east London and south-west Essex. Ongoing residential development and the regeneration of the town centre and surrounding industrial areas sustain demand for construction and lifting equipment services.",
    nearbyAreas: ["Hornchurch", "Upminster", "Harold Hill", "Collier Row", "Gidea Park", "Rainham"],
    keySectors: ["Construction and housebuilding", "Retail and commercial property", "Healthcare (Queen's Hospital)", "Logistics", "Automotive trade"],
    localLandmarks: ["Romford town centre regeneration", "Beam Park development, Rainham"]
  },

  hounslow: {
    localContext: "Hounslow's proximity to Heathrow Airport makes it one of the most economically active boroughs in west London. The area is a major hub for logistics, freight handling, and airport-related services. The Great West Corridor along the A4 hosts significant commercial and industrial premises, while ongoing residential and infrastructure development adds to construction sector demand.",
    nearbyAreas: ["Feltham", "Isleworth", "Brentford", "Heston", "Cranford", "Bedfont"],
    keySectors: ["Airport logistics and freight", "Warehousing and distribution", "Construction", "Commercial property management", "Transport infrastructure"],
    localLandmarks: ["Great West Corridor", "Heathrow logistics zone", "Brentford regeneration area"]
  },

  // === ESSEX TOWNS ===

  chelmsford: {
    localContext: "Chelmsford is the county town of Essex and an important commercial, retail, and administrative centre. The city has seen significant residential and commercial development in recent years, with new housing estates, retail parks, and office developments driving construction activity. The surrounding area includes light industrial estates and distribution facilities serving the county.",
    nearbyAreas: ["Springfield", "Writtle", "Broomfield", "Great Baddow", "Danbury", "Boreham"],
    keySectors: ["Construction and residential development", "Public sector and local government", "Retail and commercial property", "Healthcare (Broomfield Hospital)", "Engineering and manufacturing"],
    localLandmarks: ["Springfield industrial area", "Chelmsford Business Park", "Riverside retail and leisure development"]
  },

  colchester: {
    localContext: "Colchester is the largest town in Essex and one of the oldest recorded settlements in Britain. The town has a diverse economy spanning military (the garrison), higher education (University of Essex), and a growing commercial sector. Colchester's position on the A12 corridor and its rail links support logistics and distribution activity, while ongoing residential development generates construction demand.",
    nearbyAreas: ["Wivenhoe", "West Mersea", "Marks Tey", "Tiptree", "Stanway", "Lexden"],
    keySectors: ["Military (Colchester Garrison)", "Higher education", "Construction and housebuilding", "Logistics and distribution", "Manufacturing"],
    localLandmarks: ["Colchester Northern Gateway", "Severalls Business Park", "University of Essex campus"]
  },

  basildon: {
    localContext: "Basildon was developed as a new town in the post-war era and retains a strong industrial and manufacturing base. The town's industrial estates — among the largest in the South East — host a concentration of engineering, manufacturing, and logistics businesses. Basildon's position on the A127 and A13 corridors provides good road connectivity for distribution operations.",
    nearbyAreas: ["Laindon", "Vange", "Pitsea", "Wickford", "Billericay", "Langdon Hills"],
    keySectors: ["Manufacturing and engineering", "Logistics and distribution", "Construction", "Automotive trade", "Technology"],
    localLandmarks: ["Burnt Mills industrial estate", "Basildon industrial estates (Festival Business Park)", "Eastgate Business Park"],

    typicalEquipment: {
      "lifting-equipment": ["Overhead cranes and runway beams in Burnt Mills engineering workshops", "Chain hoists and slings in manufacturing facilities across Festival Business Park", "Dock levellers and powered stackers at A127 corridor distribution centres"],
      "crane-inspections": ["Overhead travelling cranes in Basildon's heavy engineering and fabrication units", "Mobile cranes supporting construction on new residential developments", "Gantry cranes at larger manufacturing facilities on Burnt Mills estate"],
      "mobile-plant-inspection": ["Counterbalance and reach forklifts operating across Basildon's industrial estates", "Telehandlers on construction sites around the A127/A13 junction developments", "Lorry-mounted cranes (hiabs) servicing building merchants and supply yards"],
      "work-at-height-equipment-inspections": ["Scissor lifts used for warehouse racking installation and maintenance", "Cherry pickers for industrial unit cladding and roofing work", "Scaffold hoists on residential construction sites"],
      "garage-equipment-inspections": ["Two-post and four-post vehicle lifts at garages along the A127 and A13 corridors", "HGV mobile column lifts at fleet workshops on Burnt Mills estate", "Pit jacks and transmission jacks at commercial vehicle workshops"],
      "passenger-and-goods-lifts-inspections": ["Goods lifts and service lifts in Basildon's town centre retail and commercial buildings", "Passenger lifts in residential tower blocks across the town", "Platform lifts at public sector buildings and healthcare facilities"],
      "firefighting-and-evacuation-lift-inspections": ["Firefighting lifts in Basildon's multi-storey residential tower blocks", "Evacuation lifts in care homes and healthcare buildings", "Fire-rated lift installations in new-build commercial premises at Eastgate Business Park"]
    },

    industryContext: {
      "lifting-equipment": "Basildon's industrial estates — Burnt Mills, Festival Business Park, and Eastgate — host one of the highest concentrations of lifting equipment in Essex. Manufacturing and engineering operations use overhead cranes, hoists, and runway beams daily, while logistics businesses along the A127 corridor depend on dock levellers and powered stackers.",
      "crane-inspections": "Basildon's heavy engineering heritage means overhead travelling cranes and gantry cranes are common in its industrial units — equipment that requires 12-monthly thorough examination at minimum. New-build construction across the town adds mobile crane demand that needs examination after each erection or relocation.",
      "mobile-plant-inspection": "Forklifts are the most prevalent piece of mobile plant in Basildon, operating across virtually every industrial estate in the town. Telehandlers are a growing presence on the residential construction sites that continue to expand the town's housing stock. Both are lifting equipment under LOLER.",
      "work-at-height-equipment-inspections": "Basildon's large industrial units require regular access equipment for maintenance — roof work, cladding repairs, and racking installation all rely on scissor lifts and boom lifts. Construction sites add further demand for scaffold hoists and mast climbers, all of which need 6-monthly examination.",
      "garage-equipment-inspections": "The A127 and A13 corridors through Basildon support a high density of garages, MOT centres, and commercial vehicle workshops. Burnt Mills estate alone hosts multiple HGV maintenance operations with column lifts and pit jacks that fall under LOLER and require regular thorough examination.",
      "passenger-and-goods-lifts-inspections": "Basildon's town centre includes residential towers, retail buildings, and public sector premises — all containing passenger and goods lifts. As a new town, many of Basildon's original lifts are reaching an age where thorough examination is increasingly critical for identifying wear and deterioration.",
      "firefighting-and-evacuation-lift-inspections": "Basildon's multi-storey residential tower blocks — dating from the original new town construction through to modern developments — require firefighting and evacuation lifts where building height exceeds 18 metres. These specialist lifts need examination covering fire-mode operation, secondary power, and water management systems."
    },

    coverageDetail: "We cover all of Basildon including Laindon, Vange, Pitsea, Wickford, and the surrounding area. Our engineers regularly attend Burnt Mills industrial estate, Festival Business Park, Eastgate Business Park, and industrial units along the A127 and A13 corridors."
  },

  brentwood: {
    localContext: "Brentwood is a prosperous town in south-west Essex, strategically positioned between the M25 and A12. The town serves as a base for corporate offices, professional services, and a range of construction and property development activity. Its accessibility to both London and the wider Essex business area makes it a practical location for companies requiring regular equipment inspections.",
    nearbyAreas: ["Shenfield", "Ingatestone", "Pilgrims Hatch", "Brook Street", "Warley", "Hutton"],
    keySectors: ["Corporate offices and professional services", "Construction and property development", "Retail", "Healthcare", "Education"],
    localLandmarks: ["Brentwood Enterprise Park", "Hubert Road industrial area"]
  },

  southend: {
    localContext: "Southend-on-Sea is the largest urban area in Essex, with a diverse economy that extends beyond its well-known tourism sector to include aviation (London Southend Airport), healthcare, education, and a growing digital and creative sector. The airport business park and surrounding commercial areas host logistics, engineering, and manufacturing operations.",
    nearbyAreas: ["Leigh-on-Sea", "Westcliff-on-Sea", "Rochford", "Shoeburyness", "Prittlewell", "Thorpe Bay"],
    keySectors: ["Aviation and airport services", "Tourism and hospitality", "Healthcare (Southend Hospital)", "Construction", "Engineering"],
    localLandmarks: ["London Southend Airport Business Park", "Southend town centre regeneration", "Shoeburyness industrial area"]
  },

  harlow: {
    localContext: "Harlow is another of Essex's post-war new towns, with a well-established industrial and manufacturing base. The town's proximity to the M11 motorway and Stansted Airport supports logistics operations, while its own business parks and industrial estates host a mix of manufacturing, technology, and pharmaceutical companies. Significant housebuilding in and around the town is driving construction activity.",
    nearbyAreas: ["Old Harlow", "Potter Street", "Church Langley", "Gilston", "Sawbridgeworth", "Epping"],
    keySectors: ["Manufacturing and pharmaceuticals", "Logistics (M11/Stansted corridor)", "Construction and housebuilding", "Technology", "Healthcare (Princess Alexandra Hospital)"],
    localLandmarks: ["Templefields industrial estate", "Pinnacles industrial estate", "Edinburgh Way business area"]
  }
};
