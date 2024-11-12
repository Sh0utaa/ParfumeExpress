import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../static/Authentication.css'
import { useAuth } from '../utils/AuthContext'

function Login() {
    const navigate = useNavigate() 
    const {user, loginUser} = useAuth()
    const [showPassword, setShowPassword] = useState(false)

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

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState)
  }

  return (
    <>
      <div className="authentication">
          <form ref={loginForm} onSubmit={handleSubmit}>
              <h1>SIGN IN</h1>
              
              <input autoComplete='off' type="email" required name='email' placeholder='Email' />

              <div className="input-container">
                  <input 
                      autoComplete='off' 
                      type={showPassword ? 'text' : 'password'} 
                      required 
                      name='password' 
                      placeholder='Password' 
                  />
                  <img
                      src={
                          showPassword
                              ? 'src/svg/visibility_off_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
                              : 'src/svg/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.svg'
                      }
                      alt="toggle visibility"
                      className="toggle-icon"
                      onClick={togglePasswordVisibility}
                  />
              </div>

              <button>Sign In</button>
              <a href="">Forgot Password?</a>
              <p>Don't have an account? <a href="/register">Sign Up</a></p>
          </form>
      </div>
    </>
  )
}

export default Login