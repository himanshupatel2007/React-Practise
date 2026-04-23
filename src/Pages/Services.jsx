import React from "react";
import { Link, Outlet } from "react-router-dom";

const Services = () => {
  return (
    <div className="heading">
      <Link className="underline hover:no-underline" to="private">
        Private
      </Link>
      <Link className="underline hover:no-underline" to="public">
        Public
      </Link>
      <Outlet/>
    </div>
  );
};

export default Services;
