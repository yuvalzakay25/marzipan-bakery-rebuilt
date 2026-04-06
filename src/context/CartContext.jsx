import { createContext, useState } from "react";

// יצירת Context
export const CartContext = createContext();

export function CartProvider({ children }) {
  // state של העגלה
  const [cartItems, setCartItems] = useState([]);
  //   state של פתיחת העגלה (האם החלונית פתוחה או סגורה)
  const [isCartOpen, setIsCartOpen] = useState(false);

  // פונקציה לפתיחת וסגירת העגלה
  function toggleCart() {
    setIsCartOpen((prev) => !prev);
  }
  // הוספת מוצר לעגלה
  function addToCart(product) {
    setCartItems((prevItems) => {
      // בדיקה אם המוצר כבר קיים
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // אם קיים — הגדל כמות
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      // אם לא קיים — הוסף חדש
      return [...prevItems, { ...product, quantity: 1 }];
    });
  }

  // פונקציה לעדכון כמות מוצר (הגדלה או הקטנה)
  function updateQuantity(productId, change) {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + change }
          : item,
      );

      return updatedItems.filter((item) => item.quantity > 0);
    });
  }
  // פונקציה להסרת מוצר מהעגלה
  function removeFromCart(productId) {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  }
  // פונקציה לניקוי כל העגלה
  function clearCart() {
    setCartItems([]);
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        toggleCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
