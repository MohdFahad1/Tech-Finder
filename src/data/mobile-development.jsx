import { Smartphone } from "lucide-react";

export const categoryData = {
  name: "Mobile Development",
  description: "Creating apps for mobile devices like smartphones and tablets.",
  icon: <Smartphone className="w-6 h-6 text-gray-900" />,
  path: "/browse/mobile",
  subCategories: [
    {
      name: "Frontend", // Correct name
      path: "frontend",
      item: {
        // Use 'item' instead of 'items'
        Languages: [
          {
            name: "Swift",
            slug: "swift",
            url: "https://developer.apple.com/swift/",
            // icon: SwiftIcon,
          },
          {
            name: "Kotlin",
            slug: "kotlin",
            url: "https://kotlinlang.org/",
            // icon: KotlinIcon,
          },
          {
            name: "Dart",
            slug: "dart",
            url: "https://dart.dev/",
            // icon: DartIcon,
          },
        ],
        Frameworks: [
          {
            name: "SwiftUI",
            slug: "swiftui",
            url: "https://developer.apple.com/documentation/swiftui",
            // icon: AppleIcon,
          },
        ],
      },
    },
  ],
};
