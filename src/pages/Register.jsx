import { React, useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import "../static/Authentication.css"

function Register() {

  const navigate = useNavigate()  
  const {user, registerUser} = useAuth()
  const registerForm = useRef(null)
  const [showPassword, setShowPassword] = useState(false)


  useEffect(() => {
      if(user){
        navigate('/account')
      }
  }, [])
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const name = registerForm.current.name.value
    const email = registerForm.current.email.value
    const password1 = registerForm.current.password1.value
    const password2 = registerForm.current.password2.value

    if(password1 !== password2) {
      alert("Passwords do not match!")
      return
    }

    const userInfo = { name, email, password1, password2 }
    registerUser(userInfo)
    }

    const togglePasswordVisibility = () => {
      setShowPassword(prevState => !prevState)
    }

  return (
    <div className="authentication">
    <form ref={registerForm} onSubmit={handleSubmit}>
        <h1>SIGN UP</h1>
        <input autoComplete='off' type="text" required name='name' placeholder='Username' />
        <input autoComplete='off' type="email" required name='email' placeholder='Email' />

        <div className="input-container">
          <input autoComplete='off' type={showPassword ? 'text' : 'password'}  required name='password1' placeholder='Password' />
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

        <input autoComplete='off' type={showPassword ? 'text' : 'password'}  required name='password2' placeholder='Repeate Password' />


        <button>Sign Up</button>
        <a href="">Forgot Password?</a>
        <p>Already have an Account?
            <a href="/login">Sign In</a>
        </p>
    </form>
</div>
  )
}

export default Register