import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../actions/cart'
import Laptop from './laptop.png'

const Cart = ({ history }) => {

    const cart = useSelector(state => state.cart)

    const { cartItems } = cart

    const user = useSelector(state => state.user)

    const dispatch = useDispatch()

    
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8">
                   {cartItems.length === 0 ? <div className="bg-info text-white py-5">
                       <h1 className="ml-5 mb-3">Your Cart is Empty</h1>
                       <Link to="/products" className="btn btn-primary text-white border border-white ml-5">Continue Shopping</Link>
                   </div> : 
                    <table className="table table-bordered">
                    <thead className="thead-light">
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((p, i) => (
                            <tr key={i}>
                                <td> <img src={Laptop} className="img-fluid" style={{ width: '50px' }} alt="img" /> </td>
                                <td> {p.productName} </td>
                                <td> ${p.price} </td>
                                <td> <select value={p.qty} className="form-control" onChange={e => {
                                    let value = Number(e.target.value)
                                    dispatch(addToCart(p, value))
                                }} >
                                       {[...Array(p.stock).keys()].map(x => (
                                           <option key={x+1} value={x+1}> {x+1} </option>
                                       ))}
                                   </select> </td>
                                   <td className="btn btn-danger ml-4 mt-1" onClick={() => dispatch(removeFromCart(p.id))}>Remove</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                   }
                </div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3 className="mb-4">Order Summary</h3>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p className="lead">Price</p>
                            <p className="lead" style={{ fontWeight: 'bold' }}> ${cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)} </p>
                        </div>
                        {user ? <button onClick={() => history.push('/checkout')} disabled={cartItems.length === 0} className="btn btn-dark">Proceed To Checkout</button> : <Link to="/" className="btn btn-info">Login to Proceed</Link>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
