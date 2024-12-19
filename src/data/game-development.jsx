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
            features: [
              "Cross-platform compatibility allows games to run on various devices including Windows, macOS, and mobile platforms[1][3].",
              "Robust class library provides pre-written code snippets that speed up development.",
              "Automatic memory management reduces the risk of memory leaks.",
              "Simplified syntax enhances developer productivity and reduces coding errors.",
            ],
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
            features: [
              "Supports both 2D and 3D game development with a comprehensive set of tools.",
              "Large asset store provides access to thousands of assets and plugins to enhance game development.",
              "Cross-platform deployment enables easy publishing to multiple platforms from a single codebase.",
              "Strong community support with extensive resources for learning and troubleshooting.",
            ],
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
            features: [
              "High-fidelity graphics capabilities suitable for AAA game development.",
              "Blueprint visual scripting system allows developers to create gameplay mechanics without extensive coding knowledge.",
              "Robust physics engine enhances realism in gameplay interactions.",
              "Extensive documentation and community resources facilitate learning and development.",
            ],
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
            features: [
              "Open-source nature allows for complete customization and flexibility in game development.",
              "Lightweight engine with a small footprint suitable for indie developers.",
              "Supports multiple programming languages including GDScript, C#, and VisualScript.",
              "Intuitive scene system makes it easy to manage complex game structures.",
            ],
          },
        },
      ],
    },
  ],
};
