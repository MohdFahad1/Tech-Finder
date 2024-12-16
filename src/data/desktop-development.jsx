import { CSharpIcon, ElectronIcon, FlutterIcon } from "@/components/icons";
import { Monitor } from "lucide-react";

export const categoryData = {
  name: "Desktop Development",
  description:
    "Designing and implementing software that runs natively on desktop operating systems.",
  icon: <Monitor className="w-6 h-6 text-gray-900" />,
  path: "/browse/desktop-development",
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
      name: "Frameworks",
      path: "frameworks",
      items: [
        {
          name: "Electron",
          slug: "electron",
          url: "https://electronjs.org/",
          icon: ElectronIcon,
          tags: ["Framework"],
          overview: {
            description:
              "Build cross-platform desktop apps with JavaScript, HTML, and CSS.",
          },
        },
        {
          name: "Flutter",
          slug: "flutter",
          url: "https://flutter.dev/",
          icon: FlutterIcon,
          tags: ["Framework"],
          overview: {
            description:
              "Flutter transforms the entire app development process. Build, test, and deploy beautiful mobile, web, desktop, and embedded apps from a single codebase.",
          },
        },
      ],
    },
  ],
};
