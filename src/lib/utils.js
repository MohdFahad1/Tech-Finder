import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCategories } from "./categories";

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
