import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink, useHistory } from 'react-router-dom'

const Navbar = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const user = useSelector(state => state.user)

    const logoutHandler = () => {
        dispatch({
            type: 'LOG_IN',
            payload: null
        })
        localStorage.removeItem('userInfo')
        history.push('/')
    }

    return (
           <nav className="navbar navbar-expand-sm navbar-dark">
             <div className="container">
             <Link className="navbar-brand">Shopping App</Link>
             <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                 <span className="navbar-toggler-icon"></span>
             </button>
             <div className="navbar-collapse collapse" id="navbarCollapse">
                 <ul className="navbar-nav ml-auto"> 
                 {user ?
                 <> 
                  <NavLink to="/products" exact className="nav-item nav-link">Products</NavLink>
                  <NavLink to="/cart" exact className="nav-item nav-link">Cart</NavLink>
                  <li onClick={logoutHandler} style={{ cursor: 'pointer' }} className="nav-item nav-link">Logout</li>
                  </>
                  : 
                  <>
                 <NavLink to="/cart" exact className="nav-item nav-link">Cart</NavLink>
                 <NavLink to="/" exact className="nav-item nav-link">Login</NavLink>
                </>
                }
                 </ul> 
                 </div>  
             </div>   
            </nav> 
    )
}

export default Navbar
