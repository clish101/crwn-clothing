import React from 'react'
import './custom-button.scss'

export const Button = ({ children, IsGoogleSignIn,inverted, ...otherProps }) => {
    return (

        <button className={`${inverted ? 'inverted' : ''} ${IsGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>{children}</button>

    )
}
