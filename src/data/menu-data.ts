import { MenuItem } from "@/types/menu-d-type";

const menuData: MenuItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Solutions",
    href: "/solutions",
    children: [
      { title: "Residential Solar + AI", href: "/solutions/residential-solar" },
      {
        title: "Commercial & Industrial Solar",
        href: "/solutions/commercial-solar",
      },
      {
        title: "Smart Grid & Virtual Power Plant",
        href: "/solutions/smart-grid",
      },
      {
        title: "AI Monitoring & Predictive Maintenance",
        href: "/solutions/ai-monitoring",
      },
      {
        title: "Data Insights & Weather Forecasting",
        href: "/solutions/data-insights",
      },
      {
        title: "Cloud Dashboard & Multi-site Management",
        href: "/solutions/cloud-dashboard",
      },
    ],
  },
  {
    title: "Billing & Blockchain",
    href: "/billing-blockchain",
    children: [
      { title: "AI Payment Engine", href: "/billing-blockchain/ai-payment-engine" },
      { title: "Blockchain Security", href: "/billing-blockchain/blockchain-security" },
      { title: "Transparency", href: "/billing-blockchain/transparency" },
    ],
  },
  {
    title: "Case Studies",
    href: "#",
    children: [
      { title: "Flag Ship Products", href: "/case-studies/flag-ship-products" },
      { title: "Success Stories", href: "/case-studies/success-stories" },
    ],
  },
  { title: "Sustaintability", href: "/sustainability" },
  { title: "Partners", href: "/partners" },
  {
    title: "More",
    href: "#",
    children: [
      { title: "About", href: "/about-suncube-ai" },
      { title: "Blog", href: "/suncube-ai-blog" },
      { title: "Contact", href: "/contact-suncube-ai" },
      { title: "Our Commitment", href: "/our-commitment" },
    ],
  },
];
export default menuData;