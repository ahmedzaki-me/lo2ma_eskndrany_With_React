import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
export function CartProvider({ children }) {
  const cartItemsInLS = JSON.parse(localStorage.getItem("cartItemsInLS"));
  const [cartItems, setCartItems] = useState(cartItemsInLS || []);
  const [showCart, setShowCart] = useState(false);
  const countOfItems = cartItems.reduce((total, item) => total + item.count, 0);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.price * item.count,
    0,
  );

  useEffect(() => {
    localStorage.setItem("cartItemsInLS", JSON.stringify(cartItems));
  }, [cartItems]);

  function increaseCount(productId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }

  function decreaseCount(productId) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item,
      ),
    );
  }

  function removeFromCart(productId) {
    setCartItems((prev) =>
      prev.filter((item) => {
        return item.id !== productId;
      }),
    );
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        countOfItems,
        subTotal,
        showCart,
        setShowCart,
        increaseCount,
        decreaseCount,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
