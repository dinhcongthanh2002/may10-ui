import React from "react";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="h-9 w-full bg-primary px-4 xl:px-80 flex justify-between items-center leading-9 text-xs font-semibold">
      <Link to="/">
        <div className="text-xl font-lobster hover:opacity-60 cursor-pointer">
          MAY10
        </div>
      </Link>
      <div className="flex items-center text-[10px] xl:text-xs">
        {/* item 1 */}
        <div className="hover:opacity-60 cursor-pointer">
          <a href="/">Find a Store</a>
        </div>
        <span className="mx-1 xl:mx-2 font-semibold text-sm">|</span>
        {/* item 2 */}
        <div className="hover:opacity-60 cursor-pointer">
          <a href="/">Help</a>
        </div>
        <span className="mx-1 xl:mx-2 font-semibold text-sm">|</span>
        {/* item 3 */}
        <div className="hover:opacity-60 cursor-pointer">
          <a href="/">Join Us</a>
        </div>
        <span className="mx-1 xl:mx-2 font-semibold text-sm">|</span>
        {/* item 4 */}
        <div className="hover:opacity-60 cursor-pointer">
          <a href="/">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
