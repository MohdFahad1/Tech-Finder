"use client";

import React from "react";
import Link from "next/link";
import { findCategory, findRootPathBySlug } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CategoryPage({ params }) {
  const category = findCategory(params.categoryId);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".subCategories, items", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      delay: 0.08,
    });
  });

  if (!category) {
    return <div>Category not found.</div>;
  }

  const tooling = flattenData(category?.subCategories);

  return (
    <div className="subCategories">
      <ToolingList
        tooling={tooling}
        category={category}
        categoryId={params.categoryId}
      />
    </div>
  );
}

const flattenData = (subCategories) => {
  const flattened = [];
  if (!subCategories) return flattened;

  subCategories?.forEach((subCategory) => {
    if (Array.isArray(subCategory.items)) {
      flattened.push(...subCategory.items);
    } else if (typeof subCategory.items === "object") {
      Object.keys(subCategory.items).forEach((key) => {
        flattened.push(...subCategory.items[key]);
      });
    }
  });
  return flattened;
};

function ToolingList({ category, categoryId, tooling }) {
  if (!tooling || (Array.isArray(tooling) && tooling.length === 0)) {
    return <div>No data available for this category.</div>;
  }

  const renderItem = (item) => {
    if (!item) return null;

    const subCategoryId = findRootPathBySlug(category, item.slug);

    if (!subCategoryId) {
      console.error("No subCategoryId found for item:", item);
      return null;
    }

    return (
      <Link
        key={item.name}
        href={`/browse/${categoryId}/${subCategoryId}/${item.slug}`}
        className="rounded-lg sm:p-4 md:border hover:border-black hover:duration-200"
      >
        <div className="flex flex-row items-start space-x-4">
          <div>{item && item.icon && <item.icon size={64} />}</div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-bold">{item?.name}</span>
            {item.tags?.length > 0 && (
              <div className="flex flex-row space-x-2" style={{ minWidth: 0 }}>
                {item.tags?.map((tag, idx) => {
                  return (
                    <div key={idx} className="mb-1">
                      <span className="text-xs font-medium rounded-full px-2 py-0.5 bg-gray-200 text-gray-800">
                        {tag}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
            {/* DESCRIPTION */}
            <span className="text-sm text-slate-600 line-clamp-2 ">
              {item?.overview?.description}
            </span>
          </div>
        </div>
      </Link>
    );
  };

  // Check if tooling is an array (for Auth) or an object (for Frontend)
  if (Array.isArray(tooling)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8 ">
        {tooling.map(renderItem)}
      </div>
    );
  } else {
    // For Frontend, iterate over each category (Libraries, Frameworks, Styling)
    return (
      <div className="flex flex-col w-full">
        {Object.entries(tooling).map(([category, items]) => (
          <div key={category} className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8 pb-10">
              {items.map(renderItem)}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
