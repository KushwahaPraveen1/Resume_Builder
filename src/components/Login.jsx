import React from 'react'
import './Login.css'

function Login() {
  return (
    <>
    <div className='login_main'>
        <div className='login_card'>
            <h1 className='create_account'>Create Account</h1>
            {/* <input className="email_input" type="text" placeholder='Email Address' required/> */}

            <div class="center">
            <div className="inputbox">
      <input type="email" required="required" />
      <span>Email Address</span>
    </div>
</div>


            <br></br>
 <br></br>           <input type="checkbox"/> I Understand and accept the Terms of use and Privacy Policy 

<br></br>
<button className='verify_button'>Verify Otp</button>
<br></br>
Already have an account? <span className="already_acc">Login</span>
        </div>
       

        
         
        </div>
    </>
  )
}

export default Login;