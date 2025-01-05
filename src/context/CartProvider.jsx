import { useState } from "react";
import { CartContext } from "./CartContext";



export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((prod) => prod.id === product.id);
      if (existingProduct) {
        return prevCart.map((prod) =>
          prod.id === product.id
            ? { ...prod, qty: prod.qty + product.qty }
            : prod
        );
      } else {
        return [...prevCart, product];
      }
    });
  };

  const getQuantity = () => {
    return cart.reduce((total, product) => total + product.qty, 0);
  };
  const getTotal = () => {
    const priceOnly = cart.map((prod) => prod.qty * prod.price);
    const total = priceOnly.reduce((acc, current) => acc + current, 0);
    return total;
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, getQuantity, removeFromCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}
