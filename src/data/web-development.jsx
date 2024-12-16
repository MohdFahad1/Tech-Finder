import {
  AceternityUIIcon,
  AngularIcon,
  AntDesignIcon,
  AppwriteIcon,
  AstroIcon,
  Auth0Icon,
  ChakraIcon,
  ClerkIcon,
  CloudinaryIcon,
  ConvexIcon,
  CssIcon,
  DasiyUIIcon,
  DjangoIcon,
  DrizzleIcon,
  FirebaseIcon,
  FlaskIcon,
  GoIcon,
  HerokuIcon,
  HtmlIcon,
  HtmxIcon,
  JavaIcon,
  JavaScriptIcon,
  JestIcon,
  JqueryIcon,
  KindeIcon,
  LaravelIcon,
  LuciaIcon,
  MaterialUIIcon,
  MongoDBIcon,
  NeonIcon,
  NestJsIcon,
  NetlifyIcon,
  NextJsIcon,
  NextUIIcon,
  NuxtIcon,
  PhpIcon,
  PlaywrightIcon,
  PrismaIcon,
  PythonIcon,
  RadixIcon,
  RailwayIcon,
  ReactIcon,
  RecoilIcon,
  ReduxIcon,
  RemixIcon,
  RenderIcon,
  RubyIcon,
  RubyOnRailsIcon,
  ShadcnIcon,
  SolidJSIcon,
  StripeIcon,
  StyledComponentsIcon,
  SupabaseIcon,
  SvelteIcon,
  SyntaxUIIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  UploadThingIcon,
  VercelIcon,
  VueIcon,
  ZustandIcon,
} from "@/components/icons";
import { Laptop } from "lucide-react";

export const categoryData = {
  name: "Web Development",
  description: "Building and maintaining websites and web applications.",
  icon: <Laptop className="w-6 h-6 text-gray-900" />,
  path: "/browse/web",
  subCategories: [
    {
      name: "Auth",
      path: "auth",
      items: [
        {
          name: "Clerk",
          slug: "clerk",
          url: "https://clerk.com/",
          icon: ClerkIcon,
          tags: ["Auth"],
          overview: {
            description:
              "The easiest way to add authentication and user management to your application. Purpose-built for React, Next.js, Remix, and 'The Modern Web'.",
          },
        },
        {
          name: "Kinde",
          slug: "kinde",
          url: "https://kinde.com/",
          icon: KindeIcon,
          tags: ["Auth"],
          overview: {
            description:
              "Simple, powerful authentication you can integrate with your product in minutes.",
          },
        },
        {
          name: "Auth0",
          slug: "auth0",
          url: "https://auth0.com/",
          icon: Auth0Icon,
          tags: ["Auth"],
          overview: {
            description:
              "Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business.",
          },
        },
        {
          name: "Supabase Auth",
          slug: "supabase-auth",
          url: "https://supabase.com/docs/guides/auth",
          icon: SupabaseIcon,
          tags: ["Auth"],
          overview: {
            description:
              "Use Supabase to authenticate and authorize your users.",
          },
        },
        {
          name: "Firebase Authentication",
          slug: "firebase-authentication",
          url: "https://firebase.google.com/docs/auth",
          icon: FirebaseIcon,
          tags: ["Auth"],
          overview: {
            description:
              "Firebase Authentication lets you add an end-to-end identity solution to your app for easy user authentication, sign-in, and onboarding in just a few lines of code.",
          },
        },
        {
          name: "Lucia",
          slug: "lucia",
          url: "https://lucia-auth.com/",
          icon: LuciaIcon,
          tags: ["Auth"],
          overview: {
            description:
              "Lucia is a simple and flexible auth library for TypeScript.",
          },
        },
      ],
    },
    {
      name: "Frontend",
      path: "frontend",
      items: {
        Languages: [
          {
            name: "HTML",
            slug: "html",
            url: "https://en.wikipedia.org/wiki/HTML",
            icon: HtmlIcon,
            tags: ["Language"],
            overview: {
              description:
                "HTML is the standard markup language used to create web pages. It provides the basic structure of sites, which is then enhanced and modified by other technologies like CSS and JavaScript.",
            },
          },
          {
            name: "CSS",
            slug: "css",
            url: "https://en.wikipedia.org/wiki/CSS",
            icon: CssIcon,
            tags: ["Language"],
            overview: {
              description:
                "CSS is used for styling and laying out web pages—like colors, fonts, and spacing. It allows developers to adapt the presentation to different types of devices, such as large screens, small screens, or printers.",
            },
          },
          {
            name: "JavaScript",
            slug: "javascript",
            url: "https://en.wikipedia.org/wiki/JavaScript",
            icon: JavaScriptIcon,
            tags: ["Language"],
            overview: {
              description:
                "JavaScript is a programming language that enables interactive web pages and thus is an essential part of web applications. It's used to control webpage behavior.",
            },
          },
          {
            name: "TypeScript",
            slug: "typescript",
            url: "https://en.wikipedia.org/wiki/TypeScript",
            icon: TypeScriptIcon,
            tags: ["Language"],
            overview: {
              description:
                "An extension of JavaScript that adds static types to the language. It's designed to develop large applications and transcompiles to JavaScript.",
            },
          },
        ],
        Libraries: [
          {
            name: "React",
            slug: "react",
            url: "https://react.dev/",
            icon: ReactIcon,
            tags: ["Library"],
            overview: {
              description: "The library for web and native user interfaces.",
            },
          },
          {
            name: "SolidJS",
            slug: "solidjs",
            url: "https://solidjs.com/",
            icon: SolidJSIcon,
            tags: ["Library"],
            overview: {
              description:
                "Solid is a purely reactive library. It was designed from the ground up with a reactive core. It's influenced by reactive principles developed by previous libraries.",
            },
          },
          {
            name: "htmx",
            slug: "htmx",
            url: "https://htmx.org/",
            icon: HtmxIcon,
            tags: ["Library"],
            overview: {
              description:
                "htmx gives you access to AJAX, CSS Transitions, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext.",
            },
          },
          {
            name: "jQuery",
            slug: "jquery",
            url: "https://jquery.com/",
            icon: JqueryIcon,
            tags: ["Library"],
            overview: {
              description:
                "jQuery: The Write Less, Do More, JavaScript Library.",
            },
          },
        ],
        Frameworks: [
          {
            name: "Angular",
            slug: "angular",
            url: "https://angular.io/",
            icon: AngularIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Angular lets you start small and supports you as your team and apps grow.",
            },
          },
          {
            name: "Svelte",
            slug: "svelte",
            url: "https://svelte.dev/",
            icon: SvelteIcon,
            tags: ["Framework"],
            overview: {
              description: "Cybernetically enhanced web apps.",
            },
          },
          {
            name: "Vue",
            slug: "vue",
            url: "https://vuejs.org/",
            icon: VueIcon,
            tags: ["Framework"],
            overview: {
              description:
                "An approachable, performant and versatile framework for building web user interfaces.",
            },
          },
        ],
        UI: [
          {
            name: "Material UI",
            slug: "material-ui",
            url: "https://mui.com/material-ui/",
            icon: MaterialUIIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "MUI provides a simple, customizable, and accessible library of React components. Follow your own design system, or start with Material Design.",
            },
          },
          {
            name: "Ant Design",
            slug: "ant-design",
            url: "https://ant.design/",
            icon: AntDesignIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises",
            },
          },
          {
            name: "Chakra",
            slug: "chakra-ui",
            url: "https://chakra-ui.com/",
            icon: ChakraIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Simple, Modular and Accessible UI Components for your React Applications. Built with Styled System.",
            },
          },
          {
            name: "Aceternity UI",
            slug: "aceternity",
            url: "https://ui.aceternity.com/",
            icon: AceternityUIIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Copy paste the most trending components and use them in your websites without having to worry about styling and animations.",
            },
          },
          {
            name: "daisyUI",
            slug: "daisyui",
            url: "https://daisyui.com/",
            icon: DasiyUIIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Best Tailwind Components Library - Free UI components for Tailwind CSS.",
            },
          },
          {
            name: "NextUI",
            slug: "nextui",
            url: "https://nextui.org/",
            icon: NextUIIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Make beautiful websites regardless of your design experience.",
            },
          },
          {
            name: "shadcn/ui",
            slug: "shadcn-ui",
            url: "https://ui.shadcn.com/",
            icon: ShadcnIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
            },
          },
          {
            name: "Radix",
            slug: "radix",
            url: "https://radix-ui.com/",
            icon: RadixIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Components, icons, and colors for building high‑quality, accessible UI. Free and open-source.",
            },
          },
          {
            name: "TailwindUI",
            slug: "tailwindui",
            url: "https://tailwindui.com/",
            icon: TailwindCSSIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Beautiful UI components and templates by the creators of Tailwind CSS.",
            },
          },
          {
            name: "syntaxUI",
            slug: "syntax-ui",
            url: "https://syntaxui.com/",
            icon: SyntaxUIIcon,
            tags: ["UI Library"],
            overview: {
              description:
                "Ready-to-use UI elements designed for rapid development.",
            },
          },
        ],
        Styling: [
          {
            name: "Tailwind CSS",
            slug: "tailwind-css",
            url: "https://tailwindcss.com/",
            icon: TailwindCSSIcon,
            tags: ["Styling"],
            overview: {
              description:
                "Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML.",
            },
          },
          {
            name: "Styled Components",
            slug: "styled-components",
            url: "https://styled-components.com/",
            icon: StyledComponentsIcon,
            tags: ["Styling"],
            overview: {
              description: "CSS for the <Component> Age",
            },
          },
        ],
      },
    }, // BACKEND
    {
      name: "Backend",
      path: "backend",
      items: {
        Languages: [
          {
            name: "Java",
            slug: "java",
            url: "https://en.wikipedia.org/wiki/Java_(programming_language)",
            icon: JavaIcon,
            tags: ["Language"],
            overview: {
              description:
                "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
            },
          },
          {
            name: "PHP",
            slug: "php",
            url: "https://php.net/",
            icon: PhpIcon,
            tags: ["Language"],
            overview: {
              description:
                "A popular general-purpose scripting language that is especially suited to web development. Fast, flexible and pragmatic, PHP powers everything from your blog to the most popular websites in the world.",
            },
          },
          {
            name: "Ruby",
            slug: "ruby",
            url: "https://ruby-lang.org/en/",
            icon: RubyIcon,
            tags: ["Language"],
            overview: {
              description:
                "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
            },
          },
          {
            name: "Go",
            slug: "go",
            url: "https://go.dev/",
            icon: GoIcon,
            tags: ["Language"],
            overview: {
              description:
                "Go is an open source programming language that makes it simple to build secure, scalable systems.",
            },
          },
          {
            name: "Python",
            slug: "python",
            url: "https://python.org/",
            icon: PythonIcon,
            tags: ["Language"],
            overview: {
              description:
                "Python is a high-level, interpreted programming language known for its readability, simplicity, and wide range of applications.",
            },
          },
        ],
        Frameowrks: [
          {
            name: "Laravel",
            slug: "laravel",
            url: "https://laravel.com/",
            icon: LaravelIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Laravel is a PHP web application framework with expressive, elegant syntax. We've already laid the foundation — freeing you to create without sweating the small things.",
            },
          },
          {
            name: "Ruby on Rails",
            slug: "ruby-on-rails",
            url: "https://rubyonrails.org/",
            icon: RubyOnRailsIcon,
            tags: ["Framework"],
            overview: {
              description:
                "A web-app framework that includes everything needed to create database-backed web applications according to the Model-View-Controller (MVC) pattern.",
            },
          },
          {
            name: "Django",
            slug: "django",
            url: "https://djangoproject.com/",
            icon: DjangoIcon,
            tags: ["Framework"],
            overview: {
              description:
                "The web framework for perfectionists with deadlines.",
            },
          },
          {
            name: "Flask",
            slug: "flask",
            url: "https://flask.palletsprojects.com/en/3.0.x/",
            icon: FlaskIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Flask is a lightweight and flexible web application framework for Python, known for its simplicity and ease of use.",
            },
          },
          {
            name: "NestJS",
            slug: "nest-js",
            url: "https://nestjs.com/",
            icon: NestJsIcon,
            tags: ["Framework"],
            overview: {
              description:
                "NestJS is a framework for building efficient, scalable Node.js web applications. It uses modern JavaScript, is built with TypeScript and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).",
            },
          },
        ],
        Platforms: [
          {
            name: "Supabase",
            slug: "supabase",
            url: "https://supabase.com/",
            icon: SupabaseIcon,
            tags: ["PostgreSQL", "Platform"],
            overview: {
              description:
                "Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.",
            },
          },
          {
            name: "Firebase",
            slug: "firebase",
            url: "https://firebase.google.com/",
            icon: FirebaseIcon,
            tags: ["Backend Platform"],
            overview: {
              description:
                "Discover Firebase, Google’s mobile and web app development platform that helps developers build apps and games that users will love.",
            },
          },
          {
            name: "Convex",
            slug: "convex",
            url: "https://convex.dev/",
            icon: ConvexIcon,
            tags: ["Backend Platform"],
            overview: {
              description:
                "The backend application platform with everything you need to build your product.",
            },
          },
        ],
      },
    },
    // FULLSTACK
    {
      name: "Fullstack",
      path: "fullstack",
      items: {
        Frameworks: [
          {
            name: "Next.js",
            slug: "next-js",
            url: "https://nextjs.org/",
            icon: NextJsIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Next.js by Vercel is the full-stack React framework for the web.",
            },
          },
          {
            name: "Astro",
            slug: "astro",
            url: "https://astro.build/",
            icon: AstroIcon,
            tags: ["Framework"],
            overview: {
              description:
                "An approachable, performant and versatile framework for building web user interfaces.",
            },
          },
          {
            name: "SvelteKit",
            slug: "sveltekit",
            url: "https://kit.svelte.dev/",
            icon: SvelteIcon,
            tags: ["Framework"],
            overview: {
              description:
                "SvelteKit is the official Svelte application framework.",
            },
          },
          {
            name: "Nuxt",
            slug: "nuxt",
            url: "https://nuxt.com/",
            icon: NuxtIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Nuxt is an open source framework that makes web development intuitive and powerful. Create performant and production-grade full-stack web apps and websites with confidence.",
            },
          },
          {
            name: "Remix",
            slug: "remix",
            url: "https://remix.run/",
            icon: RemixIcon,
            tags: ["Framework"],
            overview: {
              description:
                "Remix is a full stack web framework that lets you focus on the user interface and work back through web standards to deliver a fast, slick, and resilient user experience. People are gonna love using your stuff.",
            },
          },
        ],
      },
    },
    // DATABASES
    {
      name: "Database",
      path: "database",
      items: {
        ORM: [
          {
            name: "Drizzle ORM",
            slug: "drizzle-orm",
            url: "https://orm.drizzle.team/",
            icon: DrizzleIcon,
            tags: ["ORM"],
            overview: {
              description:
                "Drizzle ORM is a lightweight and performant TypeScript ORM with developer experience in mind.",
            },
          },
          {
            name: "Prisma",
            slug: "prisma",
            url: "https://prisma.io/",
            icon: PrismaIcon,
            tags: ["ORM"],
            overview: {
              description:
                "Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB. It provides type-safety, automated migrations, and an intuitive data model.",
            },
          },
        ],
        Platforms: [
          {
            name: "Neon",
            slug: "neon",
            url: "https://neon.tech/",
            icon: NeonIcon,
            overview: {
              description:
                "Postgres made for developers. Easy to Use, Scalable, Cost efficient solution for your next project.",
            },
          },
          {
            name: "MongoDB",
            slug: "mongodb",
            url: "https://mongodb.com/",
            icon: MongoDBIcon,
            overview: {
              description: "All the tech stacks you should know",
            },
          },
          {
            name: "Supabase",
            slug: "supabase",
            url: "https://supabase.com/",
            icon: SupabaseIcon,
            tags: ["PostgreSQL", "Platform"],
            overview: {
              description:
                "Build production-grade applications with a Postgres database, Authentication, instant APIs, Realtime, Functions, Storage and Vector embeddings. Start for free.",
            },
          },
          {
            name: "appwrite",
            slug: "appwrite",
            url: "https://appwrite.io/",
            icon: AppwriteIcon,
            tags: ["Backend Platform"],
            overview: {
              description:
                "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.",
            },
          },
        ],
      },
    },
    //STATE MANAGEMENT
    {
      name: "State Management",
      path: "state-management",
      items: [
        {
          name: "Redux",
          slug: "redux",
          url: "https://redux.js.org/",
          icon: ReduxIcon,
          tags: ["State"],
          overview: {
            description: "A predictable state container for JavaScript apps.",
          },
        },
        {
          name: "Recoil",
          slug: "recoil",
          url: "https://recoiljs.org/",
          icon: RecoilIcon,
          tags: ["State"],
          overview: {
            description: "A state management library for React.",
          },
        },
        {
          name: "Zustand",
          slug: "zustand",
          url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
          icon: ZustandIcon,
          tags: ["State"],
          overview: {
            description:
              "A small, fast and scalable bearbones state-management solution using simplified flux principles. ",
          },
        },
      ],
    },
    // STORAGE
    {
      name: "Storage",
      path: "storage",
      items: [
        {
          name: "Cloudinary",
          slug: "cloudinary",
          url: "https://cloudinary.com/",
          icon: CloudinaryIcon,
          tags: ["Storage"],
          overview: {
            description:
              "Streamline media management and improve user experience by automatically delivering images and videos, enhanced and optimized for every user.",
          },
        },
        {
          name: "UploadThing",
          slug: "uploadthing",
          url: "https://uploadthing.com/",
          icon: UploadThingIcon,
          tags: ["Storage"],
          overview: {
            description: "An easier way to upload files.",
          },
        },
      ],
    },
    // PAYMENTS
    {
      name: "Payments",
      path: "payments",
      items: [
        {
          name: "Stripe",
          slug: "stripe",
          url: "https://stripe.com/",
          icon: StripeIcon,
          tags: ["Payment"],
          overview: {
            description:
              "Stripe powers online and in-person payment processing and financial solutions for businesses of all sizes. Accept payments, send payouts, and automate financial processes with a suite of APIs and no-code tools.",
          },
        },
        // {
        //   name: "Razorpay",
        //   slug: "razorpay",
        //   url: "https://stripe.com/",
        //   icon: RazorpayIcon,
        // },
      ],
    },
    // HOSTING
    {
      name: "Hosting",
      path: "hosting",
      items: {
        Platforms: [
          {
            name: "Vercel",
            slug: "vercel",
            url: "https://vercel.com/",
            icon: VercelIcon,
            tags: ["Hosting"],
            overview: {
              description:
                "Vercel's Frontend Cloud gives developers the frameworks, workflows, and infrastructure to build a faster, more personalized Web.",
            },
          },
          {
            name: "Heroku",
            slug: "heroku",
            url: "https://heroku.com/",
            icon: HerokuIcon,
            tags: ["Hosting"],
            overview: {
              description:
                "Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.",
            },
          },
          {
            name: "Netlify",
            slug: "netlify",
            url: "https://netlify.com/",
            icon: NetlifyIcon,
            tags: ["Hosting"],
            overview: {
              description:
                "Realize the speed, agility and performance of a scalable, composable web architecture with Netlify. Explore the composable web platform now!",
            },
          },
          {
            name: "Railway",
            slug: "railway",
            url: "https://railway.app/",
            icon: RailwayIcon,
            tags: ["Hosting"],
            overview: {
              description:
                "Railway is an infrastructure platform where you can provision infrastructure, develop with that infrastructure locally, and then deploy to the cloud.",
            },
          },
          {
            name: "Render",
            slug: "render",
            url: "https://render.com/",
            icon: RenderIcon,
            tags: ["Hosting"],
            overview: {
              description:
                "Render is a unified cloud to build and run all your apps and websites with free TLS certificates, global CDN, private networks and auto deploys from Git.",
            },
          },
        ],
      },
    },
    // TESTING
    {
      name: "Testing",
      path: "testing",
      items: [
        {
          name: "Playwright",
          slug: "playwright",
          url: "https://playwright.dev/",
          icon: PlaywrightIcon,
          tags: ["Testing"],
          overview: {
            description:
              "Cross-browser end-to-end testing for modern web apps.",
          },
        },
        {
          name: "Jest",
          slug: "jest",
          url: "https://jestjs.io/",
          icon: JestIcon,
          tags: ["Testing"],
          overview: {
            description: "Delightful JavaScript Testing",
          },
        },
      ],
    },
  ],
};
