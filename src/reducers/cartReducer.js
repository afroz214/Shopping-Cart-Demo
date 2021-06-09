
export const cartReducer = (state = { cartItems: [] }, action) => {
    const { type, payload } = action
    switch(type) {
        case 'ADD_TO_CART':
            let existingProduct = state.cartItems.find(p => p.id === payload.id)
            if (existingProduct) {
                const index = state.cartItems.findIndex(o => o.id === payload.id)
                state.cartItems.splice(index, 1)
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                    // cartItems: state.cartItems.map(p => p.id === existingProduct.id ? payload : p)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, payload]
                }
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(x => x.id !== payload)
            }    
            default:
                return state
    }
}

export const addAddress = (state = {}, action) => {
    const { type, payload } = action
    switch(type) {
        case 'ADD_ADDRESS':
            return payload
        default:
            return state    
    }
}