import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'

const Checkout = ({ history }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const dispatch = useDispatch()

    const user = useSelector(state => state.user)

    const cart = useSelector(state => state.cart)

    const onSubmit = (data) => {
        dispatch({
            type: 'ADD_ADDRESS',
            payload: data
        })
        history.push('/order')
    }

    return (
        <div className="container my-4">
            <h1 className="display-4" style={{ textDecoration: 'underline' }}>Checkout Page</h1>
            <div className="row">
                <div className="col-md-6 mt-5">
                    <div className="card card-body">
                        <p className="lead text-center" style={{ textDecoration: 'underline' }}>User Information</p>
                        <hr />
                        <div className="d-flex mx-5" style={{ justifyContent: 'space-between' }}>
                            <p>User Name: </p>
                            <p> {user.name} </p>
                        </div>
                        <hr />
                        <div className="d-flex mx-5" style={{ justifyContent: 'space-between' }}>
                            <p>User Email: </p>
                            <p> {user.email} </p>
                        </div>
                        <hr />
                        <div className="d-flex mx-5" style={{ justifyContent: 'space-between' }}>
                            <p>Total Price: </p>
                            <p style={{ fontWeight: 'bold' }}>${cart.cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0)} </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="card card-body">
                        <p className="lead text-center" style={{ textDecoration: 'underline' }}>Delivery Address</p>
                        <hr />
                        <textarea rows="5" {...register('address', { required: true })} className="form-control" placeholder="Enter your Address"></textarea>
                        {errors.address && <p className="text-danger"> Address is required </p>}
                        <button onClick={handleSubmit(onSubmit)} className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout
