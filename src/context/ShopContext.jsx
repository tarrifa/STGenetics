import { createContext, useState, useMemo } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [history, setHistory] = useState([]);

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    cartItems.forEach((item) => {
      totalAmount += item[2];
    });

    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => [...prev, itemId]);
  };

  const addToHistory = (item) => {
    setHistory((prev) => [...prev, [Date.now(), item]]);
    setCartItems([]);
  };
  const contextValue = useMemo(() => ({
    cartItems,
    addToCart,
    getTotalCartAmount,
    addToHistory,
    history,
  }), [cartItems, history]);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
