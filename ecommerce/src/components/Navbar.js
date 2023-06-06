import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Redux Store</span>
      <div>
        <NavLink className="navLink" to="/">
          Home
        </NavLink>
        <NavLink className="navLink" to="/cart">
          Cart
        </NavLink>
        <span className="cartCount">Cart items:{items.length} </span>
      </div>
    </div>
  );
};

export default Navbar;
