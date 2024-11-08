import React, { useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../static/Authentication.css'
import { useAuth } from '../utils/AuthContext'

function Login() {
    const navigate = useNavigate() 
    const {user, loginUser} = useAuth()

    const loginForm = useRef(null)
    useEffect(() => {
      if(user){
        navigate('/')
      }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = loginForm.current.email.value
    const password = loginForm.current.password.value

    const userInfo = {email, password}

    loginUser(userInfo)
  }

  return (
    <>
        <div className="authentication">
            <form ref={loginForm} onSubmit={handleSubmit}>
                <h1>SIGN IN</h1>
                <input autoComplete='off' type="email" required name='email' placeholder='Email' />
                <input autoComplete='off' type="password" required name='password' placeholder='Password' />
                <button>Sign In</button>
                <a href="">Forgot Password?</a>
                <p>Don't have an account?
                    <a href="/register">Sign Up</a>
                </p>
            </form>
        </div>
    
    </>
  )
}

export default Login