import { toggleCartTypes } from './cart.types'
export const toggleCartState = cart => ({
    type: toggleCartTypes.TOGGLE_CART_TYPES,
    payload: cart
});

export const addItem = item => ({
    type: toggleCartTypes.ADD_ITEM,
    payload: item,
})
