import { Laptop } from "lucide-react";

export const categoryData = {
  name: "Web Development",
  description: "Building and maintaining websites and web applications.",
  icon: <Laptop className="w-6 h-6  text-gray-900" />,
  path: "/browse/web",
  subCategories: [
    {
      name: "Auth",
      path: "auth",
    },
    {
      name: "Frontend",
      path: "frontend",
    }, // BACKEND
    {
      name: "Backend",
      path: "backend",
    },
    // FULLSTACK
    {
      name: "Fullstack",
      path: "fullstack",
    },
    // DATABASES
    {
      name: "Database",
      path: "database",
    },
    //STATE MANAGEMENT
    {
      name: "State Management",
      path: "state-management",
    },
    // STORAGE
    {
      name: "Storage",
      path: "storage",
    },
    // CMS
    {
      name: "CMS",
      path: "cms",
    },
    // PAYMENTS
    {
      name: "Payments",
      path: "payments",
    },
    // HOSTING
    {
      name: "Hosting",
      path: "hosting",
    },
    // TESTING
    {
      name: "Testing",
      path: "testing",
    },
    // ANALYTICS
    {
      name: "Analytics",
      path: "analytics",
    },
    // DOCS
    {
      name: "Docs",
      path: "docs",
    },
    // FEEDBACK
    {
      name: "Feedback",
      path: "feedback",
    },
    // TESTIMONIALS
    {
      name: "Testimonials",
      path: "testimonials",
    },
  ],
};
