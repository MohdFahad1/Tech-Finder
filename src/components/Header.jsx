"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ITEMS } from "@/data/items";
import Link from "next/link";
import { LogoIcon } from "../../public/icons";
import SearchBar from "./Search";
import SearchDialog from "./search-dialog";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="py-2 px-24">
      <SearchDialog open={open} setOpen={setOpen} />
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link href={"/"} className="flex items-center gap-2">
            <LogoIcon size={30} />
            <h1 className="font-bold text-2xl flex">
              Tech<span className="text-[#3b82f6]">Finder</span>
            </h1>
          </Link>

          <div className="hidden items-center md:ml-4 md:flex md:gap-6">
            <div>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {ITEMS.map((component) => (
                          <ListItem
                            key={component.title}
                            title={component.title}
                            icon={component.icon}
                            href={component.href}
                          >
                            {component.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
        </div>

        <div>
          <button onClick={() => setOpen(true)}>
            <SearchBar />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;

const ListItem = React.forwardRef(
  ({ className, title, icon, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);

ListItem.displayName = "ListItem";
