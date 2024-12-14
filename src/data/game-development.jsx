import { Gamepad2 } from "lucide-react";

export const categoryData = {
  name: "Game Development",
  description:
    "Crafting interactive games for various platforms, including consoles, PCs, and mobile.",
  icon: <Gamepad2 className="w-6 h-6 text-gray-900" />,
  path: "/browse/game-development",
  subCategories: [
    {
      name: "Languages",
      path: "languages",
      items: [
        {
          name: "C#",
          slug: "csharp",
          url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
          // icon: CSharpIcon,
        },
      ],
    },
    {
      name: "Engines",
      path: "engines",
      items: [
        {
          name: "Unity",
          slug: "unity",
          url: "https://unity.com/",
          // icon: UnityIcon,
        },
        {
          name: "Unreal Engine",
          slug: "unreal-engine",
          url: "https://unrealengine.com/",
          // icon: UnrealEngineIcon,
        },
        {
          name: "Godot",
          slug: "godot",
          url: "https://godotengine.org/",
          // icon: GodotIcon,
        },
      ],
    },
  ],
};
