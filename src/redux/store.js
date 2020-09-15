import rootReducer from './root-reducer'
import logger from 'redux-logger'
const { createStore, applyMiddleware } = require("redux")


const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware(...middlewares))
export default store