import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import CarItems from "./pages/CarItems";
import HomeStart from './layouts/HomeStart'
import ItemDetallsContainer from "./components/ItemDetallsContainer";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}  >
          <Route index path="/" element={<HomeStart />} />
          <Route path="carrito" element={<CarItems />} />
          <Route path="/item/:productId" element={<ItemDetallsContainer />} />
        </Route>
       
      </Routes>
    </Router>
  );
};

export default Routing;