"use client";

import React from "react";
import Link from "next/link";
import { findSubCategory, uppercaseFirstLetter } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SubCategoryPage({ params }) {
  const subCategory = findSubCategory(params.categoryId, params.subCategoryId);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".subCategories", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      delay: 0.08,
    });
  });

  if (!subCategory) {
    return <div>No subcategory found.</div>;
  }

  return (
    <div className="flex flex-col flex-1 mt-6 subCategories">
      <div className="flex flex-col mb-6">
        <span className="text-2xl font-bold">
          {uppercaseFirstLetter(subCategory.name) || "All"}
        </span>
        {Array.isArray(subCategory.items) ? (
          <span className="text-slate-600">
            {subCategory.items.length} items
          </span>
        ) : (
          <span className="text-slate-600">
            {getTotalItems(subCategory.items)} items
          </span>
        )}
      </div>

      <ToolingList
        categoryId={params.categoryId}
        subCategoryId={params.subCategoryId}
        tooling={subCategory.items}
      />
    </div>
  );
}

const getTotalItems = (toolingItem) => {
  let total = 0;
  for (let key in toolingItem) {
    if (Array.isArray(toolingItem[key])) {
      total += toolingItem[key].length;
    }
  }
  return total;
};

function ToolingList({ tooling, categoryId, subCategoryId }) {
  if (!tooling || (Array.isArray(tooling) && tooling.length === 0)) {
    return <div>No data available for this category.</div>;
  }

  const renderItem = (item) => (
    <Link
      key={item.name}
      href={`/browse/${categoryId}/${subCategoryId}/${item.slug}`}
      className="rounded-lg sm:p-4 md:border hover:border-black hover:duration-200"
    >
      <div className="flex flex-row items-start space-x-4">
        <div>{item && <item.icon size={64} />}</div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-bold">{item?.name}</span>
          {item.tags.length > 0 && (
            <div className="flex flex-row space-x-2" style={{ minWidth: 0 }}>
              {item.tags.map((tag, idx) => {
                return (
                  <div key={idx} className="mb-1">
                    <span className="rounded-full px-2 py-0.5 bg-gray-200 text-gray-800">
                      {tag}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <span className="text-sm text-slate-600 line-clamp-2">
            {item?.overview?.description}
          </span>
        </div>
      </div>
    </Link>
  );

  if (Array.isArray(tooling)) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 min-[1170px]:grid-cols-3 gap-8">
        {tooling.map(renderItem)}
      </div>
    );
  } else {
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
