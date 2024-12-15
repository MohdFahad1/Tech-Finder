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
          },
          {
            name: "Flutter",
            slug: "flutter",
            url: "https://flutter.dev/",
            icon: FlutterIcon,
          },
          {
            name: "Electron",
            slug: "electron",
            url: "https://electronjs.org/",
            icon: ElectronIcon,
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
        },
        {
          name: "Create Expo Stack",
          slug: "create-expo-stack",
          url: "https://createexpostack.com/",
          icon: CreateExpoStackIcon,
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
          },
        ],
      },
    },
  ],
};
