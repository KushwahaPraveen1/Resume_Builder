import React from 'react';
import "./footer.css";
import logo from "./logo.png";
function Footer() {
  return (
    <>
    <div className='foot'>
        <div className='part1'>
        <img src={logo} alt='logo'/>
        <span>&copy;2023 resumearchitect.com | All Rights Reserved</span>
        </div>
        <div className='part2'>
            <ul>
                <li>Resume Builder</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Footer;