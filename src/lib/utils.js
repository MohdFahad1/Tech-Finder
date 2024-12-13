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
