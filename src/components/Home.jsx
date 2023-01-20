import React from "react";
import './home.css'
function Home() {
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
          <button className="login">Login</button>
          <button className="sign">Sign-Up</button>
        </ul>
   </div>

   
   </>
  );
}

export default Home;