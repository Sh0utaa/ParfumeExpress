import { React, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../utils/AuthContext'
import "../static/Authentication.css"

function Register() {

  const navigate = useNavigate()  
  const {user, registerUser} = useAuth()
  const registerForm = useRef(null)


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


  return (
    <div className="authentication">
    <form ref={registerForm} onSubmit={handleSubmit}>
        <h1>REGISTER</h1>
        <input autoComplete='off' type="text" required name='name' placeholder='Username' />
        <input autoComplete='off' type="email" required name='email' placeholder='Email' />
        <input autoComplete='off'type="password" required name='password1' placeholder='Password' />
        <input autoComplete='off' type="password" required name='password2' placeholder='Repeate Password' />
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