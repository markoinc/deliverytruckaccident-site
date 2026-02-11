export interface Resource {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
}

export const resources: Resource[] = [
  {
    slug: "what-to-do-after-delivery-truck-accident",
    title: "What to Do After a Delivery Truck Accident",
    description: "Step-by-step guide on what to do immediately after being involved in a delivery truck or commercial van accident.",
    category: "Guides",
    readTime: "10 min"
  },
  {
    slug: "amazon-delivery-truck-accidents",
    title: "Amazon Delivery Truck Accidents: Your Rights",
    description: "Understanding liability when Amazon DSP drivers cause accidents and how to file claims against Amazon.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "fedex-ups-accident-claims",
    title: "FedEx and UPS Accident Claims Guide",
    description: "How to pursue compensation after accidents with FedEx Ground, FedEx Express, or UPS delivery vehicles.",
    category: "Guides",
    readTime: "11 min"
  },
  {
    slug: "delivery-driver-fatigue",
    title: "Delivery Driver Fatigue Accidents",
    description: "How tight schedules and long hours lead to fatigued driving and what victims can claim.",
    category: "Causes",
    readTime: "8 min"
  },
  {
    slug: "commercial-delivery-insurance",
    title: "Commercial Delivery Van Insurance Coverage",
    description: "Understanding commercial auto policies, minimum coverage requirements, and claims processes.",
    category: "Insurance",
    readTime: "9 min"
  },
  {
    slug: "last-mile-delivery-accidents",
    title: "Last-Mile Delivery Accident Claims",
    description: "Legal issues specific to last-mile delivery crashes in residential neighborhoods.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "delivery-truck-laws-by-state",
    title: "Delivery Truck Laws by State",
    description: "State-by-state breakdown of commercial vehicle regulations and delivery driver requirements.",
    category: "Legal Info",
    readTime: "15 min"
  },
  {
    slug: "statute-of-limitations",
    title: "Delivery Truck Accident Statute of Limitations",
    description: "Time limits for filing delivery truck accident claims in all 50 states plus DC.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "delivery-accident-checklist",
    title: "Delivery Truck Accident Checklist",
    description: "Printable checklist of everything to do after a delivery truck accident to protect your rights.",
    category: "Checklists",
    readTime: "5 min"
  },
  {
    slug: "company-liability-for-drivers",
    title: "Company Liability for Delivery Drivers",
    description: "When delivery companies are liable for their drivers' negligence: employee vs contractor issues.",
    category: "Legal Info",
    readTime: "10 min"
  },
  {
    slug: "finding-delivery-truck-accident-lawyer",
    title: "How to Find a Delivery Truck Accident Lawyer",
    description: "What to look for when hiring an attorney for your delivery truck accident case.",
    category: "Guides",
    readTime: "7 min"
  },
  {
    slug: "delivery-truck-settlement-guide",
    title: "Delivery Truck Accident Settlement Guide",
    description: "Understanding the settlement process, typical values, and how to maximize your compensation.",
    category: "Guides",
    readTime: "12 min"
  },
  {
    slug: "medical-treatment-guide",
    title: "Medical Treatment After Delivery Truck Accidents",
    description: "Guide to seeking and documenting medical treatment to support your accident claim.",
    category: "Guides",
    readTime: "9 min"
  },
  {
    slug: "food-delivery-accidents",
    title: "Food Delivery Driver Accidents",
    description: "Legal issues with DoorDash, Instacart, Uber Eats, and other food delivery accidents.",
    category: "Guides",
    readTime: "8 min"
  },
  {
    slug: "comparative-negligence-guide",
    title: "Comparative Negligence in Delivery Truck Claims",
    description: "How fault is divided in delivery truck accidents and how it affects your compensation.",
    category: "Legal Info",
    readTime: "8 min"
  },
  {
    slug: "blind-spot-delivery-accidents",
    title: "Delivery Truck Blind Spot Accidents",
    description: "Understanding blind spot dangers with large delivery vehicles and proving liability.",
    category: "Causes",
    readTime: "7 min"
  },
  {
    slug: "autonomous-delivery-vehicles",
    title: "Autonomous Delivery Vehicle Accidents",
    description: "Legal issues unique to accidents involving self-driving delivery robots and vehicles.",
    category: "Legal Info",
    readTime: "10 min"
  }
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find(r => r.slug === slug);
}

export function getResourcesByCategory(category: string): Resource[] {
  return resources.filter(r => r.category === category);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map(r => r.category))];
}
