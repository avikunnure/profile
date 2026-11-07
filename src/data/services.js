import {
  Workflow,
  BarChart3,
  Blocks,
  Plug,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

export const services = [
  {
    number: "01",
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Reduce repetitive tasks and manual work. Automate approvals, notifications, data entry, and everyday business processes.",
    color: "bg-violet-100 text-violet-700",
    examples: [
      "Approval workflows",
      "Task automation",
      "Document processing",
    ],
  },
  {
    number: "02",
    icon: BarChart3,
    title: "Reports & Business Dashboards",
    description:
      "Turn business data into useful information. Get clear reports and dashboards that help you understand performance.",
    color: "bg-sky-100 text-sky-700",
    examples: [
      "Sales reports",
      "Financial dashboards",
      "Management reports",
    ],
  },
  {
    number: "03",
    icon: Blocks,
    title: "Custom Business Applications",
    description:
      "Get software designed around how your business works instead of changing your processes to fit generic software.",
    color: "bg-orange-100 text-orange-700",
    examples: [
      "Inventory systems",
      "Administration portals",
      "Business management applications",
    ],
  },
  {
    number: "04",
    icon: Plug,
    title: "API & System Integration",
    description:
      "Connect your existing applications and services so information moves between systems with less manual effort.",
    color: "bg-emerald-100 text-emerald-700",
    examples: [
      "Payment integration",
      "Third-party APIs",
      "System synchronization",
    ],
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Existing Software Improvement",
    description:
      "Improve your current applications through performance optimization, bug fixing, and new features.",
    color: "bg-pink-100 text-pink-700",
    examples: [
      "Application modernization",
      "Performance improvements",
      "Security enhancements",
    ],
  },
  {
    number: "06",
    icon: RefreshCw,
    title: "Ongoing Development & Support",
    description:
      "Keep your software reliable and up to date with continuous improvements, maintenance, and technical assistance.",
    color: "bg-amber-100 text-amber-700",
    examples: [
      "Monthly maintenance",
      "Feature enhancements",
      "Technical support",
    ],
  },
];