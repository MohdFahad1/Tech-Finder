import { ArrowRight, Search, Sparkle } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <div className="flex flex-col items-center justify-center max-w-2xl mt-16">
          <div className="mb-8">
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
              <div className="inline-flex h-full group w-full items-center space-x-1 cursor-pointer justify-center rounded-full bg-white px-3 py-1 text-xs font-medium leading-5 text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                <Sparkle size={16} />
                <span>Introducing TechStackFinder</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 duration-200"
                />
              </div>
            </span>
          </div>

          <div>
            <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-6xl">
              All your <span className="text-[#3b82f6]">tech stacks</span>
              <br /> in one place
            </h2>
            <p className="mt-4 text-center md:text-lg leading-6 text-gray-600 dark:text-gray-200 text-balance">
              Discover the right tools for your next project effortlessly,{" "}
              <span className="opacity-70">saving you hours</span> of research
              time.
            </p>
          </div>

          <div className="w-full rounded-lg border h-10 px-2 bg-slate-50 flex flex-row items-center space-x-2 max-w-lg mt-5">
            <Search size={20} color="gray" />
            <input
              placeholder="Search for tech..."
              className="w-full outline-none py-2 bg-slate-50 text-slate-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
