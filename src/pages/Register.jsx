import React, { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import "../static/Authentication.css"
import { AppwriteException } from 'appwrite';

function Register() {
  const navigate = useNavigate()  
  const { user, registerUser } = useAuth();
  const registerForm = useRef(null)
  const [showPassword, setShowPassword] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    if (user) {
      navigate('/account')
    }
  }, [user, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if (password1 !== password2) {
      setErrorMessage("Passwords do not match!")
      return
    }

    const userInfo = { name, email, password: password1 }
    
    try {
      const response = await registerUser(userInfo)
      if (response instanceof AppwriteException) {
        setErrorMessage(response.message)
      } else {
        navigate('/') // Redirect on successful registration
      }
    } catch (error) {
      setErrorMessage("An error occurred during registration. Please try again.")
      console.error("Registration error:", error)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState)
  }

  return (
    <div className="authentication">
      <form ref={registerForm} onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <input autoComplete='off' type="text" required name='name' placeholder='Username' />
        <input autoComplete='off' type="email" required name='email' placeholder='Email' />

        <div className="input-container">
          <input
            autoComplete='off'
            type={showPassword ? 'text' : 'password'}
            required
            name='password1'
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

        <input
          autoComplete='off'
          type={showPassword ? 'text' : 'password'}
          required
          name='password2'
          placeholder='Repeat Password'
        />

        {errorMessage && <p className='error-message'>{errorMessage}</p>}

        <button type='submit'>Sign Up</button>

        <p>Already have an Account? <Link to="/login">Sign In</Link></p>
      </form>
    </div>
  )
}

export default Register
