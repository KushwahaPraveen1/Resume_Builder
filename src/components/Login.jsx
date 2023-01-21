import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

function Login() {
  const [email,setEmail] = useState("");
  async function signup(e) {
  e.preventDefault();
   axios.post("https://resumebuilder-p49e.onrender.com/sign",{
    email : email,     
   })
         .then(result=>{
    console.log(result)
    const accesstoken = result.data.token;
    localStorage.setItem('accesstoken',accesstoken)
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
                        <div class="center">
            <div className="inputbox">
      <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}  required="required" />
      <span>Email Address</span>
    </div>
</div>


            <br></br>
 <br></br>           <input type="checkbox"/> I Understand and accept the Terms of use and Privacy Policy 

<br></br>
<button className='verify_button' onClick={signup}>Verify Otp</button>
<br></br>
Already have an account? <span className="already_acc">Login</span>
        </div>
       

        
         
        </div>
    </>
  )
}

export default Login;