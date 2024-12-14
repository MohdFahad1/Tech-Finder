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
