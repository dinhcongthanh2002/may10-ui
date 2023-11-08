import React, { useContext } from "react";
import { FaXmark } from "react-icons/fa6";

import { SidebarContext } from "../../../contexts/SidebarContext";
import { CartContext } from "../../../contexts/CartContext";
import CartItem from "../CartItem/CartItem";

const SideBar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemQuantity, total } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-[110%]"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 xl:px-[35px] overflow-hidden`}
    >
      <div>
        {/* header cart */}
        <div className="w-full flex items-center justify-between py-4 px-2 md:py-3 md:px-1 xl:py-4 xl:px-1 border-b">
          <h3 className="uppercase font-semibold text-sm md:text-sm xl:text-base">
            Shopping Card ({itemQuantity})
          </h3>
          {/* button close */}
          <div
            className="p-2 cursor-pointer md:p-1 xl:p-1"
            onClick={handleClose}
          >
            <FaXmark className="w-6 h-6 md:w-5 md:h-5 xl:w-5 xl:h-5 text-[#757575] hover:text-[#333]" />
          </div>
        </div>
        {/* body cart */}
        <div className="w-full max-h-[650px] xl:max-h-[730px] overflow-y-auto">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        {/* footer cart */}
        <div className="fixed bottom-0 xl:bottom-6 w-full bg-white border-t">
          <div className="w-[358px] xl:w-[506px]">
            {/* total */}
            <div className="flex items-center justify-between my-5 font-semibold uppercase">
              <p>Total:</p>
              <p>${parseFloat(total).toFixed(2)}</p>
            </div>
            {/* checkout */}
            <button className="bg-black w-full text-white py-5 uppercase font-medium rounded-sm ">
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
