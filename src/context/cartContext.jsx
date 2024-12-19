import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <cartContext.Provider value={{ cart, setCart, removeFromCart, clearCart }}>
      {children}
    </cartContext.Provider>
  );
};
