import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../static/Authentication.css';
import { useAuth } from '../utils/AuthContext';
import { AppwriteException } from 'appwrite';

function Login() {
    const navigate = useNavigate();
    const { user, loginUser } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    const loginForm = useRef(null);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = loginForm.current.email.value;
        const password = loginForm.current.password.value;

        const userInfo = { email, password };

        try {
            const response = await loginUser(userInfo);
            if (response instanceof AppwriteException) {
                setErrorMessage(response.message); // Display error if loginUser returns an error
            } else {
                navigate('/'); // Redirect if login is successful
            }
        } catch (error) {
            console.error("Error during login:", error);
            setErrorMessage("An error occurred during login. Please try again.");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <>
            <div className="authentication">
                <form ref={loginForm} onSubmit={handleSubmit}>
                    <h1>SIGN IN</h1>
                    
                    <input autoComplete="off" type="email" required name="email" placeholder="Email" />

                    <div className="input-container">
                        <input 
                            autoComplete="off" 
                            type={showPassword ? 'text' : 'password'} 
                            required 
                            name="password" 
                            placeholder="Password" 
                        />
                        <img
                            src={
                                showPassword
                                    ? 'https://cloud.appwrite.io/v1/storage/buckets/673dadea002e7690484b/files/673dae4c001a90c4868e/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin'
                                    : 'https://cloud.appwrite.io/v1/storage/buckets/673dadea002e7690484b/files/673dae460002455b0cf4/view?project=67179e18003ccf5af8e5&project=67179e18003ccf5af8e5&mode=admin'
                            }
                            alt="toggle visibility"
                            className="toggle-icon"
                            onClick={togglePasswordVisibility}
                        />
                    </div>

                    {/* Display error message if it exists */}
                    {errorMessage && <p className="error-message">{errorMessage}</p>}

                    <button>Sign In</button>

                    <a href="">Forgot Password?</a>
                    <p>Don't have an account? <a href="/register">Sign Up</a></p>
                </form>
            </div>
        </>
    );
}

export default Login;
