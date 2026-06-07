export interface Product {
  id: string;
  name: string;
  model: string;
  category: string; // 匹配分类的 slug
  summary: string;
  image: string;
  specifications: Record<string, string>;
}

export const productCategories = [
  {
    "title": "Video Surveillance",
    "slug": "video-surveillance",
    "description": "IP cameras, PTZ cameras, solar cameras, NVR and accessories."
  },
  {
    "title": "Access Control",
    "slug": "access-control",
    "description": "RFID readers, electric locks, attendance, doorbells and access power."
  },
  {
    "title": "Smart Home",
    "slug": "smart-home",
    "description": "Smart locks, intercom, lighting, sensors, gateway and energy products."
  },
  {
    "title": "Parking Management",
    "slug": "parking-management",
    "description": "Barrier gates, turnstiles, LPR and parking controllers."
  },
  {
    "title": "Inspection Security",
    "slug": "inspection-security",
    "description": "Metal detectors, walk-through gates and X-ray scanners."
  },
  {
    "title": "Alarm Systems",
    "slug": "alarm-systems",
    "description": "Alarm accessories, detectors, sirens and panels."
  },
  {
    "title": "Body Worn",
    "slug": "body-worn",
    "description": "Body cameras, docking stations and evidence management."
  },
  {
    "title": "Solar & Energy",
    "slug": "solar-energy",
    "description": "Solar panels, batteries, controllers and solar security kits."
  }
];

export const products: Product[] = [
  {
    id: "hsw-ir-01",
    name: "Active Infrared Access Control Inductive Sensor Switch",
    model: "HSW-IR01",
    category: "access-control",
    summary: "Brushed stainless steel touchless exit button with hand wave motion sensor for automatic door control.",
    image: "/logo/haswell-logo.png",
    specifications: {
      "Detection Distance": "5-15 cm adjustable",
      "Material": "Brushed Stainless Steel Panel",
      "Input Voltage": "DC 12-24V",
      "Output Contact": "NO/NC/COM",
      "Waterproof Level": "IP55 Rated"
    }
  },
  {
    id: "hsw-sl-01",
    name: "Enterprise Dual-System Smart Deadbolt Lock",
    model: "HSW-SL01",
    category: "smart-home",
    summary: "Premium smart cylinder lock supporting fingerprint, RFID card, passcode, App and mechanical backup keys.",
    image: "/logo/haswell-logo.png",
    specifications: {
      "Unlocking Methods": "Fingerprint / Card / Passcode / App / Key",
      "Power Supply": "4x AA Batteries (Backup USB Type-C)",
      "Battery Life": "Up to 12 Months",
      "Applicable Door Thickness": "35-55 mm"
    }
  },
  {
    id: "hsw-sc-01",
    name: "B2B Solar Powered 4G Security Camera",
    model: "HSW-SC01",
    category: "video-surveillance",
    summary: "100% wire-free outdoor security camera with solar panel charger, PIR motion detection and 4G LTE.",
    image: "/logo/haswell-logo.png",
    specifications: {
      "Resolution": "4MP Ultra HD",
      "Solar Panel": "6W Monocrystalline Silicon",
      "Battery Capacity": "10400mAh Rechargeable Lithium",
      "Connectivity": "4G LTE / Wi-Fi",
      "Night Vision": "Full Color up to 30m"
    }
  }
];
