import React from 'react'
import "../static/Contact.css"

function Contact() {
  return (
    <>
        <div className="contact-container">
            <div className="contact">
                <h3>SEND US AN EMAIL!</h3>
                <form action="">
                    <input autoComplete='off' type="text" />
                    <button>SEND</button>
                </form>
                <ul>
                    <li>
                        <p>
                            example@gmail.com
                        </p>
                    </li>

                    <li>
                        <p>
                            call us:
                            +995 999 999 999
                        </p>
                    </li>
                </ul>
            </div>

            <div className="info-container">
                <div className="info">
                    <ul>
                    <li>
                        <a href="/">
                        FACEBOOK
                        </a>
                    </li>
                    <li><a href="/">
                        TIKTOK
                        </a></li>
                    <li><a href="/">
                        INSTAGRAM
                        </a></li>

                    </ul>
                </div>
{/* 
                <div className="shota-tevdorashvili">
                    <p>Like what you see? This website was made by <strong>Shota Tevdorashvili</strong></p>
                    <p>Contact me at shotatevdorashvilibusiness@gmail.com</p>
                </div> */}
            </div>




        </div>
    </>
)
}

export default Contact