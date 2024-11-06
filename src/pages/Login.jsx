import React from 'react'
import '../static/Authentication.css'

function Login() {
  return (
    <>
        <div className="authentication">
            <form action="">
                <h1>SIGN IN</h1>
                <input autoComplete='off' type="email" required name='Email' placeholder='Email' />
                <input autoComplete='off' type="password" required name='Password' placeholder='Password' />
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