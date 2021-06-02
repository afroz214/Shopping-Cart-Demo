import React from 'react'
import { useSelector } from 'react-redux'

const Order = () => {

    const user = useSelector(state => state.user)
    const cart = useSelector(state => state.cart)
    const address = useSelector(state => state.address)

    return (
        <div className="container my-4">
            <h1 className="display-4 text-center mb-4" style={{ textDecoration: 'underline' }}>All Details</h1>
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <p className="lead text-center">User Details</p>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>User Name:</p>
                            <p>{user.name}</p>
                        </div>
                        <hr />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>User Email:</p>
                            <p>{user.email}</p>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <p className="lead text-center">Delivery Address</p>
                        <hr />
                        <div className="d-flex">
                            <p style={{  margin: '0' }}>Delivery Address:-</p>
                            <p className="ml-2">{address.address}</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card card-body">
                        <p className="lead text-center">Total Price</p>
                        <hr />
                        <div style={{ display:'flex', justifyContent: 'space-between' }}>
                            <p>Payable Price: </p>
                            <p style={{ fontWeight: 'bold' }}> ${cart.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order
