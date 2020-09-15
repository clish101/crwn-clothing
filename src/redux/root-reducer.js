import {cartReducer} from './cart/cart.reducer'
const { combineReducers } = require("redux");
const { userReducer } = require("./user/user.reducer");

export default combineReducers({
    user: userReducer,
    cart:cartReducer
})