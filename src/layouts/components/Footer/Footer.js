import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full xl:min-h-[210px] flex items-center justify-center bg-black text-white">
      <p>
        Copyright &copy; <Link to="/"> MAY10 </Link> 2023. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
