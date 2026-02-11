export interface CaseType {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  commonInjuries: string[];
  liabilityFactors: string[];
  averageSettlement: string;
  keyEvidence: string[];
}

export const caseTypes: CaseType[] = [
  {
    slug: "amazon-delivery-van-accident",
    title: "Amazon Delivery Van Accident Claims",
    shortTitle: "Amazon DSP Accidents",
    description: "Claims against Amazon Delivery Service Partners (DSPs) when their drivers cause accidents delivering packages. Amazon's contractor model creates complex liability issues.",
    commonInjuries: ["Whiplash", "Back injuries", "Broken bones", "Head trauma", "Soft tissue damage", "Spinal injuries"],
    liabilityFactors: ["DSP driver negligence", "Amazon's delivery quotas", "Vehicle maintenance", "Driver training", "Routing pressure"],
    averageSettlement: "$50,000 - $750,000+",
    keyEvidence: ["Amazon delivery route data", "Driver's delivery app logs", "Vehicle maintenance records", "Witness statements", "Dash cam footage"]
  },
  {
    slug: "fedex-truck-accident",
    title: "FedEx Truck Accident Claims",
    shortTitle: "FedEx Accidents",
    description: "Claims involving FedEx Ground and FedEx Express vehicles. FedEx's dual-contractor model means different liability depending on which service caused the accident.",
    commonInjuries: ["Severe trauma from large trucks", "Crush injuries", "Spinal cord damage", "Traumatic brain injury", "Multiple fractures"],
    liabilityFactors: ["FedEx Ground contractor status", "FedEx Express employee status", "Vehicle size and weight", "Delivery schedule pressure", "Driver fatigue"],
    averageSettlement: "$75,000 - $1,000,000+",
    keyEvidence: ["FedEx delivery records", "Driver employment status", "Hours of service logs", "Vehicle inspection reports", "GPS tracking data"]
  },
  {
    slug: "ups-truck-accident",
    title: "UPS Truck Accident Claims",
    shortTitle: "UPS Accidents",
    description: "Claims against United Parcel Service when their iconic brown trucks cause accidents. UPS drivers are employees, making liability more straightforward.",
    commonInjuries: ["Back and neck injuries", "Broken limbs", "Head injuries", "Internal injuries", "Chronic pain conditions"],
    liabilityFactors: ["Driver negligence", "UPS vicarious liability", "Tight delivery schedules", "Vehicle blind spots", "Improper backing"],
    averageSettlement: "$60,000 - $900,000+",
    keyEvidence: ["UPS DIAD delivery data", "Driver route information", "Vehicle telematics", "Delivery manifests", "Training records"]
  },
  {
    slug: "usps-mail-truck-accident",
    title: "USPS Mail Truck Accident Claims",
    shortTitle: "USPS Accidents",
    description: "Claims involving United States Postal Service vehicles require special procedures due to federal government immunity protections (Federal Tort Claims Act).",
    commonInjuries: ["All standard vehicle accident injuries", "Pedestrian strike injuries", "Cyclist injuries"],
    liabilityFactors: ["Federal Tort Claims Act requirements", "Administrative claim filing", "2-year deadline from incident", "Government sovereign immunity limitations"],
    averageSettlement: "$40,000 - $500,000+",
    keyEvidence: ["SF-95 claim form", "Postal route records", "Driver personnel file", "Vehicle maintenance logs", "Witness statements"]
  },
  {
    slug: "pedestrian-delivery-truck-accident",
    title: "Pedestrians Hit by Delivery Trucks",
    shortTitle: "Pedestrian Accidents",
    description: "Claims for pedestrians struck by delivery vehicles in residential areas, parking lots, driveways, and crosswalks while drivers make deliveries.",
    commonInjuries: ["Traumatic brain injury", "Broken legs and hips", "Internal bleeding", "Spinal cord injuries", "Fatalities"],
    liabilityFactors: ["Driver distraction from delivery app", "Backing without spotters", "Double-parking hazards", "Residential area speeding", "Failure to yield"],
    averageSettlement: "$100,000 - $1,500,000+",
    keyEvidence: ["Delivery stop location data", "Security camera footage", "Delivery app activity logs", "Witness accounts", "Medical records"]
  },
  {
    slug: "cyclist-delivery-truck-accident",
    title: "Cyclists Hit by Delivery Trucks",
    shortTitle: "Cyclist Accidents",
    description: "Claims for bicyclists injured in collisions with delivery vehicles, including right-hook crashes, door zone incidents, and blind spot accidents.",
    commonInjuries: ["Road rash", "Broken clavicle", "Head trauma", "Spinal injuries", "Leg fractures", "Facial injuries"],
    liabilityFactors: ["Right-hook turns", "Lane encroachment", "Driver distraction", "Failure to check mirrors", "Illegal double-parking forcing cyclists into traffic"],
    averageSettlement: "$75,000 - $800,000+",
    keyEvidence: ["Bike camera footage", "Helmet damage", "Street layout", "Driver delivery logs", "Medical records"]
  },
  {
    slug: "vehicle-collision-delivery-truck",
    title: "Vehicle Collisions with Delivery Trucks",
    shortTitle: "Vehicle Collisions",
    description: "Claims for drivers whose vehicles are struck by delivery trucks at intersections, while backing up, or during lane changes.",
    commonInjuries: ["Whiplash", "Back injuries", "Airbag injuries", "Broken bones", "Concussions", "Soft tissue damage"],
    liabilityFactors: ["Delivery driver traffic violations", "Running red lights to meet quotas", "Distracted driving", "Improper lane changes", "Failure to yield"],
    averageSettlement: "$30,000 - $400,000+",
    keyEvidence: ["Police report", "Traffic camera footage", "Delivery route timing", "Insurance documentation", "Vehicle damage photos"]
  },
  {
    slug: "doordash-instacart-accident",
    title: "DoorDash & Instacart Delivery Accidents",
    shortTitle: "Food/Grocery Delivery",
    description: "Claims involving food delivery and grocery delivery drivers using personal vehicles for DoorDash, Instacart, Uber Eats, and similar services.",
    commonInjuries: ["Standard vehicle collision injuries", "Pedestrian strike injuries", "Cyclist collision injuries"],
    liabilityFactors: ["Gig worker insurance gaps", "Personal vs commercial coverage", "App-based distraction", "Time pressure for tips", "Unfamiliar neighborhoods"],
    averageSettlement: "$25,000 - $350,000+",
    keyEvidence: ["Delivery app status at crash time", "Driver's insurance policy", "Gig company insurance coverage", "Delivery order records", "Phone records"]
  },
  {
    slug: "delivery-truck-backing-accident",
    title: "Delivery Truck Backing Accidents",
    shortTitle: "Backing Accidents",
    description: "Claims when delivery trucks cause accidents while backing up, one of the most common causes of delivery vehicle accidents in residential areas.",
    commonInjuries: ["Crush injuries", "Leg and hip fractures", "Fatal injuries", "Spinal cord damage", "Internal organ damage"],
    liabilityFactors: ["No spotter used", "Backup camera not checked", "Backing into traffic", "Limited visibility", "Rushing to complete deliveries"],
    averageSettlement: "$75,000 - $750,000+",
    keyEvidence: ["Backup camera footage", "Vehicle telematics", "Witness statements", "Delivery stop timing", "Training records on backing procedures"]
  },
  {
    slug: "delivery-truck-double-parking-accident",
    title: "Double-Parking Delivery Truck Accidents",
    shortTitle: "Double-Parking Accidents",
    description: "Claims when illegally double-parked delivery trucks cause accidents by forcing other vehicles, cyclists, or pedestrians into dangerous situations.",
    commonInjuries: ["Varies based on secondary collision type", "Cyclist injuries common", "Pedestrian injuries"],
    liabilityFactors: ["Illegal parking", "Creating road hazards", "Blocking visibility", "Forcing lane changes", "Negligent parking decisions"],
    averageSettlement: "$40,000 - $500,000+",
    keyEvidence: ["Photos of illegal parking", "Witness accounts", "Delivery stop records", "Police citation", "Traffic camera footage"]
  },
  {
    slug: "delivery-truck-property-damage",
    title: "Delivery Truck Property Damage Claims",
    shortTitle: "Property Damage",
    description: "Claims when delivery trucks damage mailboxes, fences, parked cars, landscaping, and structures while making deliveries or turning around.",
    commonInjuries: ["Property damage only in most cases", "Personal injuries if occupants present"],
    liabilityFactors: ["Negligent driving in residential areas", "Vehicle too large for location", "Driver inexperience", "Rushing deliveries"],
    averageSettlement: "$5,000 - $100,000+",
    keyEvidence: ["Photos of damage", "Delivery records showing driver at location", "Witness statements", "Security camera footage", "Repair estimates"]
  },
  {
    slug: "delivery-truck-wrongful-death",
    title: "Delivery Truck Wrongful Death Claims",
    shortTitle: "Wrongful Death",
    description: "Claims brought by families when loved ones are killed in delivery truck accidents, including pedestrians, cyclists, and other drivers.",
    commonInjuries: ["Fatal injuries"],
    liabilityFactors: ["Gross negligence", "Reckless driving", "DUI", "Excessive speed", "Company pressure creating dangerous conditions"],
    averageSettlement: "$500,000 - $5,000,000+",
    keyEvidence: ["Accident reconstruction", "Medical examiner reports", "Driver employment records", "Delivery quota evidence", "Prior complaints about driver"]
  },
  {
    slug: "delivery-truck-hit-and-run",
    title: "Delivery Truck Hit and Run Accidents",
    shortTitle: "Hit and Run",
    description: "Claims when delivery drivers flee the scene after causing accidents. Delivery company records can help identify and pursue these drivers.",
    commonInjuries: ["Varies widely based on accident type"],
    liabilityFactors: ["Driver identification", "Company's duty to cooperate", "Vehicle identification from branding", "Package tracking to location"],
    averageSettlement: "$40,000 - $600,000+",
    keyEvidence: ["Package tracking data", "Delivery route records", "Vehicle branding/photos", "Witness descriptions", "Neighborhood security cameras"]
  },
  {
    slug: "residential-delivery-accident",
    title: "Residential Area Delivery Accidents",
    shortTitle: "Residential Accidents",
    description: "Claims for accidents in residential neighborhoods where delivery trucks interact with children, pets, parked cars, and pedestrians in driveways.",
    commonInjuries: ["Child pedestrian injuries", "Driveway backup injuries", "Mailbox area injuries"],
    liabilityFactors: ["Speed in residential zones", "Failure to watch for children", "Driveway backing", "Door-to-door delivery pressure"],
    averageSettlement: "$50,000 - $750,000+",
    keyEvidence: ["Neighborhood witness statements", "Doorbell camera footage", "Delivery timing records", "Speed data if available"]
  },
  {
    slug: "delivery-driver-fatigue-accident",
    title: "Fatigued Delivery Driver Accidents",
    shortTitle: "Driver Fatigue",
    description: "Claims when exhausted delivery drivers cause accidents due to long shifts, demanding quotas, and pressure to complete routes.",
    commonInjuries: ["Severe injuries due to delayed reaction times", "Head-on collisions", "Rear-end crashes"],
    liabilityFactors: ["Hours worked before accident", "Delivery quota pressure", "Break time policies", "Driver scheduling practices"],
    averageSettlement: "$75,000 - $1,000,000+",
    keyEvidence: ["Driver shift records", "Delivery quotas and completion data", "Company break time policies", "Driver statements about fatigue"]
  }
];

export function getCaseTypeBySlug(slug: string): CaseType | undefined {
  return caseTypes.find(ct => ct.slug === slug);
}
