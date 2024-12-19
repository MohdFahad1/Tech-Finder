import React from "react";
import { getCategories } from "@/lib/categories";
import Link from "next/link";

const Categories = () => {
  const allCategories = getCategories();
  return (
    <div className="grid gap-4 px-5 sm:grid-cols-2 lg:grid-cols-3 mt-14 lg:px-24">
      {allCategories.map((category, idx) => {
        const icon = category.icon;
        const name = category.name;
        const description = category.description;
        const path = category.path;
        return (
          <Link
            key={idx}
            href={path}
            className="flex flex-col p-6 space-y-2 duration-200 border rounded-md hover:border-gray-600"
          >
            <div className="flex flex-row items-center space-x-2">
              {icon}
              <span className="font-medium leading-none text-md">{name}</span>
            </div>

            <p className="leading-snug line-clamp-2 text-md text-muted-foreground">
              {description}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
