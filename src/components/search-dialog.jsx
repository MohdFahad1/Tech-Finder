"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { searchData } from "@/lib/utils";

export default function SearchDialog({ open, setOpen }) {
  const router = useRouter();
  const data = searchData();
  const [searchTerm, setSearchTerm] = useState("");

  function handleClick(component) {
    router.push(component.fullPath);
    setOpen(false);
  }

  function handleInputChange(e) {
    const value = e.target.value;
    setSearchTerm(value);
  }

  const filteredData = data
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((category) => category.items.length > 0);

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        // value={searchTerm}
        onChange={handleInputChange}
      />
      <CommandList>
        {filteredData.length === 0 ? (
          <CommandEmpty>No results found.</CommandEmpty>
        ) : (
          filteredData.map((category, idx) => (
            <CommandGroup key={idx} heading={category.categoryName}>
              {category.items.map((item, itemIdx) => (
                <CommandItem key={itemIdx}>
                  <button
                    onClick={() => handleClick(item)}
                    className="flex flex-row items-center justify-start w-full space-x-3"
                  >
                    {item.icon && <item.icon size={24} />}
                    <span>{item.name}</span>
                  </button>
                </CommandItem>
              ))}
            </CommandGroup>
          ))
        )}
      </CommandList>
    </CommandDialog>
  );
}
