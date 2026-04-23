import React  from "react";
import Navbar from "./components/Navbar";
import { Routes, Route  } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import Public from "./Pages/Public";
import Private from "./Pages/Private";

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Services />}>
          <Route path="private" element={<Private />} />
          <Route path="public" element={<Public />} />

        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>

    </>
  );
};

export default App;
