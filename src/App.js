import React from "react";
import { Routes, Route } from "react-router-dom";

// styling
import "./App.css";
import './Res.css'

// Componenets
import Home from "./Components/Home";
import Service from "./Components/Service";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
