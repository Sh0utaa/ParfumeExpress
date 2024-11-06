import React from 'react'
import "../static/Authentication.css"

function Register() {
  return (
    <div className="authentication">
    <form action="">
        <h1>REGISTER</h1>
        <input autoComplete='off' type="text" required name='Username' placeholder='Username' />
        <input autoComplete='off' type="email" required name='Email' placeholder='Email' />
        <input autoComplete='off'type="password" required name='Password1' placeholder='Password' />
        <input autoComplete='off' type="password" required name='Password2' placeholder='Repeate Password' />
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