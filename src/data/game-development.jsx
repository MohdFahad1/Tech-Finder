import { Gamepad2 } from "lucide-react";

export const categoryData = {
  name: "Game Development",
  description:
    "Crafting interactive games for various platforms, including consoles, PCs, and mobile.",
  icon: <Gamepad2 className="w-6 h-6  text-gray-900" />,
  path: "/browse/game-development",
  subCategories: [
    {
      name: "Languages",
      path: "languages",
    },
    {
      name: "Engines",
      path: "engines",
    },
    {
      name: "Middleware",
      path: "middleware",
    },
  ],
};
