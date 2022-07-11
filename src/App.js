import React from "react";
import { Routes, Route } from "react-router-dom";



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
        <Route path="/thedev" element={<Home />} />
        <Route path="thedev/service" element={<Service />} />
        <Route path="thedev/contact" element={<Contact />} />
        <Route path="thedev/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
