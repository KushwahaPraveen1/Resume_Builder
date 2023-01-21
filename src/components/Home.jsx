import React from 'react';
import './home.css';
import mnc1 from "./mnc1.png";
import mnc2 from "./mnc2.png";
import mnc3 from "./mnc3.png";
import sample from "./sample-res.png";

function Home() {
  return (
    <>
        <div className='head'>
            <div className='content'>
            <div className='large'>
                <p>Build Your Resume With Us</p>
            </div>
            <div className='small'>
                <p>Simple. Modern. <span className='ylw'>#GetHired.</span></p>
            </div>
            <button className="create">Build Resume</button>
            </div>
        </div>
        <div className='container'>
            <div className='black'>
            <div className='line'>Get landed to your Dream Job</div>
            <div className='mnc'>
                <img src={mnc1} alt="Google"></img>
                <img src={mnc2} alt="Wipro"></img>
                <img src={mnc3} alt="Accenture"></img>
            </div>
            </div>
        </div>
        <div className='container'>
            <div className='black-2'>
            <div className='line-1'>MODERN RESUME TEMPLATES</div>
            <div className='line-2'>Minimal design. Positive impact.</div>
            <div className='frame'>
            <img src={sample} alt="Template"></img>
            </div>
            </div>
        </div>
        <div className='contact'>
            <div className='contact-head'>CONTACT US</div>
            <div class="fcontainer">
                <form name="myForm" class="fill">
                    <div class="fcol1">
                    <p>Name</p>
                    <input type="text" placeholder="Enter your full name" name="fname" required />
                    </div>
                    <div class="fcol1">
                    <p>Email ID</p>
                    <input type="text" placeholder="Enter your email" name="fname" required/>
                    </div>
                    <div class="fcol1">
                    <textarea id="long" name="msg" placeholder="Leave message" required></textarea>
                    <div class="fcol1">
                        <button type="submit">Send Message</button>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Home;