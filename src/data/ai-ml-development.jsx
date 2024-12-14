import { Sparkle } from "lucide-react";

export const categoryData = {
  name: "AI & ML Development",
  description:
    "Building algorithms and models for tasks that require human-like cognition and learning.",
  icon: <Sparkle className="w-6 h-6 text-gray-900" />,
  path: "/browse/ai-ml-development",
  subCategories: [
    {
      name: "Languages",
      path: "languages",
    },
    {
      name: "Libraries",
      path: "libraries",
    },
    {
      name: "Frameworks",
      path: "frameworks",
    },
  ],
};
