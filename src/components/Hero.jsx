"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Fuse from "fuse.js";
import { flattenData } from "@/lib/utils";

import { ArrowRight, Search, Sparkle } from "lucide-react";

const Hero = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [fuse, setFuse] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    const options = {
      keys: ["name"],
      includeScore: true,
    };
    const temp = flattenData();
    setFuse(new Fuse(temp, options));
  }, []);

  useEffect(() => {
    if (searchQuery && fuse) {
      const results = fuse.search(searchQuery).map((result) => result.item);
      setSearchResults(results.slice(0, 5));
      setDropdownVisible(results.length > 0);
    } else {
      setSearchResults([]);
      setDropdownVisible(false);
    }
  }, [searchQuery, fuse]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClick = (value) => {
    setDropdownVisible(false);
    router.push(`${value}`);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

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

          <div className="flex flex-col w-full">
            <div className="relative mt-4 md:mx-24">
              <div className="flex flex-row items-center w-full h-10 px-2 space-x-2 border rounded-lg bg-slate-50">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-slate-500"
                >
                  <path
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth=".5"
                    d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
                  />
                </svg>
                <input
                  className="w-full outline-none bg-slate-50 text-slate-600"
                  autoFocus
                  placeholder="Search for tech..."
                  value={searchQuery}
                  onChange={handleInputChange}
                />
                {searchQuery !== "" && (
                  <button onClick={clearSearch}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-neutral-400"
                    >
                      <path
                        fill="currentColor"
                        d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m2.71 11.29a1 1 0 0 1 0 1.42a1 1 0 0 1-1.42 0L12 13.41l-1.29 1.3a1 1 0 0 1-1.42 0a1 1 0 0 1 0-1.42l1.3-1.29l-1.3-1.29a1 1 0 0 1 1.42-1.42l1.29 1.3l1.29-1.3a1 1 0 0 1 1.42 1.42L13.41 12Z"
                      />
                    </svg>
                  </button>
                )}
              </div>
              {dropdownVisible &&
                (searchResults.length > 0 ? (
                  <div className="absolute z-30 w-full mt-1 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-60">
                    {searchResults.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleClick(item.fullPath)}
                        className="flex flex-row items-center w-full p-4 space-x-2 cursor-pointer hover:bg-gray-100"
                      >
                        <item.icon size={24} />
                        <span>{item.name}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="absolute w-full mt-1 overflow-auto bg-white border border-gray-200 rounded-md shadow-lg max-h-60">
                    <p className="p-4 text-slate-600">No items found</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
