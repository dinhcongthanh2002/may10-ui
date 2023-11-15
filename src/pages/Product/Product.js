import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

import { CartContext } from "../../contexts/CartContext";
import Image from "../../components/Image/Image";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const [emulatorImg, setEmulatorImg] = useState("");
  const [emulatorTitle, setEmulatorTitle] = useState("");
  const [emulatorDescription, setEmulatorDescription] = useState("");
  const [emulatorCount, setEmulatorCount] = useState("");
  const [emulatorPrice, setEmulatorPrice] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();

    setTimeout(() => {
      const { image, title, description, count, price } = product;
      setEmulatorImg(image);
      setEmulatorTitle(title);
      setEmulatorDescription(description);
      setEmulatorCount(`Quantity: ${count}`);
      setEmulatorPrice(`$${price}`);
    }, 1.5 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);
  return (
    <div className="md:mx-3 xl:mx-80 my-10 xl:my-36">
      <div className="xl:flex items-center justify-center">
        <div className="px-4 w-full xl:w-[400px] h-96 flex items-center justify-center xl:mr-20">
          {emulatorImg && (
            <Image
              className="w-1/2 md:w-60 xl:w-[250px] h-auto object-cover"
              src={emulatorImg}
              alt={emulatorTitle}
              loading="lazy"
            />
          )}
          {!emulatorImg && <Skeleton count={1} className="w-96 h-80 md:w-[400px] md:h-96" />}
        </div>

        <div className="mx-4 md:mx-10 mt-6 xl:mx-0 xl:mt-0 xl:flex items-center justify-center xl:max-w-[600px]">
          <div>
            <h3 className="font-semibold xl:text-3xl my-2">
              {emulatorTitle || (
                <Skeleton count={2} className="w-full md:w-[600px]" />
              )}
            </h3>
            <p className="xl:text-base my-6">
              {emulatorDescription || (
                <Skeleton count={4} className="w-full md:w-[600px]" />
              )}
            </p>
            <p className="my-3 font-bold">
              {emulatorCount || <Skeleton count={1} className="w-[150px]" />}
            </p>
            <p className="my-4 font-bold text-red-700">
              {emulatorPrice || <Skeleton count={1} className="w-16" />}
            </p>
            <button
              className="fixed md:relative bottom-0 left-0 right-0 border-transparent border-[1px] text-white bg-red-500 py-4 md:px-4 md:py-2 text-sm font-medium hover:bg-shadow hover:text-black xl:hover:border-black z-20"
              // onClick={() => handleAddCart(product)}
              onClick={() => addToCart(product, id)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
