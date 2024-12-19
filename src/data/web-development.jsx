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
            features: [
              "Built-in user interface components for authentication.",
              "Multi-factor authentication support.",
              "Seamless integration with React, Next.js, and more.",
              "Comprehensive API for custom user management.",
            ],
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
            features: [
              "One-click setup for authentication and user roles.",
              "Customizable login and registration flows.",
              "Secure session management and token handling.",
              "Scalable architecture designed for growing applications.",
            ],
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
            features: [
              "Support for multiple identity providers (social, enterprise, and database connections).",
              "Advanced role-based access control (RBAC).",
              "Seamless integration with modern application stacks.",
              "Built-in support for multi-factor authentication (MFA).",
            ],
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
            features: [
              "JWT-based authentication with support for multiple providers.",
              "Secure user management with self-hosted or cloud options.",
              "Integration with Postgres database and real-time subscriptions.",
              "Support for passwordless login via magic links.",
            ],
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
            features: [
              "Email/password, phone number, and social login support.",
              "Integration with Google services and other Firebase products.",
              "Real-time authentication state synchronization.",
              "Advanced security features like token verification and re-authentication.",
            ],
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
            features: [
              "Supports both server-side and client-side rendering.",
              "Integrates seamlessly with modern frameworks like SvelteKit and Next.js.",
              "Secure password hashing and session management.",
              "Customizable authentication flow with minimal configuration.",
            ],
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
              features: [
                "Defines the structure of web pages with elements and tags.",
                "Supports multimedia elements like images, videos, and audio.",
                "Forms the foundation for SEO-friendly content.",
                "Works seamlessly with CSS and JavaScript for advanced features.",
              ],
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
              features: [
                "Controls the appearance of web pages with selectors and rules.",
                "Supports responsive design with media queries.",
                "Allows animations and transitions for interactive design.",
                "Provides styling flexibility with variables and frameworks like Bootstrap.",
              ],
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
              features: [
                "Adds interactivity to websites through events and DOM manipulation.",
                "Supports asynchronous operations with Promises and async/await.",
                "Works with modern frameworks like React, Angular, and Vue.",
                "Enables server-side development with Node.js.",
              ],
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
              features: [
                "Improves code maintainability with static typing.",
                "Supports modern JavaScript features and compiles to plain JavaScript.",
                "Great tooling support for IDEs with autocompletion and error detection.",
                "Facilitates large-scale application development.",
              ],
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
              features: [
                "Component-based architecture for reusable code.",
                "Virtual DOM for high-performance rendering.",
                "Rich ecosystem with libraries like Redux and React Router.",
                "Supports both client-side and server-side rendering.",
              ],
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
              features: [
                "High performance with a reactive system.",
                "Efficient updates with a compiled output.",
                "Lightweight and fast without a Virtual DOM.",
                "Easy integration with existing JavaScript frameworks.",
              ],
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
              features: [
                "Supports server-driven UI updates with minimal JavaScript.",
                "Enables seamless HTTP requests directly from HTML attributes.",
                "Improves user experience with partial page updates.",
                "Simplifies progressive enhancement for web applications.",
              ],
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
              features: [
                "Simplifies DOM traversal and manipulation.",
                "Supports cross-browser compatibility.",
                "Rich plugin ecosystem for extended functionality.",
                "Lightweight and easy to integrate into web projects.",
              ],
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
              features: [
                "Two-way data binding for real-time updates.",
                "Comprehensive CLI for efficient project scaffolding and development.",
                "Built-in dependency injection for modular code.",
                "Supports RxJS for reactive programming.",
              ],
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
              features: [
                "No virtual DOM—compiles to optimized JavaScript.",
                "Reactive state management without additional libraries.",
                "Small bundle size for faster loading times.",
                "Rich animations and transitions built into the framework.",
              ],
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
              features: [
                "Component-based architecture for reusable code.",
                "Two-way data binding for dynamic user interfaces.",
                "Extensive ecosystem with Vue Router and Vuex.",
                "Lightweight and easy to integrate with other libraries.",
              ],
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
              features: [
                "Comprehensive React components for Material Design.",
                "Theming support with custom palettes and typography.",
                "Highly customizable components for unique designs.",
                "Supports TypeScript for type-safe development.",
              ],
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
              features: [
                "Wide range of pre-built components for enterprise needs.",
                "Flexible theming with customization options.",
                "Internationalization support for multiple languages.",
                "Comprehensive documentation and community support.",
              ],
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
              features: [
                "Fully accessible components out of the box.",
                "Modular and customizable component structure.",
                "Intuitive styling with a theme-based system.",
                "Supports responsive design with easy breakpoints.",
              ],
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
              features: [
                "Blockchain-specific components for DApp development.",
                "Supports seamless interaction with smart contracts.",
                "Lightweight and optimized for performance.",
                "Focuses on user-friendly design principles.",
              ],
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
              features: [
                "Pre-built Tailwind CSS components for rapid development.",
                "Easily customizable to fit unique design needs.",
                "Responsive and mobile-first by default.",
                "Supports multiple themes out of the box.",
              ],
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
              features: [
                "Minimal and clean design system.",
                "Supports dark mode and theming.",
                "Highly performant with optimized components.",
                "Easy integration with Next.js applications.",
              ],
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
              features: [
                "Highly accessible components with ARIA compliance.",
                "Built with modern design principles.",
                "Easily extendable with utility-first CSS.",
                "Integrates seamlessly with Tailwind CSS.",
              ],
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
              features: [
                "Unstyled components for maximum design flexibility.",
                "Built-in accessibility for WCAG compliance.",
                "Supports server-side rendering (SSR).",
                "Customizable and framework-agnostic.",
              ],
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
              features: [
                "Beautifully designed, production-ready components.",
                "Built with Tailwind CSS for ultimate customization.",
                "Responsive and accessible by default.",
                "Extensive range of components for all use cases.",
              ],
            },
          },
          // {
          //   name: "syntaxUI",
          //   slug: "syntax-ui",
          //   url: "https://syntaxui.com/",
          //   icon: SyntaxUIIcon,
          //   tags: ["UI Library"],
          //   overview: {
          //     description:
          //       "Ready-to-use UI elements designed for rapid development.",
          //     features: [],
          //   },
          // },
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
              features: [
                "Utility-first classes for rapid styling.",
                "Highly customizable with a configuration file.",
                "Responsive and mobile-first design support.",
                "Eliminates the need for writing custom CSS.",
              ],
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
              features: [
                "Scoped styling for React components.",
                "Dynamic theming and prop-based styles.",
                "Supports global styles for consistent design.",
                "Eliminates classname conflicts.",
              ],
            },
          },
        ],
      },
    },

    // BACKEND
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
              features: [
                "Write Once, Run Anywhere (WORA) capabilities.",
                "Comprehensive standard libraries.",
                "Widely used in enterprise, web, and mobile development.",
                "Extensive support for multithreading and performance optimization.",
              ],
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
              features: [
                "Efficient for building dynamic web pages.",
                "Supports a wide range of frameworks and CMS tools.",
                "Extensive library support for common functionalities.",
                "Compatible with most web servers and databases.",
              ],
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
              features: [
                "Readable and expressive syntax.",
                "Robust support for object-oriented programming.",
                "Integrated with Rails for rapid web development.",
                "Active community and rich library ecosystem.",
              ],
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
              features: [
                "Built-in support for concurrency.",
                "Fast compilation and execution.",
                "Static typing with garbage collection.",
                "Strong standard library for building robust applications.",
              ],
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
              features: [
                "Easy-to-read syntax for faster development.",
                "Comprehensive libraries for machine learning, data analysis, and web development.",
                "Wide range of frameworks like Django and Flask.",
                "Cross-platform compatibility.",
              ],
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
              features: [
                "Blade templating engine for dynamic views.",
                "Built-in tools for authentication and authorization.",
                "Database migrations and eloquent ORM support.",
                "Comprehensive ecosystem for rapid development.",
              ],
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
              features: [
                "Convention over configuration for faster development.",
                "Built-in tools for RESTful API creation.",
                "Scalable and supports a wide range of databases.",
                "Extensive plugin and gem ecosystem.",
              ],
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
              features: [
                "Built-in ORM for database handling.",
                "Automatic admin panel generation.",
                "Robust security features like CSRF protection.",
                "Highly scalable for enterprise-grade applications.",
              ],
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
              features: [
                "Minimalistic design with full control over components.",
                "Integrated support for RESTful request handling.",
                "Extensible with third-party libraries.",
                "Built-in development server for testing.",
              ],
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
              features: [
                "Built-in support for TypeScript.",
                "Modular architecture for easy scaling.",
                "Integration with modern libraries like TypeORM and Mongoose.",
                "Powerful dependency injection system.",
              ],
            },
          },
        ],
        Platforms: [
          {
            name: "Firebase",
            slug: "firebase",
            url: "https://firebase.google.com/",
            icon: FirebaseIcon,
            tags: ["Backend Platform"],
            overview: {
              description:
                "Discover Firebase, Google’s mobile and web app development platform that helps developers build apps and games that users will love.",
              features: [
                "Real-time database for syncing data.",
                "Authentication services with multiple providers.",
                "Cloud Firestore for scalable and flexible NoSQL databases.",
                "Hosting for fast and secure deployments.",
              ],
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
              features: [
                "Serverless backend with automatic scaling.",
                "Real-time state management and synchronization.",
                "Built-in support for complex queries.",
                "Zero server management required.",
              ],
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
              features: [
                "Server-side rendering (SSR) for dynamic content.",
                "Static site generation (SSG) for pre-rendered pages.",
                "API routes to build serverless APIs.",
                "Optimized image handling and built-in CSS support.",
              ],
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
              features: [
                "Ships zero JavaScript by default for faster loading.",
                "Supports multiple frameworks like React, Vue, and Svelte.",
                "Partial hydration for interactive components.",
                "Built-in support for Markdown and MDX.",
              ],
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
              features: [
                "Automatic code splitting and optimized builds.",
                "Simplified server-side rendering (SSR).",
                "Routing system with dynamic and static routes.",
                "Seamless integration with Svelte components.",
              ],
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
              features: [
                "Server-side rendering for dynamic content.",
                "Static site generation for pre-rendered pages.",
                "Modular architecture with built-in plugins.",
                "Integrated routing and state management with Vuex.",
              ],
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
              features: [
                "Optimized for server-side rendering.",
                "Load data seamlessly with loader functions.",
                "Nested routing for better organization.",
                "Full-stack support with backend integrations.",
              ],
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
            tags: ["ORM", "Database"],
            overview: {
              description:
                "Drizzle ORM is a lightweight and performant TypeScript ORM with developer experience in mind.",
              features: [
                "Type-safe SQL query building.",
                "Supports PostgreSQL, MySQL, and SQLite.",
                "Lightweight and performant design.",
                "Seamless integration with modern frameworks.",
              ],
            },
          },
          {
            name: "Prisma",
            slug: "prisma",
            url: "https://prisma.io/",
            icon: PrismaIcon,
            tags: ["ORM", "Database"],
            overview: {
              description:
                "Prisma is a next-generation Node.js and TypeScript ORM for PostgreSQL, MySQL, SQL Server, SQLite, MongoDB, and CockroachDB. It provides type-safety, automated migrations, and an intuitive data model.",
              features: [
                "Automatic migrations with Prisma Migrate.",
                "Type-safe queries with Prisma Client.",
                "Support for multiple databases including PostgreSQL and MongoDB.",
                "GraphQL and REST API integration.",
              ],
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
              features: [
                "Built-in support for serverless applications.",
                "Fast and scalable cloud infrastructure.",
                "Point-in-time recovery and branching.",
                "Supports real-time analytics and querying.",
              ],
            },
            tags: ["Platform"],
          },
          {
            name: "MongoDB",
            slug: "mongodb",
            url: "https://mongodb.com/",
            icon: MongoDBIcon,
            overview: {
              description: "All the tech stacks you should know",
              features: [
                "Document-oriented data storage.",
                "Scalable architecture for large datasets.",
                "Rich query language with aggregation.",
                "Built-in support for replication and sharding.",
              ],
            },
            tags: ["Database"],
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
              features: [
                "Managed PostgreSQL database with real-time updates.",
                "Authentication and authorization built-in.",
                "API auto-generated from your database schema.",
                "Storage for managing files and media.",
              ],
            },
          },
          {
            name: "appwrite",
            slug: "appwrite",
            url: "https://appwrite.io/",
            icon: AppwriteIcon,
            tags: ["Backend", "Platform"],
            overview: {
              description:
                "Appwrite is an open-source platform for building applications at any scale, using your preferred programming languages and tools.",
              features: [
                "Self-hosted backend for flexibility and control.",
                "Authentication and user management out-of-the-box.",
                "Real-time database with support for queries.",
                "File storage with built-in security controls.",
              ],
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
            features: [
              "Centralized state management for consistency.",
              "Debugging tools like Redux DevTools.",
              "Middleware support for handling side effects.",
              "Compatible with any JavaScript framework or library.",
            ],
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
            features: [
              "Fine-grained updates for performance optimization.",
              "Declarative data dependencies for derived state.",
              "Seamless integration with React components.",
              "Support for asynchronous state management.",
            ],
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
            features: [
              "Minimal API for simplicity.",
              "Global state with zero boilerplate.",
              "Supports asynchronous actions and middlewares.",
              "Great performance with small bundle size.",
            ],
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
            features: [
              "Automatic image and video optimization.",
              "Advanced media transformation capabilities.",
              "CDN for fast content delivery.",
              "Seamless integration with web and mobile apps.",
            ],
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
            features: [
              "Simple API for file uploads.",
              "Supports large file sizes with resumable uploads.",
              "Customizable upload parameters.",
              "Compatible with multiple frameworks and environments.",
            ],
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
            features: [
              "Support for multiple payment methods and currencies.",
              "Subscription management and recurring billing.",
              "Robust API for custom payment workflows.",
              "Built-in fraud prevention tools.",
            ],
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
              features: [
                "Automatic builds and deployments with Git integration.",
                "Global CDN for fast performance.",
                "Edge functions for dynamic content rendering.",
                "Easy integration with Next.js and other frameworks.",
              ],
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
              features: [
                "Managed environment for deploying apps.",
                "Add-ons marketplace for extended functionalities.",
                "Scalable resources for growing applications.",
                "Multi-language support for flexibility.",
              ],
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
              features: [
                "Continuous deployment with Git integration.",
                "Serverless functions for dynamic content.",
                "Custom domains and SSL support.",
                "Global CDN for optimized delivery.",
              ],
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
              features: [
                "One-click deployment for apps and services.",
                "Integrated database hosting.",
                "Auto-scaling for growing applications.",
                "Detailed resource usage monitoring.",
              ],
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
              features: [
                "Automatic HTTPS for secure connections.",
                "Support for static sites, web services, and background workers.",
                "Free SSL and custom domains.",
                "Global CDN for faster content delivery.",
              ],
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
            features: [
              "Cross-browser automation for Chromium, Firefox, and WebKit.",
              "Powerful API for taking screenshots and generating PDFs.",
              "Supports headless and full browser mode.",
              "Built-in test runner with parallel execution.",
            ],
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
            features: [
              "Zero configuration setup for most JavaScript projects.",
              "Snapshot testing for UI consistency.",
              "Built-in code coverage reporting.",
              "Supports mocking and testing asynchronous code.",
            ],
          },
        },
      ],
    },
  ],
};
