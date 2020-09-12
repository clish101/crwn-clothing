import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'

export const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/" >
                    <Logo />
                </Link>
            </div>
            <div className="options">
                <Link to="/shop" className="option">
                    SHOP
                </Link>
                <Link to="/shop" className="option">
                    CONTACT
                </Link>
            </div>

        </div>
    )
}
