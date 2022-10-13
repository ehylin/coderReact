import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContainer } from "./components/CartContainer";
import { ItemListContainer } from './layouts/HomeStart'
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import Navbar from './components/NavBar'

const Routing = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/item/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default Routing;