import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/Image/Image";
import Skeleton from "react-loading-skeleton";

const ProductItem = ({ item }) => {
  const [emulatorImg, setEmulatorImg] = useState("");
  const [emulatorCategory, setEmulatorCategory] = useState("");
  const [emulatorTitle, setEmulatorTitle] = useState("");
  const [emulatorPrice, setEmulatorPrice] = useState("");

  useEffect(() => {
    const { image, title, price, category } = item;
    setTimeout(() => {
      setEmulatorImg(image);
      setEmulatorCategory(category);
      setEmulatorTitle(title);
      setEmulatorPrice(`$${price}`);
    }, 1.5 * 1000);
  }, [item]);
  return (
    <Link
      to={`/product/${item.id}`}
      key={item.id}
      className="relative w-full xl:w-72 h-auto cursor-pointer"
    >
      {/* <div className="w-full h-72 border-[1px] border-shadow border-solid flex items-center justify-center">
                <Image
                  width="40%"
                  height="40%"
                  className="object-cover"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div> */}

      {emulatorImg && (
        <div className="w-full h-72 border-[1px] border-shadow border-solid flex items-center justify-center">
          <Image
            width="40%"
            height="40%"
            className="object-cover"
            src={emulatorImg}
            alt={emulatorTitle}
          />
        </div>
      )}
      {!emulatorImg && <Skeleton count={1} width="100%" height="288px" />}

      <h3 className="uppercase xl:text-[15px] font-semibold pt-4 text-[#999]">
        {emulatorCategory || <Skeleton count={1} width="125px" />}
      </h3>
      <h3 className="py-2 min-h-[75px] font-semibold">
        {emulatorTitle || <Skeleton count={3} className="w-full" />}
      </h3>
      <p className="font-semibold">
        {emulatorPrice || <Skeleton count={1} width="62px" />}
      </p>
    </Link>
  );
};

export default ProductItem;
