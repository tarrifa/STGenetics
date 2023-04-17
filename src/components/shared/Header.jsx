import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-4xl text-300">Good Hamburger</h1>
          <p className="text-gray-500">Since 2023</p>
        </div>
        <form>
          <div className="w-full relative">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              className="bg-[#FFF9EB] w-full py-2 pl-10 pr-4 rounded-lg outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
