import Link from "next/link";
import React from "react";
import { LogoIcon } from "../../public/icons";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="z-10 px-5 py-8 mt-20 border-t border-gray-200 bg-white/50 backdrop-blur-lg lg:px-24">
      <div className="container w-full">
        <div className="flex flex-col w-full space-y-6 md:space-y-0 md:flex-row md:items-end md:justify-between ">
          <div className="flex flex-col space-y-8">
            <Link href={"/"} className="flex items-center gap-2">
              <LogoIcon size={30} />
              <h1 className="flex text-2xl font-bold">
                Tech<span className="text-[#3b82f6]">Finder</span>
              </h1>
            </Link>
            <p className="max-w-xs text-sm text-gray-500">
              Effortlessly find the perfect tools for your next project and save
              countless hours of research.
            </p>
          </div>
          <div className="flex flex-col w-full gap-3 md:max-w-sm">
            <span className="text-sm font-medium">
              Subscribe to our newsletter
            </span>
            <span className="text-sm font-light text-neutral-600">
              Stay updated on new additions and features.
            </span>

            <div className="flex items-center gap-2">
              <div className="flex flex-row items-center w-full h-10 max-w-lg px-2 space-x-2 border-2 rounded-lg bg-slate-50">
                <Search size={20} color="gray" />
                <input
                  placeholder="you@domain.com"
                  className="w-full py-2 outline-none bg-slate-50 text-slate-600"
                />
              </div>
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="pt-8 mt-10 border-t border-gray-900/10">
          <p className="text-sm leading-5 text-gray-500">
            @ 2024 TechFinder. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
