import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import ProductShowcase from "./Components/ProductShowcase";
import Footer from "./Components/Footer";

function App() {
  const [addtoCart, setCart] = useState([]);

  function handleCart(name,price,img) {
    setCart((prev) => {
      return [...prev, {name,price,img}];
    });
  }

  function handleClick(foo) {
    setCart((prev) => {
      return prev.filter((item,index) => {
       return index !== foo;
      })
    })
  }

  return (
    <div>
      <Router>
        <Navbar cart={addtoCart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products">
            <Route path="/" element={<Products />} />
            <Route
              path=":slug"
              element={<ProductShowcase buy={handleCart} />}
            />
          </Route>
          <Route path="cart" element={<Cart cart={addtoCart} click={handleClick} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
