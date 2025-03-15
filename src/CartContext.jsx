import { createContext, useState, useContext } from "react";
// 1. Tạo context
const CartContext = createContext();
// 2. Provider để bọc ứng dụng
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  // Xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };
  // Đếm tổng số sản phẩm trong giỏ
  const totalItems = cart.length;
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
// 3. Custom hook để sử dụng CartContext dễ dàng hơn
export const useCart = () => useContext(CartContext);
