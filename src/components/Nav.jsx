import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'
function Nav() {
  return (
   <>
   <div className="nav">
   <span class="logo">Resume</span>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
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