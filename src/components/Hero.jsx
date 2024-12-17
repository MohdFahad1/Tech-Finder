"use client";

import { ArrowRight, Search, Sparkle } from "lucide-react";
import React, { useState } from "react";

const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center max-w-2xl mt-16">
          <div className="mb-8">
            <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]"></span>
              <div className="inline-flex items-center justify-center w-full h-full px-3 py-1 space-x-1 text-xs font-medium leading-5 bg-white rounded-full cursor-pointer group text-slate-600 backdrop-blur-xl dark:bg-black dark:text-slate-200">
                <Sparkle size={16} />
                <span>Introducing TechStackFinder</span>
                <ArrowRight
                  size={16}
                  className="duration-200 group-hover:translate-x-1"
                />
              </div>
            </span>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-50 sm:text-6xl">
              All your <span className="text-[#3b82f6]">tech stacks</span>
              <br /> in one place
            </h2>
            <p className="mt-4 leading-6 text-center text-gray-600 md:text-lg dark:text-gray-200 text-balance">
              Discover the right tools for your next project effortlessly,{" "}
              <span className="opacity-70">saving you hours</span> of research
              time.
            </p>
          </div>

          <div className="flex flex-row items-center w-full h-10 max-w-lg px-2 mt-5 space-x-2 border rounded-lg bg-slate-50">
            <Search size={20} color="gray" />
            <input
              placeholder="Search for tech..."
              className="w-full py-2 outline-none bg-slate-50 text-slate-600"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
