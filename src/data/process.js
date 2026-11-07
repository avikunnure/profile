import {
  MessageCircle,
  ClipboardList,
  Hammer,
  Rocket,
} from "lucide-react";

export const processSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Discover",
    description:
      "Understand your business, challenges, requirements, and goals.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plan",
    description:
      "Define the solution, scope, priorities, timeline, and delivery milestones.",
    color: "bg-sky-100 text-sky-700",
  },
  {
    number: "03",
    icon: Hammer,
    title: "Develop",
    description:
      "Build, test, and refine the application with regular progress updates.",
    color: "bg-orange-100 text-orange-700",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Deliver",
    description:
      "Launch your solution and provide guidance for using it effectively.",
    color: "bg-emerald-100 text-emerald-700",
  },
];