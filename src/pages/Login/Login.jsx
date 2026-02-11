import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/netflix_logo.png'

const Login = () => {
  const [signstate,setSignState] = useState("Sign In")
  return (
    <div className='Login'>
      <img src={logo} alt="Netflix Logo" className='login-logo' />
      <div className="login-form">
        <h1>{signstate}</h1>
        <form action>
          {signstate === "Sign Up"? <input type="text" placeholder='Your name' /> : <></>}
         
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Password' />
          <button>{signstate}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signstate === "Sign In" ?  <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p> : <p>Already have an account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>}
         
          
        </div>
      </div>
    </div>
  )
}

export default Login