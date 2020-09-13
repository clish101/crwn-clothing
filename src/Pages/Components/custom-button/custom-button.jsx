import React from 'react'
import './custom-button.scss'

export const Button = ({ children, IsGoogleSignIn, ...otherProps }) => {
    return (

        <button className={`${IsGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>

    )
}
