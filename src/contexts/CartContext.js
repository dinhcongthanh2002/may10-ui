import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  //   item amount state
  const [itemQuantity, setItemQuantity] = useState(0);
  //   total price state
  const [total, setTotal] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const total = cart.reduce((accumulator, currenItem) => {
      return accumulator + currenItem.price * currenItem.quantity;
    }, 0);
    setTotal(total);
  });

  useEffect(() => {
    if (cart) {
      const quantity = cart.reduce((accumulator, currenItem) => {
        return accumulator + currenItem.quantity;
      }, 0);
      setItemQuantity(quantity);
    }
  }, [cart]);

  const addToCart = (product, id) => {
    // Kiểm tra xem mục đã tồn tại trong giỏ hàng chưa
    const cartItem = cart.findIndex((item) => item.id === product.id);
    if (cartItem !== -1) {
      // Nếu mục đã tồn tại, tăng số lượng của nó
      const updatedCart = [...cart];
      updatedCart[cartItem].quantity += 1;
      setCart(updatedCart);
    } else {
      // Nếu mục chưa tồn tại, thêm một mục mới với số lượng là 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: cartItem.quantity - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.quantity < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
        itemQuantity,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
