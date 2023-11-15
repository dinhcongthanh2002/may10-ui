import React, { useContext } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import Image from "../../../components/Image/Image";
import { CartContext } from "../../../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  return (
    <div className="w-full min-h-[120px] py-3 border-b xl:px-3">
      <div className="flex items-center">
        {/* image */}
        <Link to={`/product/${item.id}`}>
          <Image
            className="max-w-[64px] mr-4"
            src={item.image}
            alt={item.title}
            loading="lazy"
          />
        </Link>
        <div className="flex flex-col flex-1">
          {/* title & delete */}
          <div className="flex items-center justify-between">
            <Link
              to={`/product/${item.id}`}
              className="md:max-w-[150px] xl:max-w-[300px] font-semibold md:text-sm xl:text-sm uppercase"
            >
              {item.title}
            </Link>
            <div
              className="p-2 bg-red-600 cursor-pointer"
              onClick={() => removeFromCart(item.id)}
            >
              <RiDeleteBinLine size={16} color="#fff" />
            </div>
          </div>

          {/* input & price */}
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <p
                className="p-1 leading-3 cursor-pointer"
                onClick={() => decreaseAmount(item.id)}
              >
                -
              </p>
              <p className="border-[1px] border-[#999] rounded-sm px-2 mx-2 text-sm cursor-text">
                {item.quantity}
              </p>
              <p
                className="p-1 leading-3 cursor-pointer"
                onClick={() => increaseAmount(item.id)}
              >
                +
              </p>
            </div>
            {/* price */}
            <div className="font-semibold">
              ${`${parseFloat(item.price * item.quantity).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
