import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          
          <Link to="/" className="navbar-brand">Let's Play</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end " id="navbarNavAltMarkup">
            <div className="navbar-nav ">

              <Link to="/category" className="nav-link">Category</Link>
              <Link to="/wishlist" className="nav-link">Wishlist</Link>
              <Link to="/cart" className="nav-link">Cart</Link>


            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
