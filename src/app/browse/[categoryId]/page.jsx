import React from "react";
import Link from "next/link";
import { findCategory, findRootPathBySlug } from "@/lib/utils";

export default function CategoryPage({ params }) {
  const category = findCategory(params.categoryId);

  // Log category to check if it's fetched properly
  console.log("Category:", category);

  if (!category) {
    return <div>Category not found.</div>; // Handle case when category is not found
  }

  const tooling = flattenData(category?.subCategories);

  // Log tooling to check if flattenData works as expected
  console.log("Tooling:", tooling);

  return (
    <ToolingList
      tooling={tooling}
      category={category}
      categoryId={params.categoryId}
    />
  );
}

const flattenData = (subCategories) => {
  const flattened = [];
  if (!subCategories) return flattened; // Ensure subCategories is not undefined

  subCategories?.forEach((subCategory) => {
    console.log("SubCategory:", subCategory); // Log subcategory to check its structure

    if (Array.isArray(subCategory.items)) {
      flattened.push(...subCategory.items);
    } else if (typeof subCategory.items === "object") {
      Object.keys(subCategory.items).forEach((key) => {
        flattened.push(...subCategory.items[key]);
      });
    }
  });
  console.log("Flattened Tooling:", flattened); // Log the final result
  return flattened;
};

function ToolingList({ category, categoryId, tooling }) {
  if (!tooling || (Array.isArray(tooling) && tooling.length === 0)) {
    return <div>No data available for this category.</div>;
  }

  // Function to render a single item
  const renderItem = (item) => {
    console.log("Rendering item:", item); // Log the item being rendered

    if (!item) return null; // Prevent rendering undefined items

    const subCategoryId = findRootPathBySlug(category, item.slug);

    if (!subCategoryId) {
      console.error("No subCategoryId found for item:", item);
      return null; // Prevent rendering if no subCategoryId is found
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
