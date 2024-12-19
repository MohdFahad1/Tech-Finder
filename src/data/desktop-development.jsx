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
            features: [
              "Strongly typed language with rich type inference and advanced features like async/await for asynchronous programming.",
              "Integrated with the .NET ecosystem, providing access to a vast library of frameworks and tools.",
              "Cross-platform capabilities with .NET Core, allowing development for Windows, macOS, and Linux.",
              "Robust support for object-oriented programming principles, making it suitable for large-scale applications.",
            ],
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
            features: [
              "Leverages web technologies (JavaScript, HTML, CSS) to create desktop applications, making it accessible to web developers.",
              "Supports automatic updates and packaging for easy distribution across platforms.",
              "Integration with Node.js allows access to native OS features and APIs.",
              "Active community and a rich ecosystem of plugins enhance functionality and ease of development.",
            ],
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
            features: [
              "Offers a rich set of customizable widgets that enable expressive UI design across platforms.",
              "Compiles to native code for high performance on desktop environments.",
              "Hot reload feature allows developers to see changes in real-time during development.",
              "Strong community support with extensive documentation and resources available.",
            ],
          },
        },
      ],
    },
  ],
};
