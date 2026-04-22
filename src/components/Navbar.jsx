import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-around text-center w-screen bg-gray-800 items-center h-10 text-amber-50 ">
      <Link className="underline hover:no-underline" to="/">
        Home
      </Link>
      <Link className="underline hover:no-underline" to="/service">
        Service
      </Link>
      <Link className="underline hover:no-underline" to="/contact">
        Contact
      </Link>
      <Link className="underline hover:no-underline" to="/profile">
        Profile
      </Link>
    </div>
  );
};

export default Navbar;
