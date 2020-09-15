import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import React from 'react'
import {connect} from 'react-redux'
import {toggleCartState} from '../../../redux/cart/cart.action'

const CartIcon = ({toggleCartState}) => {
    return (
        <div className="cart-icon">
        <ShoppingIcon className='shopping-icon'/>
            <span className="item-count" onClick={toggleCartState}>0</span>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>({
    toggleCartState:()=>dispatch(toggleCartState())
})

export default connect(null,mapDispatchToProps)(CartIcon)