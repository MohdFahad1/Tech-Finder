import React from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="flex items-center gap-2 border-2 rounded-md px-5 py-2 cursor-pointer hover:bg-[#F5F5F5]">
      <Search size={20} />
      <h3>Search</h3>
    </div>
  );
};

export default SearchBar;
