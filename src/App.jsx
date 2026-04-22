import React from "react";
import Navbar from "./components/Navbar";
import { Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/service" element={<Services/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </>
  );
};

export default App;
