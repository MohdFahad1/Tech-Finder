import { MonitorSmartphone } from "lucide-react";

export const categoryData = {
  name: "Cross Platform Development",
  description:
    "Developing applications that work across multiple platforms with one codebase.",
  icon: <MonitorSmartphone className="w-6 h-6  text-gray-900" />,
  path: "/browse/cross-platform",
  subCategories: [
    {
      name: "Frontend",
      path: "frontend",
    },
    {
      name: "Tooling",
      path: "tooling",
    },
    {
      name: "Databases",
      path: "databases",
    },
  ],
};
