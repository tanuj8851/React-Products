import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import About from "./Pages/About";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path="/" element={<LandingPage/>}  />
        <Route path="/about" element={<About/>}  />
        <Route path="/products" element={<Product/>}  />
        <Route path="/cart" element={<Cart/>}  />
        <Route path="/register" element={<Register/>}  />
      </Routes>
    </div>
  );
}

export default App;
