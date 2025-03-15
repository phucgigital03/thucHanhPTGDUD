import { CartProvider } from "./exercise-useContext/CartContext";
import ProductList from "./exercise-useContext/ProductList";
import Cart from "./exercise-useContext/Cart";


function App() {
  return (
    <CartProvider>
      <div style={{ padding: "20px" }}>
        <h1> Shopping Cart</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  );
}
export default App;
