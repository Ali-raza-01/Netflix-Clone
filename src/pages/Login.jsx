import React, { useState } from 'react'
import '../pages/Login.css'
import logo from '../assets/logo.png'
import { login,signup } from '../firebase'
import netflix_spinner from '../assets/netflix_spinner.gif'

const Login = () => {
  const [user , setUser] = useState("Sign in")
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)



  const user_auth = async (e)=>{
    e.preventDefault()
    setLoading(true)
    if(user==='Sign in'){
      await login(email,password)
    }else{
      await signup(name,email,password)
    }
    setLoading(false)

  }


  
  return (
    loading?<div className="login-spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className="login">
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{user}</h1>
        <form>
          {user === "Sign up" ? <input type="text" placeholder='Your Name' onChange={(e)=>setName(e.target.value)}/>:<></>}
          <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
          <button onClick={user_auth} type='submit'>{user}</button>
          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label htmlFor="">Remember Me</label>
              <p>Need help ?</p>
            </div>
          </div>

       </form>
       <div className="form-swith">
        {user==="Sign in"
        ?  <p>New To Netflix?<span onClick={()=> setUser("Sign up")}>Sign Up Now</span></p>
        : <p>already have an account ?<span onClick={()=>setUser("Sign in")}>Sign in Now</span></p>
        }
       
        

       </div>
      </div>
    </div>
  )
}

export default Login