import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component'
import {CartDropdown} from '../cart-dropdown/cart-dropdown.component'


const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
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
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon/>
      </div>
      {
        hidden?null:
<CartDropdown/>
      }
      
    </div>
  );
};

const MapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
  currentUser,
  hidden
});

export default connect(MapStateToProps)(Header);
