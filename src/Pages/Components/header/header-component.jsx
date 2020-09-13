import React from 'react';
import './header.styles.scss';
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { auth } from '../../../firebase/firebase.utils'

export const Header = ({ currentUser }) => {
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
                {
                    currentUser ?
                        <div className="option" onClick={() => auth.signOut()}>
                            SIGN OUT
                    </div> :
                        <Link className="option" to="/signIn">
                            SIGN IN
                        </Link>
                }
            </div>

        </div>
    )
}
