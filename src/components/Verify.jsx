import React, { useState } from 'react'
import axios from 'axios';

function Verify() {
  const [otp,setOtp] = useState("");
  const accesstoken = localStorage.getItem('accesstoken');
 
  async function signup(e) {
  e.preventDefault();
  const headers = { authorization: accesstoken};
  console.log(headers)
  console.log(accesstoken)
  const detailResult = axios.post("https://resumebuilder-p49e.onrender.com/verifyotp", {
    headers:{"Content-Type":'application/json'},
    otp:otp,         
  
})
.then(result=>{
  console.log(result)
 }) 
       .catch(err=>{
        console.log(err)
 }) 
}
  return (
    <>
    <div className='login_main'>
        <div className='login_card'>
            <h1 className='create_account'>Create Account</h1>
             <br></br>
             <input type="email" required="required" value={otp} onChange={(e)=>setOtp(e.target.value)}/>
             <br></br> 
         <input type="checkbox"/> I Understand and accept the Terms of use and Privacy Policy 
         <br></br>
<button className='verify_button' onClick={signup}>Verify Otp</button>
<br></br>
Already have an account? <span className="already_acc">Login</span>
        </div>
       </div>
    </>
  )
}

export default Verify;