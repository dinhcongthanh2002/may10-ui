import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";

import ProductItem from "./ProductItem";

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
        {products.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
