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
              features: [
                "Leverages the power of React to build mobile applications with a familiar syntax.",
                "Supports hot reloading for faster development and iteration.",
                "Access to native components and APIs for a more authentic user experience.",
                "Strong community support with a rich ecosystem of libraries and tools.",
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
                "Provides a rich set of pre-designed widgets that allow for expressive UI designs.",
                "Compiles to native code for high performance across platforms.",
                "Hot reload feature enables quick iterations during development.",
                "Strong community and extensive documentation to assist developers.",
              ],
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
              features: [
                "Allows developers to use web technologies to create desktop applications.",
                "Supports automatic updates and packaging for distribution across platforms.",
                "Access to native OS APIs through Node.js integration.",
                "Large ecosystem of plugins and tools to enhance functionality.",
              ],
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
            features: [
              "Simplifies the development process with a managed workflow for building apps.",
              "Provides a set of APIs that make it easy to access device features like camera and location.",
              "Includes an online app store for sharing your projects easily with others.",
              "Supports over-the-air updates to quickly deploy changes without going through app stores.",
            ],
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
            features: [
              "Highly configurable CLI tool that streamlines the setup process for new Expo projects.",
              "Supports various templates to kickstart different types of applications quickly.",
              "Integrates seamlessly with popular libraries and frameworks used in Expo development.",
              "Facilitates easy management of dependencies and project structure.",
            ],
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
              description:
                "A reactive database for building complex applications in React Native and other frameworks.",
              features: [
                "Optimized for performance with lazy loading and background synchronization capabilities.",
                "Supports complex queries while maintaining a simple API for developers.",
                "Built-in support for offline-first applications, ensuring data persistence even without internet access.",
                "Reactive data binding allows automatic updates in the UI when the underlying data changes.",
              ],
            },
          },
        ],
      },
    },
  ],
};
