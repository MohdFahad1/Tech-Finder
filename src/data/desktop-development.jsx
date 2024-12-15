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
        },
        {
          name: "Flutter",
          slug: "flutter",
          url: "https://flutter.dev/",
          icon: FlutterIcon,
        },
      ],
    },
  ],
};
