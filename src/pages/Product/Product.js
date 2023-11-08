import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
const Product = () => {
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  // const [cart, setCart] = useState([]);
  // const handleAddCart = (products) => {
  //   // Kiểm tra xem mục đã tồn tại trong giỏ hàng chưa
  //   const cartItem = cart.findIndex((item) => item.id === products.id);
  //   if (cartItem !== -1) {
  //     // Nếu mục đã tồn tại, tăng số lượng của nó
  //     const updatedCart = [...cart];
  //     updatedCart[cartItem].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     // Nếu mục chưa tồn tại, thêm một mục mới với số lượng là 1
  //     setCart([...cart, { ...products, quantity: 1 }]);
  //   }
  // };
  // console.log(cart);
  //   const countValue = data.rating.map((result) => result.count);
  //   console.log(data.rating.map((result) => result.count));
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="md:mx-3 xl:mx-80 my-10 xl:my-36">
      <div className="xl:flex items-center justify-center">
        <div className="w-full xl:w-[400px] h-96 flex items-center justify-center xl:mr-20">
          <img
            className="w-1/2 md:w-60 xl:w-[250px] h-auto object-cover"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        </div>
        <div className="mx-4 md:mx-10 mt-6 xl:mx-0 xl:mt-0 xl:flex items-center justify-center xl:max-w-[600px]">
          <div>
            <h3 className="font-semibold xl:text-3xl my-2">{product.title}</h3>
            <p className="xl:text-base my-6">{product.description}</p>
            <p className="my-3 font-bold">
              Quantity:{" "}
              <strong className="text-red-700">{product.count}</strong>
            </p>
            <p className="my-4 font-bold text-red-700">$ {product.price}</p>
            <button
              className="fixed md:relative bottom-0 left-0 right-0 border-transparent border-[1px] text-white bg-red-500 py-4 md:px-4 md:py-2 text-sm font-medium hover:bg-shadow hover:text-black xl:hover:border-black"
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
