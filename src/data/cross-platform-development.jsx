import {
  CreateExpoStackIcon,
  ElectronIcon,
  ExpoIcon,
  FlutterIcon,
  ReactNativeIcon,
  WatermelonDBIcon,
} from "@/components/icons";
import { MonitorSmartphone } from "lucide-react";

export const categoryData = {
  name: "Cross Platform Development",
  description:
    "Developing applications that work across multiple platforms with one codebase.",
  icon: <MonitorSmartphone className="w-6 h-6 text-gray-900" />,
  path: "/browse/cross-platform",
  subCategories: [
    {
      name: "Frontend",
      path: "frontend",
      items: {
        Frameworks: [
          {
            name: "React Native",
            slug: "react-native",
            url: "https://reactnative.dev/",
            icon: ReactNativeIcon,
            tags: ["Framework"],
            overview: {
              description: "A framework for building native apps using React.",
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
        ],
      },
    },
    {
      name: "Tooling",
      path: "tooling",
      items: [
        {
          name: "Expo",
          slug: "expo",
          url: "https://expo.dev/",
          icon: ExpoIcon,
          tags: ["Tool"],
          overview: {
            description:
              "Expo is an open-source platform for making universal native apps for Android, iOS, and the web with JavaScript and React.",
          },
        },
        {
          name: "Create Expo Stack",
          slug: "create-expo-stack",
          url: "https://createexpostack.com/",
          icon: CreateExpoStackIcon,
          tags: ["CLI"],
          overview: {
            description: "The most configurable way to create an Expo app.",
          },
        },
      ],
    },
    {
      name: "Databases",
      path: "databases",
      items: {
        Frameworks: [
          {
            name: "WatermelonDB",
            slug: "watermelondb",
            url: "https://watermelondb.dev/docs",
            icon: WatermelonDBIcon,
            tags: ["Database"],
            overview: {
              description: "A framework for building native apps using React.",
            },
          },
        ],
      },
    },
  ],
};
