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
    localLandmarks: ["Crossways Business Park", "The Bridge development", "Dartford town centre regeneration"]
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
    localLandmarks: ["Purley Way industrial corridor", "Croydon town centre regeneration zone", "Ruskin Square development"]
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
    localLandmarks: ["Burnt Mills industrial estate", "Basildon industrial estates (Festival Business Park)", "Eastgate Business Park"]
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
