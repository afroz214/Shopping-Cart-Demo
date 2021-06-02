export const userReducer = (state = null, action) => {
    const { type, payload } = action
    switch(type) {
        case 'LOG_IN':
            return payload
        case 'LOGOUT':
            return payload    
        default:
            return state       
    }
}