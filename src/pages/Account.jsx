import React from 'react'
import '../static/Account.css'
import { useAuth } from '../utils/AuthContext'

function Account() {
    const { user, logoutUser } = useAuth()

    return (
    <>
        <div className="account-container">
            <div className="profile-division">
                <h2>PUBLIC PROFILE</h2>
            </div>
            <div className="profile-container">
                <div className="image-wrapper">
                    <div className="profile-picture-wrapper">
                        <img src="src\assets\DefaultProfilePicture.png" alt="Default Profile Picture" />
                    </div>
                </div>
                <div className='profile-information'>
                    <p>Change Username</p>
                    <input type="text" autoComplete='off' placeholder={user.name}/>
                    <p>Change Email</p>
                    <input type="email" autoComplete='off' placeholder={user.email}/>
                    <button>Update profile</button>
                </div>

            </div>


            <div className="profile-division">
                <h2>VERIFY ACCOUNT</h2>
            </div>
            <div className="authentication-container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus exercitationem at esse doloremque dicta fuga tempora dolore itaque molestiae ut magnam sunt sequi voluptatem repellat ullam omnis, libero, necessitatibus est.</p>
                <button>Verify Account</button>                
            </div>


            {/* CHANGE PASSWORD */}
            <div className="profile-division">
                <h2>CHANGE PASSWORD</h2>
            </div>
            <div className="authentication-container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus exercitationem at esse doloremque dicta fuga tempora dolore itaque molestiae ut magnam sunt sequi voluptatem repellat ullam omnis, libero, necessitatibus est.</p>
                <button>Change Password</button>                
            </div>

            {/* CHANGE PASSWORD */}
            <div className="profile-division">
                <h2>LOG OUT</h2>
            </div>
            <div className="authentication-container">
                <p>Log out of your account</p>
                <button onClick={logoutUser}>Log Out</button>
            </div>


            {/* DELETE ACCOUNT */}
            <div className="profile-division">
                <h2>DELETE ACCOUNT</h2>
            </div>
            <div className="authentication-container">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus exercitationem at esse doloremque dicta fuga tempora dolore itaque molestiae ut magnam sunt sequi voluptatem repellat ullam omnis, libero, necessitatibus est.</p>
                <button>Delete Account</button>                
            </div>


        </div>
    </>
  )
}

export default Account