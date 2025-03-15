
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


  const handleQuantityChange = (id, newQuantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };

  const handleIncrement = (id) => {
    handleQuantityChange(id, cart.find((item) => item.id === id).quantity + 1);
  };

  const handleDecrement = (id) => {
    handleQuantityChange(id, cart.find((item) => item.id === id).quantity - 1);
  };

  // Đếm tổng số sản phẩm trong giỏ
  const totalItems = cart.length;
  const totalPrice = cart.reduce((acc,cur)=>{
    return acc + (cur.price * cur.quantity)
  },0)
  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalItems, totalPrice,handleIncrement,handleDecrement,handleQuantityChange }}
    >
      {children}
    </CartContext.Provider>
  );
};
// 3. Custom hook để sử dụng CartContext dễ dàng hơn
export const useCart = () => useContext(CartContext);

