import { BarChart3, Boxes, Workflow } from "lucide-react";

export const projects = [
  {
    title: "Business Management System",
    previewTitle: "Business Overview",
    icon: BarChart3,
    tags: ["Business Management", ".NET", "Angular"],
    description:
      "For managing customers, sales, operations, and everyday business activities in one centralized application.",
    benefits: [
      "Centralized business information",
      "Organized daily operations",
      "A foundation for business reporting",
    ],
    previewStats: [
      { label: "Customers", value: "128" },
      { label: "Orders", value: "186" },
      { label: "Tasks", value: "42" },
    ],
  },
  {
    title: "Inventory Management System",
    previewTitle: "Inventory Overview",
    icon: Boxes,
    tags: ["Inventory", "EF Core", "SQL Server"],
    description:
      "For tracking products, stock movements, purchases, and inventory levels.",
    benefits: [
      "Organized product records",
      "Clear stock movement history",
      "Inventory visibility",
    ],
    previewStats: [
      { label: "Products", value: "128" },
      { label: "In Stock", value: "94" },
      { label: "Alerts", value: "08" },
    ],
  },
  {
    title: "Workflow & Approval System",
    previewTitle: "Workflow Overview",
    icon: Workflow,
    tags: ["Automation", "ASP.NET Core", "API"],
    description:
      "For managing requests, approval stages, notifications, and task progress.",
    benefits: [
      "Visible approval stages",
      "Consistent process tracking",
      "Structured activity history",
    ],
    previewStats: [
      { label: "Requests", value: "64" },
      { label: "Pending", value: "12" },
      { label: "Completed", value: "52" },
    ],
  },
];