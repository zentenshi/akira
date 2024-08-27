import React from "react";
import {NavLink} from "react-router-dom";
import "./Header.css";

const Header = () => {
    return(
        <header className="header">
            <div className="logo-container">
                <img alt="Akira Logo" src={require("../../assets/athena-logo.png")}/>
                <h2>Akira</h2>
            </div>
            <div className="links">
                <NavLink className="nav-links" to="/">Pricing</NavLink>
                <NavLink className="nav-links" to="/">About Us</NavLink>
                <NavLink className="nav-links" to="/">Others</NavLink>
            </div>
            <button>Register</button>
      </header>
    );
};

export default Header;