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
              features: [
                "Modern syntax that enhances readability and reduces code complexity.",
                "Strong type safety helps prevent errors at compile time.",
                "Interoperability with Objective-C allows for gradual migration of existing projects.",
                "Rich set of libraries and frameworks provided by Apple to streamline development.",
              ],
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
              features: [
                "Concise syntax reduces boilerplate code compared to Java.",
                "Null safety feature minimizes the risk of null pointer exceptions.",
                "Seamless integration with existing Java codebases allows for easy adoption.",
                "Supports functional programming features which enhance code flexibility.",
              ],
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
              features: [
                "Optimized for UI development with a rich set of built-in libraries.",
                "Hot reload feature allows developers to see changes instantly during development.",
                "Strong support for asynchronous programming simplifies handling of concurrent tasks.",
                "Compiles to native code for high performance on both iOS and Android platforms.",
              ],
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
              features: [
                "Declarative syntax simplifies UI design by allowing developers to describe what the UI should do.",
                "Automatic support for dark mode and accessibility features enhances user experience.",
                "Integration with Combine framework allows for reactive programming patterns in UI updates.",
                "Live previews in Xcode enable real-time feedback while designing interfaces.",
              ],
            },
          },
        ],
      },
    },
  ],
};
