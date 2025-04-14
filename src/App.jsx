// import { CartProvider } from "./exercise-useContext/CartContext";
// import ProductList from "./exercise-useContext/ProductList";
// import Cart from "./exercise-useContext/Cart";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component-based/Header";
import Footer from "./component-based/Footer";
import Homepage from "./Homepage";
import Cart from "./Cart";
import BookDetail from "./BookDetail";
import NotFound from "./NotFound";
import {  BookProvider } from "./BookProvider";

function App() {
  return (
    <BookProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </BookProvider>
  );
}
export default App;
