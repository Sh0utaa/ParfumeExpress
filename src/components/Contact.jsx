import React from 'react'
import "../static/Contact.css"

function Contact() {
  return (
    <>
        <div className="contact-container">

            <div className="contact">
                <div className="email">
                    <h3>Send us a message!</h3>
                    <input type="text" placeholder='Write something' />
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
                        FACEBOOK
                    </li>
                    <li>
                        FACEBOOK
                    </li>
                    <li>
                        FACEBOOK
                    </li>
                    <li>
                        FACEBOOK
                    </li>
                    <li>
                        FACEBOOK
                    </li>
                    <li>
                        FACEBOOK
                    </li>
                </ul>
            </div>
            

        </div>
    </>
)
}

export default Contact