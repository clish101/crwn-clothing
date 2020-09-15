import {toggleCartTypes} from './cart.types'
export const toggleCartState=cart=>({
    type:toggleCartTypes.TOGGLE_CART_TYPES,
    payload:cart
})