import {
  CSharpIcon,
  GodotIcon,
  UnityIcon,
  UnrealEngineIcon,
} from "@/components/icons";
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
          icon: CSharpIcon,
          tags: ["Language"],
          overview: {
            description:
              "C# is a versatile, object-oriented programming language developed by Microsoft, used for developing a wide range of applications including web, mobile, and desktop applications.",
          },
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
          icon: UnityIcon,
          tags: ["Engine"],
          overview: {
            description:
              "Create and grow real-time 3D games, apps, and experiences for entertainment, film, automotive, architecture, and more. Get started with Unity today.",
          },
        },
        {
          name: "Unreal Engine",
          slug: "unreal-engine",
          url: "https://unrealengine.com/",
          icon: UnrealEngineIcon,
          tags: ["Engine"],
          overview: {
            description:
              "Unreal Engine is the world's most open and advanced real-time 3D creation tool for photoreal visuals and immersive experiences.",
          },
        },
        {
          name: "Godot",
          slug: "godot",
          url: "https://godotengine.org/",
          icon: GodotIcon,
          tags: ["Engine"],
          overview: {
            description:
              "Godot provides a huge set of common tools, so you can just focus on making your game without reinventing the wheel.",
          },
        },
      ],
    },
  ],
};
