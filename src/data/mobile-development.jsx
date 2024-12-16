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
            overview: {
              description:
                "Swift is a powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS. Writing Swift code is interactive and fun, the syntax is concise yet expressive, and Swift includes modern features developers love.",
            },
          },
          {
            name: "Kotlin",
            slug: "kotlin",
            url: "https://kotlinlang.org/",
            icon: KotlinIcon,
            tags: ["Language", "Android"],
            overview: {
              description:
                "Kotlin is a programming language that makes coding concise, cross-platform, and fun. It is Google’s preferred language for Android app development.",
            },
          },
          {
            name: "Dart",
            slug: "dart",
            url: "https://dart.dev/",
            icon: DartIcon,
            tags: ["Language", "IOS", "Android"],
            overview: {
              description:
                "Dart is an approachable, portable, and productive language for high-quality apps on any platform.",
            },
          },
        ],
        Frameworks: [
          {
            name: "SwiftUI",
            slug: "swiftui",
            url: "https://developer.apple.com/documentation/swiftui",
            icon: AppleIcon,
            tags: ["Framework", "IOS"],
            overview: {
              description:
                "Declare the user interface and behavior for your app on every platform.",
            },
          },
        ],
      },
    },
  ],
};
