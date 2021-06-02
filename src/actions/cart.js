
export const addToCart = (product, qty) => (dispatch, getState) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            ...product,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}