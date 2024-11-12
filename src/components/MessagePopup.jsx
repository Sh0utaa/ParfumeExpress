// MessagePopup.js
import React from 'react';
import '../static/MessagePopup.css'; // You can style it here or inline

function MessagePopup({ message, onClose }) {
    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default MessagePopup;
