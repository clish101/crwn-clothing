import { toggleCartTypes } from './cart.types'
import { addItemToCart } from './cart.utils';
const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case toggleCartTypes.TOGGLE_CART_TYPES:
            return {
                ...state,
                hidden: !state.hidden
            }
            break;
        case toggleCartTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        default:
            return state
            break;
    }
}