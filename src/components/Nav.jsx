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
        <NavLink to = '/' className="_nav"><li>Home</li></NavLink>
        <NavLink to = '/' className="_nav"><li>About</li></NavLink>
        <NavLink to = '/' className="_nav"><li>Services</li></NavLink>
        <NavLink to = '/' className="_nav"><li>Contact Us</li></NavLink>
        </ul>
        <ul className="btns">
         <NavLink to = '/login' className="_nav"><button className="login">Login</button> </NavLink> 
         <NavLink to = '/login' className="_nav"><button className="sign">Sign-Up</button> </NavLink> 
        </ul>
   </div>

   
   </>
  );
}

export default Nav;