import React from 'react'
import './cart-dropdown.styles.scss'
import {Button} from '../custom-button/custom-button'


export const CartDropdown = () => {
    return (
        <div className="cart-dropdown">
           <div className="cart-items"/>
           <Button>GO TO CHECKOUT</Button> 
        </div>
    )
}
