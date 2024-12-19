"use client";

import React from "react";

import Link from "next/link";

import { findSubItem } from "@/lib/utils";
import { ChevronRightIcon } from "lucide-react";
import Overview from "./(sections)/overview";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function SubItemPage({ params }) {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".description", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      delay: 0.08,
    });
  });

  const item = findSubItem(
    params.categoryId,
    params.subCategoryId,
    params.subItemId
  );

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="flex flex-col flex-1 description">
      <div className="flex items-center gap-2 py-4 text-sm font-semibold text-gray-500">
        <Link
          className="hover:underline"
          href={`/browse/${params.categoryId}/${params.subCategoryId}`}
        >
          {item.subCategoryName}
        </Link>
        <ChevronRightIcon className="w-4 h-4" />{" "}
        <span className="text-gray-900">{item.name}</span>
      </div>
      <div className="flex flex-col mb-4 space-y-4">
        <div className="flex flex-col items-start space-x-0 md:flex-row md:space-x-4">
          <div>
            <item.icon size={64} />
          </div>

          <div className="flex flex-col max-w-3xl">
            <div className="flex flex-col items-start">
              <span className="flex min-w-full text-2xl font-bold">
                {item.name}
              </span>
              {item.tags.length > 0 && (
                <div
                  className="flex flex-row space-x-2"
                  style={{ minWidth: 0 }}
                >
                  {item.tags.map((tag, idx) => {
                    return (
                      <div key={idx} className="mb-1 ">
                        <span className="text-xs font-medium rounded-full px-2 py-0.5 bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            <span className="text-slate-600">
              {item?.overview?.description}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-start w-full mt-2">
            <Link
              href={item?.url}
              target="_blank"
              className="bg-black text-white px-3 py-0.5 rounded-full flex flex-row space-x-1 items-center"
            >
              <span className="text-xs">{new URL(item.url).hostname}</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#fff"
                  d="M18 7.05a1 1 0 0 0-1-1L9 6a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.42V15a1 1 0 0 0 1 1a1 1 0 0 0 1-1Z"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Overview overview={item.overview} />
      </div>
    </div>
  );
}
