import React from "react"

import {ReactComponent as ShoppingIcon} from '../assets/shopping-bag.svg'
import {connect} from 'react-redux'


import "./CartIcon.style.scss"


const CartIcon = ({ toggleIsDropDown, cartItems }) => (
  <div className="cart-icon" onClick={() => toggleIsDropDown()}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{cartItems.length}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleIsDropDown: (val) => dispatch({ type: "TOGGLE_DROPDOWN" }),
});

const mapStateToProps=state=>({
  cartItems:state.cartItems
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);