import Link from "next/link";
import React from "react";
import { LogoIcon } from "../../public/icons";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="z-10 border-t border-gray-200 bg-white/50 py-8 backdrop-blur-lg mt-20 px-24">
      <div className="container w-full">
        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between w-full ">
          <div className="space-y-8 flex flex-col">
            <Link href={"/"} className="flex items-center gap-2">
              <LogoIcon size={30} />
              <h1 className="font-bold text-2xl flex">
                Tech<span className="text-[#3b82f6]">Finder</span>
              </h1>
            </Link>
            <p className="max-w-xs text-sm text-gray-500">
              Discover the right tools for your next project effortlessly,
              saving you hours of research time.
            </p>
          </div>
          <div className="md:max-w-sm w-full flex flex-col gap-3">
            <span className="font-medium text-sm">
              Subscribe to our newsletter
            </span>
            <span className="text-neutral-600 text-sm font-light">
              Stay updated on new additions and features.
            </span>

            <div className="flex gap-2 items-center">
              <div className="w-full rounded-lg border-2 h-10 px-2 bg-slate-50 flex flex-row items-center space-x-2 max-w-lg">
                <Search size={20} color="gray" />
                <input
                  placeholder="you@domain.com"
                  className="w-full outline-none py-2 bg-slate-50 text-slate-600"
                />
              </div>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-900/10 pt-8">
          <p className="text-sm leading-5 text-gray-500">
            @ 2024 TechStackFinder. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
