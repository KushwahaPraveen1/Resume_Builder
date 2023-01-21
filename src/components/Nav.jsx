import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
import logo from "./logo.png";

function Nav() {
  return (
   <>
   <div className="nav">
   <span className="logo">
   <img src={logo} alt='logo'/>
   </span>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact Us</li>
        </ul>
        <ul className="btns">
         <NavLink to = '/login'><button className="login">Login</button> </NavLink> 
          <button className="sign">Sign-Up</button>
        </ul>
   </div>

   
   </>
  );
}

export default Nav;