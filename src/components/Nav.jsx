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
        <NavLink to = '/' className="_nav"><li><a href="#home-hd">Home</a> </li></NavLink>
        <NavLink to = '/' className="_nav"><li><a href="">About</a> </li></NavLink>
        <NavLink to = '/' className="_nav"><li><a href="">Services</a> </li></NavLink>
        <NavLink to = '/' className="_nav"><li><a href="#con">Contact Us</a></li></NavLink>
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