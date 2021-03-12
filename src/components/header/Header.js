import React from 'react'
import "./Header.style.scss"
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../assets/crown.svg'
import { auth } from '../firebase/Firebase.utils';


const Header = ({ currentuser }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {
      currentuser ? (
        <div className="option" onClick={()=>auth.signOut()}>
         SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export {Header};
