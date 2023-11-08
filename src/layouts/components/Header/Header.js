import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TfiBag } from "react-icons/tfi";

import logo from "../../../assets/images/logo.png";
import Image from "../../../components/Image/Image";
import SubHeader from "./SubHeader";
import { SidebarContext } from "../../../contexts/SidebarContext";
import { CartContext } from "../../../contexts/CartContext";

const Header = () => {
  const { itemQuantity } = useContext(CartContext);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };
  return (
    <>
      <header className="max-w-full w-full">
        <div>
          {/* sub header */}
          <SubHeader />
          {/* header */}
          <div className="header h-16 w-full bg-white px-2 xl:px-80 flex justify-between items-center leading-[64px] text-sm xl:text-base font-semibold transition-transform">
            {/* logo */}
            <Link to="/">
              <Image
                className="xl:w-12 xl:h-12 object-cover"
                src={logo}
                alt="logo"
              />
            </Link>
            {/* sub nav */}
            <div>
              <ul className="flex items-center justify-between">
                <li className="xl:p-2 mx-[6px] xl:mx-1 hover:underline hover:decoration-2 hover:underline-offset-[10px]">
                  <a href="#men">Men</a>
                </li>
                <li className="xl:p-2 mx-[6px] xl:mx-1 hover:underline hover:decoration-2 hover:underline-offset-[10px]">
                  <a href="#women">Women</a>
                </li>
                <li className="xl:p-2 mx-[6px] xl:mx-1 hover:underline hover:decoration-2 hover:underline-offset-[10px]">
                  <a href="#jewelery">Jewelery</a>
                </li>
                <li className="xl:p-2 mx-[6px] xl:mx-1 hover:underline hover:decoration-2 hover:underline-offset-[10px]">
                  <a href="#electronics">Electronics</a>
                </li>
              </ul>
            </div>
            {/* cart */}
            <div
              className="relative p-[9px] cursor-pointer hover:bg-shadow rounded-full"
              onClick={() => setIsOpen(!isOpen)}
            >
              <TfiBag className="w-6 h-6" />
              <p className="absolute top-0 right-0 text-xs text-white bg-red-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">{itemQuantity}</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
