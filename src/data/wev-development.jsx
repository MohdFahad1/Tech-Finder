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
          // icon: ClerkIcon,
        },
        {
          name: "Kinde",
          slug: "kinde",
          url: "https://kinde.com/",
          // icon: KindeIcon,
        },
        {
          name: "Auth0",
          slug: "auth0",
          url: "https://auth0.com/",
          // icon: Auth0Icon,
        },
        {
          name: "Supabase Auth",
          slug: "supabase-auth",
          url: "https://supabase.com/docs/guides/auth",
          // icon: SupabaseIcon,
        },
        {
          name: "Firebase Authentication",
          slug: "firebase-authentication",
          url: "https://firebase.google.com/docs/auth",
          // icon: FirebaseIcon,
        },
        {
          name: "Lucia",
          slug: "lucia",
          url: "https://lucia-auth.com/",
          // icon: LuciaIcon,
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
            // icon: HtmlIcon,
          },
          {
            name: "CSS",
            slug: "css",
            url: "https://en.wikipedia.org/wiki/CSS",
            // icon: CssIcon,
          },
          {
            name: "JavaScript",
            slug: "javascript",
            url: "https://en.wikipedia.org/wiki/JavaScript",
            // icon: JavaScriptIcon,
          },
          {
            name: "TypeScript",
            slug: "typescript",
            url: "https://en.wikipedia.org/wiki/TypeScript",
            // icon: TypeScriptIcon,
          },
        ],
        Libraries: [
          {
            name: "React",
            slug: "react",
            url: "https://react.dev/",
            // icon: ReactIcon,
          },
          {
            name: "SolidJS",
            slug: "solidjs",
            url: "https://solidjs.com/",
            // icon: SolidJSIcon,
          },
          {
            name: "htmx",
            slug: "htmx",
            url: "https://htmx.org/",
            // icon: HtmxIcon,
          },
          {
            name: "jQuery",
            slug: "jquery",
            url: "https://jquery.com/",
            // icon: JqueryIcon,
          },
        ],
        Frameworks: [
          {
            name: "Angular",
            slug: "angular",
            url: "https://angular.io/",
            // icon: AngularIcon,
          },
          {
            name: "Svelte",
            slug: "svelte",
            url: "https://svelte.dev/",
            // icon: SvelteIcon,
          },
          {
            name: "Vue",
            slug: "vue",
            url: "https://vuejs.org/",
            // icon: VueIcon,
          },
        ],
        UI: [
          {
            name: "Material UI",
            slug: "material-ui",
            url: "https://mui.com/material-ui/",
            // icon: MaterialUIIcon,
          },
          {
            name: "Ant Design",
            slug: "ant-design",
            url: "https://ant.design/",
            // icon: AntDesignIcon,
          },
          {
            name: "Chakra",
            slug: "chakra-ui",
            url: "https://chakra-ui.com/",
            // icon: ChakraIcon,
          },
          {
            name: "Aceternity UI",
            slug: "aceternity",
            url: "https://ui.aceternity.com/",
            // icon: AceternityUIIcon,
          },
          {
            name: "daisyUI",
            slug: "daisyui",
            url: "https://daisyui.com/",
            // icon: DasiyUIIcon,
          },
          {
            name: "NextUI",
            slug: "nextui",
            url: "https://nextui.org/",
            // icon: NextUIIcon,
          },
          {
            name: "shadcn/ui",
            slug: "shadcn-ui",
            url: "https://ui.shadcn.com/",
            // icon: ShadcnIcon,
          },
          {
            name: "Radix",
            slug: "radix",
            url: "https://radix-ui.com/",
            // icon: RadixIcon,
          },
          {
            name: "TailwindUI",
            slug: "tailwindui",
            url: "https://tailwindui.com/",
            // icon: TailwindCSSIcon,
          },
          {
            name: "syntaxUI",
            slug: "syntax-ui",
            url: "https://syntaxui.com/",
            // icon: SyntaxUIIcon,
          },
        ],
        Styling: [
          {
            name: "Tailwind CSS",
            slug: "tailwind-css",
            url: "https://tailwindcss.com/",
            // icon: TailwindCSSIcon,
          },
          {
            name: "Styled Components",
            slug: "styled-components",
            url: "https://styled-components.com/",
            // icon: StyledComponentsIcon,
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
            // icon: JavaIcon,
          },
          {
            name: "PHP",
            slug: "php",
            url: "https://php.net/",
            // icon: PhpIcon,
          },
          {
            name: "Ruby",
            slug: "ruby",
            url: "https://ruby-lang.org/en/",
            // icon: RubyIcon,
          },
          {
            name: "Go",
            slug: "go",
            url: "https://go.dev/",
            // icon: GoIcon,
          },
          {
            name: "Python",
            slug: "python",
            url: "https://python.org/",
            // icon: PythonIcon,
          },
        ],
        Frameowrks: [
          {
            name: "Laravel",
            slug: "laravel",
            url: "https://laravel.com/",
            // icon: LaravelIcon,
          },
          {
            name: "Ruby on Rails",
            slug: "ruby-on-rails",
            url: "https://rubyonrails.org/",
            // icon: RubyOnRailsIcon,
          },
          {
            name: "Django",
            slug: "django",
            url: "https://djangoproject.com/",
            // icon: DjangoIcon,
          },
          {
            name: "Flask",
            slug: "flask",
            url: "https://flask.palletsprojects.com/en/3.0.x/",
            // icon: FlaskIcon,
          },
          {
            name: "NestJS",
            slug: "nest-js",
            url: "https://nestjs.com/",
            // icon: NestJsIcon,
          },
        ],
        Platforms: [
          {
            name: "Supabase",
            slug: "supabase",
            url: "https://supabase.com/",
            // icon: SupabaseIcon,
          },
          {
            name: "Firebase",
            slug: "firebase",
            url: "https://firebase.google.com/",
            // icon: FirebaseIcon,
          },
          {
            name: "Convex",
            slug: "convex",
            url: "https://convex.dev/",
            // icon: ConvexIcon,
          },
          {
            name: "Appwrite",
            slug: "appwrite",
            url: "https://appwrite.io/",
            // icon: AppwriteIcon,
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
            // icon: NextJsIcon,
          },
          {
            name: "Astro",
            slug: "astro",
            url: "https://astro.build/",
            // icon: AstroIcon,
          },
          {
            name: "SvelteKit",
            slug: "sveltekit",
            url: "https://kit.svelte.dev/",
            // icon: SvelteIcon,
          },
          {
            name: "Nuxt",
            slug: "nuxt",
            url: "https://nuxt.com/",
            // icon: NuxtIcon,
          },
          {
            name: "Remix",
            slug: "remix",
            url: "https://remix.run/",
            // icon: RemixIcon,
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
            // icon: DrizzleIcon,
          },
          {
            name: "Prisma",
            slug: "prisma",
            url: "https://prisma.io/",
            // icon: PrismaIcon,
          },
        ],
        Platforms: [
          {
            name: "Neon",
            slug: "neon",
            url: "https://neon.tech/",
            // icon: NeonIcon,
          },
          {
            name: "PlanetScale",
            slug: "planet-scale",
            url: "https://planetscale.com/",
            // icon: PlanetScaleIcon,
          },
          {
            name: "MongoDB",
            slug: "mongodb",
            url: "https://mongodb.com/",
            // icon: MongoDBIcon,
          },
          {
            name: "Supabase",
            slug: "supabase",
            url: "https://supabase.com/",
            // icon: SupabaseIcon,
          },
          {
            name: "appwrite",
            slug: "appwrite",
            url: "https://appwrite.io/",
            // icon: AppwriteIcon,
          },
          {
            name: "Upstash",
            slug: "upstash",
            url: "https://upstash.com/",
            // icon: UpstashIcon,
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
          // icon: ReduxIcon,
        },
        {
          name: "Recoil",
          slug: "recoil",
          url: "https://recoiljs.org/",
          // icon: RecoilIcon,
        },
        {
          name: "Zustand",
          slug: "zustand",
          url: "https://zustand.docs.pmnd.rs/getting-started/introduction",
          // icon: ZustandIcon,
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
          // icon: CloudinaryIcon,
        },
        {
          name: "UploadThing",
          slug: "uploadthing",
          url: "https://uploadthing.com/",
          // icon: UploadThingIcon,
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
          // icon: StripeIcon,
        },
        {
          name: "Razorpay",
          slug: "razorpay",
          url: "https://stripe.com/",
          // icon: RazorpayIcon,
        },
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
            // icon: VercelIcon,
          },
          {
            name: "Heroku",
            slug: "heroku",
            url: "https://heroku.com/",
            // icon: HerokuIcon,
          },
          {
            name: "Netlify",
            slug: "netlify",
            url: "https://netlify.com/",
            // icon: NetlifyIcon,
          },
          {
            name: "Railway",
            slug: "railway",
            url: "https://railway.app/",
            // icon: RailwayIcon,
          },
          {
            name: "Render",
            slug: "render",
            url: "https://render.com/",
            // icon: RenderIcon,
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
          // icon: PlaywrightIcon,
        },
        {
          name: "Jest",
          slug: "jest",
          url: "https://jestjs.io/",
          // icon: JestIcon,
        },
      ],
    },
  ],
};
