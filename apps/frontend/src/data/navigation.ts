import type { MegaMenuColumn, NavItem } from "@/types/navigation";

export const mainNavigation: NavItem[] = [
  { title: "Products", href: "/products", hasMegaMenu: true },
  { title: "Solutions", href: "/solutions" },
  { title: "OEM/ODM", href: "/oem" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export const productMegaMenu: MegaMenuColumn[] = [
  {
    title: "Video Surveillance",
    href: "/products/video-surveillance",
    links: [
      { title: "IP Cameras", href: "/products/video-surveillance" },
      { title: "PTZ Cameras", href: "/products/video-surveillance" },
      { title: "Solar Cameras", href: "/products/video-surveillance" },
      { title: "NVR", href: "/products/video-surveillance" },
      { title: "Camera Brackets", href: "/products/video-surveillance" },
    ],
  },
  {
    title: "Access Control",
    href: "/products/access-control",
    links: [
      { title: "Time Attendance", href: "/products/access-control" },
      { title: "RFID Reader", href: "/products/access-control" },
      { title: "RFID Card", href: "/products/access-control" },
      { title: "Electric Lock", href: "/products/access-control" },
      { title: "Video Doorbell", href: "/products/access-control" },
      { title: "Access Power Supply", href: "/products/access-control" },
    ],
  },
  {
    title: "Smart Home",
    href: "/products/smart-home",
    links: [
      { title: "Smart Lock", href: "/products/smart-home" },
      { title: "Smart Intercom", href: "/products/smart-home" },
      { title: "Lighting", href: "/products/smart-home" },
      { title: "Sensors", href: "/products/smart-home" },
      { title: "Gateway Control", href: "/products/smart-home" },
      { title: "Energy", href: "/products/smart-home" },
    ],
  },
  {
    title: "Parking Management",
    href: "/products/parking-management",
    links: [
      { title: "Barrier Gate", href: "/products/parking-management" },
      { title: "Turnstile", href: "/products/parking-management" },
      { title: "LPR Camera", href: "/products/parking-management" },
    ],
  },
  {
    title: "Inspection Security",
    href: "/products/inspection-security",
    links: [
      { title: "Handheld Metal Detector", href: "/products/inspection-security" },
      { title: "Walk Through Metal Detector", href: "/products/inspection-security" },
      { title: "X-Ray Scanner", href: "/products/inspection-security" },
    ],
  },
  {
    title: "More Products",
    href: "/products",
    links: [
      { title: "Alarm Systems", href: "/products/alarm-systems" },
      { title: "Body Worn", href: "/products/body-worn" },
      { title: "Solar & Energy", href: "/products/solar-energy" },
    ],
  },
];
