import React from "react";
import { GoSearch } from "react-icons/go";
const SearchBar = () => {
  return (
    <div className="max-w-[50rem] w-full md:w-[90%] px-4 md:ltr:ml-4 md:rtl:mr-4 rounded-lg bg-white outline-none border-2 border-gray-100 dark:bg-white flex items-center flex-grow md:ml-3">
      <GoSearch style={{ color: "rgb(156 163 175)" }} />
      <input
        className="px-4 py-2 md:py-3 bg-transparent outline-none w-full "
        type="search"
        placeholder={`Search`}
      />
    </div>
  );
};

export default SearchBar;
