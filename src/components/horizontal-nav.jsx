"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn, findCategory } from "@/lib/utils";

export default function HorizontalNav({ categoryId }) {
  const pathname = usePathname();
  const category = findCategory(categoryId);
  const NavItem = ({ item }) => {
    const { name, path } = item;

    return (
      <Link
        key={name}
        href={`${category?.path}/${path}`}
        className={cn(
          "flex items-center rounded-md h-9 px-5 text-sm  border text-slate-500 font-semibold text-nowrap",
          {
            "text-slate-800 bg-slate-200": pathname.includes(path),
          }
        )}
      >
        <span>{name}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col items-center mt-6 space-y-6">
      <div className="flex flex-col items-center space-y-2 text-center">
        <h1 className="text-3xl font-bold">{category?.name}</h1>
        <p className="text-slate-500">{category?.description}</p>
      </div>

      <div className="flex flex-row w-full space-x-2 overflow-x-auto h-14">
        <Link
          href={`${category?.path}`}
          className={cn(
            "flex items-center rounded-md h-9 px-5 text-sm  border text-slate-500 font-semibold",
            {
              "text-slate-800 bg-slate-200": pathname === category?.path,
            }
          )}
        >
          <span>All</span>
        </Link>

        {category?.subCategories.map((item) => (
          <NavItem key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
