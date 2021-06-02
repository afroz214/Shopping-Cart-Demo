import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from './reducers/userReducer'
import { cartReducer, addAddress } from './reducers/cartReducer'
import thunk from 'redux-thunk'


const reducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    address: addAddress
})

const userFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    user: userFromStorage,
    cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store