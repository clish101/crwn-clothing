import {toggleCartTypes} from './cart.types'
const INITIAL_STATE ={
    hidden:true,
}

export const cartReducer=(state=INITIAL_STATE, action)=>{
    switch (action.type) {
        case toggleCartTypes.TOGGLE_CART_TYPES:
            return({
                ...state,
                hidden:!state.hidden        
            })
            break;
    
        default:
            return state
            break;
    }
}