export interface State {
  name: string;
  abbr: string;
  slug: string;
  statOfLimitations: string;
  faultSystem: string;
  minInsurance: string;
  deliveryTruckRegulations: string;
  commercialVehicleLaw: boolean;
  commercialVehicleLawYear?: number;
  deliveryTruckInsuranceTiers: {
    offDuty: string;
    loadingZone: string;
    activeDelivery: string;
  };
  uniqueLaws: string[];
  majorDeliveryTruckMarkets: string[];
  annualDeliveryTruckAccidents: number;
  uniqueFacts: string[];
}

export const states: State[] = [
  {
    name: "Alabama",
    abbr: "AL",
    slug: "alabama",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2018",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2018,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence can bar recovery if victim is 1% at fault", "Commercial Vehicle drivers must pass background checks", "Airport pickup regulations vary by city"],
    majorDeliveryTruckMarkets: ["Birmingham", "Montgomery", "Huntsville", "Mobile"],
    annualDeliveryTruckAccidents: 450,
    uniqueFacts: ["One of few contributory negligence states - critical for Delivery Truck claims", "Delivery Truck launched in Alabama in 2014"]
  },
  {
    name: "Alaska",
    abbr: "AK",
    slug: "alaska",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "50/100/25",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Higher minimum insurance requirements than most states", "Cold weather creates unique Delivery Truck hazards", "Limited Delivery Truck availability outside Anchorage"],
    majorDeliveryTruckMarkets: ["Anchorage", "Fairbanks"],
    annualDeliveryTruckAccidents: 85,
    uniqueFacts: ["Extreme weather conditions affect Delivery Truck safety year-round", "Higher insurance minimums provide better protection"]
  },
  {
    name: "Arizona",
    abbr: "AZ",
    slug: "arizona",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/15",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Early adopter of Delivery Truck regulations", "Self-driving vehicle testing hub", "Phoenix is major Delivery Truck testing ground"],
    majorDeliveryTruckMarkets: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Tempe", "Chandler"],
    annualDeliveryTruckAccidents: 2800,
    uniqueFacts: ["Home to Delivery Truck's self-driving car testing program", "First fatal autonomous delivery truck accident occurred in Tempe (2018)", "Year-round warm weather means consistent Delivery Truck demand"]
  },
  {
    name: "Arkansas",
    abbr: "AR",
    slug: "arkansas",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["3-year statute of limitations gives more time to file", "Cannot recover if more than 50% at fault"],
    majorDeliveryTruckMarkets: ["Little Rock", "Fayetteville", "Fort Smith"],
    annualDeliveryTruckAccidents: 380,
    uniqueFacts: ["Longer statute of limitations than neighboring states", "Growing Delivery Truck presence in university towns"]
  },
  {
    name: "California",
    abbr: "CA",
    slug: "california",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/5",
    deliveryTruckRegulations: "First state to regulate Commercial Vehicles (2013)",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2013,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["AB5 law affects driver classification", "CPUC regulates Delivery Truck companies", "Prop 22 allows drivers to remain contractors", "Strictest background check requirements"],
    majorDeliveryTruckMarkets: ["Los Angeles", "San Francisco", "San Diego", "San Jose", "Oakland", "Sacramento", "Long Beach"],
    annualDeliveryTruckAccidents: 15000,
    uniqueFacts: ["Delivery Truck was founded in San Francisco (2009)", "Highest Delivery Truck usage in the nation", "AB5 and Prop 22 created landmark gig worker laws", "First state to establish Commercial Vehicle regulatory framework"]
  },
  {
    name: "Colorado",
    abbr: "CO",
    slug: "colorado",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    deliveryTruckRegulations: "State-regulated since 2014",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2014,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 125 established Commercial Vehicle regulations", "Denver International Airport has specific Delivery Truck zones", "Mountain resort areas have special regulations"],
    majorDeliveryTruckMarkets: ["Denver", "Colorado Springs", "Aurora", "Boulder", "Fort Collins"],
    annualDeliveryTruckAccidents: 3200,
    uniqueFacts: ["Second state to pass comprehensive Commercial Vehicle legislation", "High Delivery Truck demand for ski resort transportation", "Denver is one of Delivery Truck's top 10 markets"]
  },
  {
    name: "Connecticut",
    abbr: "CT",
    slug: "connecticut",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Late adopter of Delivery Truck regulations", "High insurance requirements", "Bradley Airport has designated pickup zones"],
    majorDeliveryTruckMarkets: ["Hartford", "New Haven", "Stamford", "Bridgeport"],
    annualDeliveryTruckAccidents: 950,
    uniqueFacts: ["High commuter Delivery Truck usage to NYC", "Strong consumer protection laws benefit accident victims"]
  },
  {
    name: "Delaware",
    abbr: "DE",
    slug: "delaware",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Delivery Truck activity", "Philadelphia Airport serves many Delaware delivery recipients"],
    majorDeliveryTruckMarkets: ["Wilmington", "Newark", "Dover"],
    annualDeliveryTruckAccidents: 280,
    uniqueFacts: ["Many residents use Delivery Truck to reach Philadelphia and Baltimore airports", "Corporate headquarters concentration drives business Delivery Truck demand"]
  },
  {
    name: "District of Columbia",
    abbr: "DC",
    slug: "washington-dc",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "First jurisdiction to legalize Delivery Truck (2014)",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2014,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes claims difficult", "First to officially legalize Delivery Truck/Delivery Truck", "Strict driver requirements"],
    majorDeliveryTruckMarkets: ["Washington DC"],
    annualDeliveryTruckAccidents: 2400,
    uniqueFacts: ["One of highest Delivery Truck usage rates per capita", "Contributory negligence is a major hurdle for claims", "Government workers and tourists drive huge demand"]
  },
  {
    name: "Florida",
    abbr: "FL",
    slug: "florida",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "10/20/10",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations (longest)", "No-fault PIP insurance required", "Theme park areas have high Delivery Truck density"],
    majorDeliveryTruckMarkets: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "West Palm Beach"],
    annualDeliveryTruckAccidents: 12000,
    uniqueFacts: ["Second highest Delivery Truck usage after California", "Tourism drives massive Delivery Truck demand", "4-year statute of limitations is most favorable for victims", "No-fault insurance adds complexity to claims"]
  },
  {
    name: "Georgia",
    abbr: "GA",
    slug: "georgia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 190 established Commercial Vehicle framework", "Atlanta airport is one of busiest for Delivery Truck", "Delivery Truck insurance gaps addressed by law"],
    majorDeliveryTruckMarkets: ["Atlanta", "Savannah", "Augusta", "Athens"],
    annualDeliveryTruckAccidents: 5500,
    uniqueFacts: ["Atlanta Hartsfield-Jackson is world's busiest airport - massive Delivery Truck demand", "Early adopter of comprehensive Delivery Truck laws"]
  },
  {
    name: "Hawaii",
    abbr: "HI",
    slug: "hawaii",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/10",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault PIP insurance required", "Island geography limits service areas", "Tourism-heavy demand patterns"],
    majorDeliveryTruckMarkets: ["Honolulu", "Maui", "Kona"],
    annualDeliveryTruckAccidents: 650,
    uniqueFacts: ["Tourism drives nearly all Delivery Truck demand", "Island geography creates unique accident patterns", "High cost of living means high Delivery Truck fares"]
  },
  {
    name: "Idaho",
    abbr: "ID",
    slug: "idaho",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 195 established Delivery Truck framework", "Rural areas have limited coverage"],
    majorDeliveryTruckMarkets: ["Boise", "Idaho Falls", "Meridian"],
    annualDeliveryTruckAccidents: 320,
    uniqueFacts: ["Rapidly growing Boise market", "Limited Delivery Truck availability in rural areas"]
  },
  {
    name: "Illinois",
    abbr: "IL",
    slug: "illinois",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["City of Chicago has additional regulations", "O'Hare and Midway have designated pickup zones", "Strong consumer protection laws"],
    majorDeliveryTruckMarkets: ["Chicago", "Springfield", "Peoria", "Rockford", "Champaign"],
    annualDeliveryTruckAccidents: 8500,
    uniqueFacts: ["Chicago is one of Delivery Truck's largest markets globally", "O'Hare Airport is major Delivery Truck hub", "City and state regulations sometimes conflict"]
  },
  {
    name: "Indiana",
    abbr: "IN",
    slug: "indiana",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SEA 117 established Commercial Vehicle rules", "Indianapolis Motor Speedway events create surge demand"],
    majorDeliveryTruckMarkets: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    annualDeliveryTruckAccidents: 1800,
    uniqueFacts: ["Indy 500 creates massive annual Delivery Truck demand", "Major college towns have high student Delivery Truck usage"]
  },
  {
    name: "Iowa",
    abbr: "IA",
    slug: "iowa",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/15",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Rural coverage remains limited", "University towns have concentrated service"],
    majorDeliveryTruckMarkets: ["Des Moines", "Cedar Rapids", "Iowa City"],
    annualDeliveryTruckAccidents: 420,
    uniqueFacts: ["University of Iowa campus drives Delivery Truck demand", "Weather creates seasonal usage patterns"]
  },
  {
    name: "Kansas",
    abbr: "KS",
    slug: "kansas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 117 established Commercial Vehicle framework", "Kansas City metro spans state line"],
    majorDeliveryTruckMarkets: ["Kansas City (KS)", "Wichita", "Overland Park", "Lawrence"],
    annualDeliveryTruckAccidents: 580,
    uniqueFacts: ["Kansas City metro area shared with Missouri creates jurisdictional complexities", "University town demand in Lawrence"]
  },
  {
    name: "Kentucky",
    abbr: "KY",
    slug: "kentucky",
    statOfLimitations: "2 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 86 established Commercial Vehicle rules", "Kentucky Derby creates massive annual surge", "No-fault PIP insurance required"],
    majorDeliveryTruckMarkets: ["Louisville", "Lexington", "Bowling Green"],
    annualDeliveryTruckAccidents: 980,
    uniqueFacts: ["Kentucky Derby is one of biggest Delivery Truck events annually", "Louisville airport sees significant Delivery Truck traffic", "Pure comparative negligence is favorable for victims"]
  },
  {
    name: "Louisiana",
    abbr: "LA",
    slug: "louisiana",
    statOfLimitations: "1 year",
    faultSystem: "Pure comparative negligence",
    minInsurance: "15/30/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - shortest in US", "Mardi Gras creates extreme surge demand", "French Quarter has special regulations"],
    majorDeliveryTruckMarkets: ["New Orleans", "Baton Rouge", "Shreveport"],
    annualDeliveryTruckAccidents: 2100,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Mardi Gras is one of biggest Delivery Truck events in US", "New Orleans has extremely high Delivery Truck usage per capita", "Tourism and nightlife drive 24/7 demand"]
  },
  {
    name: "Maine",
    abbr: "ME",
    slug: "maine",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "50/100/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations - longest in US", "Higher insurance minimums", "Limited service in rural areas"],
    majorDeliveryTruckMarkets: ["Portland", "Bangor", "Lewiston"],
    annualDeliveryTruckAccidents: 180,
    uniqueFacts: ["6-year statute of limitations is most favorable in nation", "Tourism season creates summer surge demand", "Higher insurance minimums provide better coverage"]
  },
  {
    name: "Maryland",
    abbr: "MD",
    slug: "maryland",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/15",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence - extremely difficult to recover", "BWI Airport has designated Delivery Truck zones", "DC metro area spans jurisdiction"],
    majorDeliveryTruckMarkets: ["Baltimore", "Bethesda", "Silver Spring", "Columbia"],
    annualDeliveryTruckAccidents: 2800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "High DC commuter Delivery Truck usage", "Baltimore and DC metro create overlapping service areas"]
  },
  {
    name: "Massachusetts",
    abbr: "MA",
    slug: "massachusetts",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "20/40/5",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 4049 established comprehensive regulations", "Boston has additional city requirements", "Logan Airport has specific pickup procedures"],
    majorDeliveryTruckMarkets: ["Boston", "Cambridge", "Worcester", "Springfield"],
    annualDeliveryTruckAccidents: 4200,
    uniqueFacts: ["Boston is one of oldest and most established Delivery Truck markets", "High college student population drives demand", "No-fault PIP insurance adds complexity"]
  },
  {
    name: "Michigan",
    abbr: "MI",
    slug: "michigan",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "50/100/10",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["No-fault insurance state with unique rules", "Detroit is major Delivery Truck market", "Higher insurance minimums"],
    majorDeliveryTruckMarkets: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing"],
    annualDeliveryTruckAccidents: 3400,
    uniqueFacts: ["No-fault insurance creates unique claim procedures", "Detroit's auto industry connection to Delivery Truck partnerships", "University of Michigan drives Ann Arbor demand"]
  },
  {
    name: "Minnesota",
    abbr: "MN",
    slug: "minnesota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/10",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault PIP insurance", "Minneapolis-St. Paul has high Delivery Truck density"],
    majorDeliveryTruckMarkets: ["Minneapolis", "St. Paul", "Rochester", "Duluth"],
    annualDeliveryTruckAccidents: 1850,
    uniqueFacts: ["6-year statute gives maximum time to file claims", "Twin Cities are major Delivery Truck market", "Mall of America drives significant Delivery Truck traffic"]
  },
  {
    name: "Mississippi",
    abbr: "MS",
    slug: "mississippi",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 1381 established Commercial Vehicle rules", "Limited urban areas for Delivery Truck"],
    majorDeliveryTruckMarkets: ["Jackson", "Gulfport", "Biloxi"],
    annualDeliveryTruckAccidents: 380,
    uniqueFacts: ["Gulf Coast casinos drive Delivery Truck demand", "Pure comparative negligence is favorable for victims", "Limited service outside metro areas"]
  },
  {
    name: "Missouri",
    abbr: "MO",
    slug: "missouri",
    statOfLimitations: "5 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["5-year statute of limitations", "Kansas City spans state line", "St. Louis has high Delivery Truck density"],
    majorDeliveryTruckMarkets: ["St. Louis", "Kansas City", "Springfield", "Columbia"],
    annualDeliveryTruckAccidents: 2400,
    uniqueFacts: ["5-year statute is second longest in US", "Pure comparative negligence favors victims", "Two major metro areas drive Delivery Truck demand"]
  },
  {
    name: "Montana",
    abbr: "MT",
    slug: "montana",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 390 established early regulations", "Very limited service outside cities", "Tourism creates seasonal demand"],
    majorDeliveryTruckMarkets: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    annualDeliveryTruckAccidents: 120,
    uniqueFacts: ["Ski resort areas have seasonal Delivery Truck spikes", "Glacier National Park tourism drives demand", "Very limited rural coverage"]
  },
  {
    name: "Nebraska",
    abbr: "NE",
    slug: "nebraska",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["4-year statute of limitations", "College football creates surge demand"],
    majorDeliveryTruckMarkets: ["Omaha", "Lincoln"],
    annualDeliveryTruckAccidents: 480,
    uniqueFacts: ["Nebraska football games create massive Delivery Truck surges", "4-year statute is favorable for victims", "Omaha is growing market"]
  },
  {
    name: "Nevada",
    abbr: "NV",
    slug: "nevada",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Las Vegas is one of top Delivery Truck markets globally", "McCarran Airport has massive Delivery Truck volume", "24/7 demand from casinos and entertainment"],
    majorDeliveryTruckMarkets: ["Las Vegas", "Reno", "Henderson", "North Las Vegas"],
    annualDeliveryTruckAccidents: 6500,
    uniqueFacts: ["Las Vegas has highest Delivery Truck usage per capita in US", "24/7 casino and entertainment demand", "Conventions and tourism drive massive volume", "McCarran Airport is one of busiest for Delivery Truck pickups"]
  },
  {
    name: "New Hampshire",
    abbr: "NH",
    slug: "new-hampshire",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 302 established Commercial Vehicle rules", "Limited service outside southern NH"],
    majorDeliveryTruckMarkets: ["Manchester", "Nashua", "Concord"],
    annualDeliveryTruckAccidents: 220,
    uniqueFacts: ["Boston commuter demand drives southern NH usage", "Ski season creates winter surges", "Limited rural coverage"]
  },
  {
    name: "New Jersey",
    abbr: "NJ",
    slug: "new-jersey",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["A3695 established Commercial Vehicle framework", "No-fault PIP insurance", "NYC commuter traffic creates high demand", "Newark Airport has designated Delivery Truck areas"],
    majorDeliveryTruckMarkets: ["Newark", "Jersey City", "Paterson", "Trenton", "Hoboken"],
    annualDeliveryTruckAccidents: 5200,
    uniqueFacts: ["NYC commuter demand drives massive Delivery Truck usage", "No-fault insurance adds claim complexity", "One of most densely populated states"]
  },
  {
    name: "New Mexico",
    abbr: "NM",
    slug: "new-mexico",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 168 established Commercial Vehicle rules", "Limited coverage outside Albuquerque and Santa Fe"],
    majorDeliveryTruckMarkets: ["Albuquerque", "Santa Fe", "Las Cruces"],
    annualDeliveryTruckAccidents: 580,
    uniqueFacts: ["Tourism to Santa Fe drives Delivery Truck demand", "Pure comparative negligence favors victims", "Limited rural coverage"]
  },
  {
    name: "New York",
    abbr: "NY",
    slug: "new-york",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$75,000 per person / $150,000 per accident",
      activeDelivery: "$1,250,000 liability coverage"
    },
    uniqueLaws: ["NYC has highest insurance requirements in nation", "TLC regulates NYC Delivery Truck separately", "No-fault PIP insurance", "Congestion pricing affects Delivery Truck costs"],
    majorDeliveryTruckMarkets: ["New York City", "Buffalo", "Rochester", "Syracuse", "Albany"],
    annualDeliveryTruckAccidents: 22000,
    uniqueFacts: ["NYC is largest Delivery Truck market in the world", "Highest insurance requirements in US ($1.25M)", "TLC adds extra regulatory layer in NYC", "No-fault insurance complicates claims"]
  },
  {
    name: "North Carolina",
    abbr: "NC",
    slug: "north-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Contributory negligence",
    minInsurance: "30/60/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence is harsh barrier", "HB 389 established Commercial Vehicle rules", "Charlotte is major banking center with high business Delivery Truck"],
    majorDeliveryTruckMarkets: ["Charlotte", "Raleigh", "Durham", "Greensboro", "Wilmington"],
    annualDeliveryTruckAccidents: 3800,
    uniqueFacts: ["Contributory negligence makes claims very difficult", "Research Triangle has high tech worker Delivery Truck usage", "Charlotte banking district drives business demand"]
  },
  {
    name: "North Dakota",
    abbr: "ND",
    slug: "north-dakota",
    statOfLimitations: "6 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["6-year statute of limitations", "No-fault insurance", "Very limited coverage outside cities"],
    majorDeliveryTruckMarkets: ["Fargo", "Bismarck", "Grand Forks"],
    annualDeliveryTruckAccidents: 95,
    uniqueFacts: ["6-year statute is most favorable for victims", "Oil boom areas had temporary Delivery Truck surges", "Very limited service statewide"]
  },
  {
    name: "Ohio",
    abbr: "OH",
    slug: "ohio",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 237 established comprehensive Commercial Vehicle rules", "Multiple major metros with high Delivery Truck density"],
    majorDeliveryTruckMarkets: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    annualDeliveryTruckAccidents: 4200,
    uniqueFacts: ["Columbus is one of fastest-growing Delivery Truck markets", "Ohio State football creates massive surges", "Multiple metro areas each have strong Delivery Truck presence"]
  },
  {
    name: "Oklahoma",
    abbr: "OK",
    slug: "oklahoma",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 316 established Commercial Vehicle framework", "Oklahoma City and Tulsa are primary markets"],
    majorDeliveryTruckMarkets: ["Oklahoma City", "Tulsa", "Norman"],
    annualDeliveryTruckAccidents: 920,
    uniqueFacts: ["University of Oklahoma games drive Norman Delivery Truck spikes", "Oil industry workers use Delivery Truck frequently", "Limited rural coverage"]
  },
  {
    name: "Oregon",
    abbr: "OR",
    slug: "oregon",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 2995 established Commercial Vehicle rules", "Portland has very high Delivery Truck usage", "Strong bicycle culture creates interaction risks"],
    majorDeliveryTruckMarkets: ["Portland", "Eugene", "Salem", "Bend"],
    annualDeliveryTruckAccidents: 2100,
    uniqueFacts: ["Portland is one of most Delivery Truck-friendly cities", "Strong public transit integration", "Bicycle and Delivery Truck conflicts are common"]
  },
  {
    name: "Pennsylvania",
    abbr: "PA",
    slug: "pennsylvania",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "15/30/5",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 164 established comprehensive Commercial Vehicle rules", "Philadelphia has high Delivery Truck density", "PHL Airport has designated pickup zones", "No-fault insurance option"],
    majorDeliveryTruckMarkets: ["Philadelphia", "Pittsburgh", "Harrisburg", "Allentown"],
    annualDeliveryTruckAccidents: 5800,
    uniqueFacts: ["Philadelphia is major East Coast Delivery Truck market", "Pittsburgh has autonomous vehicle testing", "No-fault insurance can simplify claims"]
  },
  {
    name: "Rhode Island",
    abbr: "RI",
    slug: "rhode-island",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Small state with concentrated Delivery Truck", "Providence is primary market"],
    majorDeliveryTruckMarkets: ["Providence", "Warwick", "Newport"],
    annualDeliveryTruckAccidents: 340,
    uniqueFacts: ["Smallest state but high Delivery Truck per capita", "Pure comparative negligence favors victims", "Boston proximity increases demand"]
  },
  {
    name: "South Carolina",
    abbr: "SC",
    slug: "south-carolina",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["H 3525 established early Commercial Vehicle rules", "Charleston tourism drives demand", "Myrtle Beach has seasonal surges"],
    majorDeliveryTruckMarkets: ["Charleston", "Columbia", "Greenville", "Myrtle Beach"],
    annualDeliveryTruckAccidents: 1650,
    uniqueFacts: ["Charleston and Myrtle Beach tourism creates high seasonal demand", "Early adopter of Delivery Truck regulations", "College towns have strong usage"]
  },
  {
    name: "South Dakota",
    abbr: "SD",
    slug: "south-dakota",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (slight)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 28 established Commercial Vehicle rules", "Very limited coverage statewide", "Sturgis Rally creates massive annual surge"],
    majorDeliveryTruckMarkets: ["Sioux Falls", "Rapid City"],
    annualDeliveryTruckAccidents: 85,
    uniqueFacts: ["Sturgis Motorcycle Rally creates one of biggest annual Delivery Truck surges", "Very limited year-round service", "Tourism to Mount Rushmore drives Rapid City demand"]
  },
  {
    name: "Tennessee",
    abbr: "TN",
    slug: "tennessee",
    statOfLimitations: "1 year",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/15",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["ONLY 1 YEAR statute of limitations - same as Louisiana", "Nashville has extremely high Delivery Truck usage", "Music industry drives 24/7 demand"],
    majorDeliveryTruckMarkets: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    annualDeliveryTruckAccidents: 3200,
    uniqueFacts: ["1-YEAR STATUTE OF LIMITATIONS - Act immediately!", "Nashville is one of top bachelorette party destinations - massive Delivery Truck demand", "Memphis and Nashville both have vibrant nightlife driving 24/7 usage"]
  },
  {
    name: "Texas",
    abbr: "TX",
    slug: "texas",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "30/60/25",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 100 established statewide rules", "Austin was early Delivery Truck battleground", "Multiple major metros with high density", "Higher insurance minimums than many states"],
    majorDeliveryTruckMarkets: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth", "El Paso"],
    annualDeliveryTruckAccidents: 14000,
    uniqueFacts: ["Second largest Delivery Truck market after California", "Austin had famous Delivery Truck/Delivery Truck departure and return", "Houston and Dallas are among largest US markets", "SXSW creates massive annual Austin surge"]
  },
  {
    name: "Utah",
    abbr: "UT",
    slug: "utah",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/65/15",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["HB 389 established early regulations", "Salt Lake City is growing tech hub", "Ski resorts drive seasonal demand"],
    majorDeliveryTruckMarkets: ["Salt Lake City", "Provo", "Park City", "Ogden"],
    annualDeliveryTruckAccidents: 1200,
    uniqueFacts: ["4-year statute of limitations is favorable", "Ski season creates massive Park City demand", "Tech industry growth driving Salt Lake Delivery Truck boom"]
  },
  {
    name: "Vermont",
    abbr: "VT",
    slug: "vermont",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 60 established Commercial Vehicle rules", "Very limited coverage outside Burlington"],
    majorDeliveryTruckMarkets: ["Burlington", "Montpelier"],
    annualDeliveryTruckAccidents: 75,
    uniqueFacts: ["Smallest Delivery Truck market in US", "Ski season creates seasonal surges", "Burlington has majority of service"]
  },
  {
    name: "Virginia",
    abbr: "VA",
    slug: "virginia",
    statOfLimitations: "2 years",
    faultSystem: "Contributory negligence",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Contributory negligence makes recovery extremely difficult", "DC metro area extends into VA", "Dulles and Reagan airports have high Delivery Truck volume"],
    majorDeliveryTruckMarkets: ["Virginia Beach", "Norfolk", "Richmond", "Arlington", "Alexandria"],
    annualDeliveryTruckAccidents: 3400,
    uniqueFacts: ["Contributory negligence is major barrier to claims", "DC commuters create massive Northern Virginia demand", "Beach tourism drives Virginia Beach usage"]
  },
  {
    name: "Washington",
    abbr: "WA",
    slug: "washington",
    statOfLimitations: "3 years",
    faultSystem: "Pure comparative negligence",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 5550 established Commercial Vehicle framework", "Seattle has very high Delivery Truck usage", "Sea-Tac Airport is major Delivery Truck hub"],
    majorDeliveryTruckMarkets: ["Seattle", "Tacoma", "Spokane", "Bellevue"],
    annualDeliveryTruckAccidents: 4800,
    uniqueFacts: ["Seattle is one of top 10 Delivery Truck markets in US", "Tech industry drives high Delivery Truck adoption", "Pure comparative negligence favors victims"]
  },
  {
    name: "West Virginia",
    abbr: "WV",
    slug: "west-virginia",
    statOfLimitations: "2 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/25",
    deliveryTruckRegulations: "State-regulated since 2016",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2016,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["SB 539 established Commercial Vehicle rules", "Very limited coverage outside Charleston and Morgantown"],
    majorDeliveryTruckMarkets: ["Charleston", "Morgantown", "Huntington"],
    annualDeliveryTruckAccidents: 180,
    uniqueFacts: ["WVU campus drives Morgantown Delivery Truck demand", "Very limited rural coverage", "Mountain terrain creates unique driving hazards"]
  },
  {
    name: "Wisconsin",
    abbr: "WI",
    slug: "wisconsin",
    statOfLimitations: "3 years",
    faultSystem: "Modified comparative (51%)",
    minInsurance: "25/50/10",
    deliveryTruckRegulations: "State-regulated since 2015",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2015,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Act 278 established Commercial Vehicle framework", "Packers games create Green Bay surges", "Madison is major college market"],
    majorDeliveryTruckMarkets: ["Milwaukee", "Madison", "Green Bay"],
    annualDeliveryTruckAccidents: 1450,
    uniqueFacts: ["Packers football creates massive Green Bay surge demand", "UW-Madison campus has high student Delivery Truck usage", "Winter weather affects year-round safety"]
  },
  {
    name: "Wyoming",
    abbr: "WY",
    slug: "wyoming",
    statOfLimitations: "4 years",
    faultSystem: "Modified comparative (50%)",
    minInsurance: "25/50/20",
    deliveryTruckRegulations: "State-regulated since 2017",
    commercialVehicleLaw: true,
    commercialVehicleLawYear: 2017,
    deliveryTruckInsuranceTiers: {
      offDuty: "Driver's personal insurance",
      loadingZone: "$50,000 per person / $100,000 per accident",
      activeDelivery: "$1,000,000 liability coverage"
    },
    uniqueLaws: ["Very limited coverage statewide", "Tourism to Yellowstone drives Jackson demand"],
    majorDeliveryTruckMarkets: ["Cheyenne", "Casper", "Jackson"],
    annualDeliveryTruckAccidents: 45,
    uniqueFacts: ["Smallest population state with very limited Delivery Truck", "4-year statute of limitations is favorable", "Jackson Hole tourism creates seasonal spikes"]
  }
];

export function getStateBySlug(slug: string): State | undefined {
  return states.find(s => s.slug === slug);
}

export function getContributoryNegligenceStates(): State[] {
  return states.filter(s => s.faultSystem.toLowerCase().includes('contributory'));
}

export function getOneYearSOLStates(): State[] {
  return states.filter(s => s.statOfLimitations === '1 year');
}

export function getLongSOLStates(): State[] {
  return states.filter(s => {
    const years = parseInt(s.statOfLimitations);
    return years >= 4;
  });
}

export function getTopDeliveryTruckMarkets(): State[] {
  return states.filter(s => s.annualDeliveryTruckAccidents >= 5000).sort((a, b) => b.annualDeliveryTruckAccidents - a.annualDeliveryTruckAccidents);
}
