import { AppleIcon, DartIcon, KotlinIcon, SwiftIcon } from "@/components/icons";
import { Smartphone } from "lucide-react";

export const categoryData = {
  name: "Mobile Development",
  description: "Creating apps for mobile devices like smartphones and tablets.",
  icon: <Smartphone className="w-6 h-6 text-gray-900" />,
  path: "/browse/mobile",
  subCategories: [
    {
      name: "Frontend",
      path: "frontend",
      items: {
        Languages: [
          {
            name: "Swift",
            slug: "swift",
            url: "https://developer.apple.com/swift/",
            icon: SwiftIcon,
            tags: ["Language", "IOS"],
          },
          {
            name: "Kotlin",
            slug: "kotlin",
            url: "https://kotlinlang.org/",
            icon: KotlinIcon,
            tags: ["Language", "Android"],
          },
          {
            name: "Dart",
            slug: "dart",
            url: "https://dart.dev/",
            icon: DartIcon,
            tags: ["Language", "IOS", "Android"],
          },
        ],
        Frameworks: [
          {
            name: "SwiftUI",
            slug: "swiftui",
            url: "https://developer.apple.com/documentation/swiftui",
            icon: AppleIcon,
            tags: ["Framework", "IOS"],
          },
        ],
      },
    },
  ],
};
