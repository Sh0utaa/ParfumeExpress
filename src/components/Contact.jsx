import React from 'react'
import "../static/Contact.css"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";

function Contact() {
  return (
    <>
        <div className="contact-container">

                <div className="contact">
                    <div className="email">
                        <h3>Send us a message!</h3>
                        <div>
                            <input type="text" placeholder='Write something' />
                        </div>
                        <button>SUBMIT</button>
                    </div>
                    <div className="referrals">
                        <ul>
                            <li>
                                hi@gmail.com
                            </li>
                            <li>example@gmail.com</li>
                            <li>+995 999 999 999</li>
                        </ul>

                        <h3>Like what you see? This website was made by <a href="/">ShotaTevdorashvili</a>!</h3>
                    </div>
                </div>

                <div className="socials-logos-container">
                <ul>
                    <li>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn />
                    </a>
                    </li>
                    <li>
                    <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                        <FaTiktok />
                    </a>
                    </li>
                </ul>
                </div>

                <div className="bootstrap-box"></div>
            

        </div>
    </>
)
}

export default Contact