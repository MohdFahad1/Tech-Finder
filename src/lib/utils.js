import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCategories } from "./categories";

import { categoryData as categoryData6 } from "@/data/ai-ml-development";
import { categoryData as categoryData3 } from "@/data/cross-platform-development";
import { categoryData as categoryData4 } from "@/data/desktop-development";
import { categoryData as categoryData5 } from "@/data/game-development";
import { categoryData as categoryData2 } from "@/data/mobile-development";
import { categoryData as categoryData1 } from "@/data/web-development";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function extractSlugFromPath(path) {
  const parts = path.split("/");
  return parts.pop();
}

export function findCategory(categoryId) {
  const categories = getCategories();
  return categories.find((category) => {
    const categorySlug = extractSlugFromPath(category.path);
    return categorySlug === categoryId;
  });
}

export function findSubCategory(categoryId, subCategoryId) {
  const category = findCategory(categoryId);
  if (category?.subCategories) {
    const subCategory = category.subCategories.find(
      (subCat) => subCat.path === subCategoryId
    );
    return subCategory;
  }
}

export function uppercaseFirstLetter(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function findRootPathBySlug(data, slug) {
  for (let subCategory of data.subCategories) {
    if (Array.isArray(subCategory.items)) {
      for (let item of subCategory.items) {
        if (item.slug === slug) {
          return subCategory.path;
        }
      }
    } else {
      for (let key in subCategory.items) {
        let itemsArray = subCategory.items[key];
        for (let item of itemsArray) {
          if (item.slug === slug) {
            return subCategory.path;
          }
        }
      }
    }
  }
  return null;
}

export const searchData = () => {
  const categories = [
    categoryData1,
    categoryData2,
    categoryData3,
    categoryData4,
    categoryData5,
    categoryData6,
  ];

  let categoryItems = []; // Array to store the result
  let seen = new Set(); // Temporary storage for tracking unique item names

  categories.forEach((category) => {
    let flattenedItems = []; // Temporary array to store flattened items for this category

    const categoryPath = category.path; // Capture the category path

    category.subCategories.forEach((subCategory) => {
      const subCategoryPath = subCategory.path; // Capture the subcategory path

      if (Array.isArray(subCategory.items)) {
        // Directly an array of items
        subCategory.items.forEach((item) => {
          const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
          if (!seen.has(item.name)) {
            flattenedItems.push({
              ...item,
              fullPath, // Add the fullPath to each item
            });
            seen.add(item.name); // Mark this item name as seen
          }
        });
      } else {
        // Object containing arrays of items
        Object.values(subCategory.items).forEach((itemsArray) => {
          itemsArray.forEach((item) => {
            const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
            if (!seen.has(item.name)) {
              flattenedItems.push({
                ...item,
                fullPath, // Add the fullPath to each item
              });
              seen.add(item.name); // Mark this item name as seen
            }
          });
        });
      }
    });

    if (flattenedItems.length > 0) {
      // If there are items for this category, add them to the result
      categoryItems.push({
        categoryName: category.name, // Assuming each category object has a name property
        items: flattenedItems,
      });
    }
  });

  return categoryItems;
};

export const flattenData = () => {
  const categories = [
    categoryData1,
    categoryData2,
    categoryData3,
    categoryData4,
    categoryData5,
    categoryData6,
  ];

  let flattened = [];
  let seen = new Set();

  categories.forEach((category) => {
    const categoryPath = category.path;

    category.subCategories.forEach((subCategory) => {
      const subCategoryPath = subCategory.path;

      if (Array.isArray(subCategory.items)) {
        subCategory.items.forEach((item) => {
          const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
          if (!seen.has(item.name)) {
            flattened.push({
              ...item,
              fullPath,
            });
            seen.add(item.name);
          }
        });
      } else {
        // Object containing arrays of items
        Object.values(subCategory.items).forEach((itemsArray) => {
          itemsArray.forEach((item) => {
            const fullPath = `${categoryPath}/${subCategoryPath}/${item.slug}`;
            if (!seen.has(item.name)) {
              flattened.push({
                ...item,
                fullPath,
              });
              seen.add(item.name);
            }
          });
        });
      }
    });
  });

  return flattened;
};
