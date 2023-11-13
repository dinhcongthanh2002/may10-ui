import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Image from "../../../components/Image/Image";

const Products = ({ title, params, link }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/category/${params}`
        );
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mx-4 xl:mx-80 xl:my-10">
      <h2 className="text-2xl font-medium mt-16 cursor-pointer" id={link}>
        {title}
      </h2>
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 xl:grid-cols-4 gap-y-10 xl:gap-y-8 xl:gap-x-8">
        {products.length > 0 ? (
          products.map((item, index) => (
            <Link
              to={`/product/${item.id}`}
              key={item.id}
              className="relative w-full xl:w-72 h-auto cursor-pointer"
            >
              <div className="w-full h-72 border-[1px] border-shadow border-solid flex items-center justify-center">
                <Image
                  width="40%"
                  height="40%"
                  className="object-cover"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </div>
              <h3 className="uppercase xl:text-[15px] font-semibold pt-4 text-[#999]">
                {item.category}
              </h3>
              <h3 className="py-2 min-h-[75px] font-semibold">{item.title}</h3>
              <p className="font-semibold">$ {item.price}</p>
            </Link>
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
};

export default Products;
