import React from "react";
import './ErrorIndicator.css'
import icon from './icon.png'

export const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon" />
            <div className="content">
                <span className="boom">BOOM!</span>
                <span>something has gone terribly wrong</span>
                <span>(but we already sent droids to fix it)</span>
            </div>
            <img src={icon} alt="error icon" />
        </div>
    )
}