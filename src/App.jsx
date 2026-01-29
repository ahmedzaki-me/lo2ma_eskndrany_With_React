import "./App.css";
import "./components/home.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import SideCart from "./components/SideCart";

import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";
function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<p>الصفحة غير موجودة</p>} />
        </Routes>
        <SideCart />
        <Footer />
      </CartProvider>
    </ProductsProvider>
  );
}

export default App;
