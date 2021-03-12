import React from "react"

import CustomButtom from '../custom-button/CustomButton'

import './CartDropdown.style.scss'

const CartDropdown=()=>(
    <div className="cart-dropdown">
        <div className="cart-items"></div>
        <CustomButtom>Go To Checkout</CustomButtom>
    </div>
)

export default CartDropdown;