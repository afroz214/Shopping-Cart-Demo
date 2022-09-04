import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Laptop from './laptop.png'
import { addToCart } from '../actions/cart'
import { useHistory } from 'react-router'
import { deleteUser, editUser } from '../reducers/userReducer'

const Products = ({  }) => {

    const dummyProduct = [
        {
            id: '1',
            productName: 'Macbook',
            price: 299,
            stock: 10
        },
        {
            id: '2',
            productName: 'Macbook Pro',
            price: 499,
            stock: 5
        },
        {
            id: '3',
            productName: 'Lenovo Aspire',
            price: 199,
            stock: 3
        },
    ]

    const { users } = useSelector(state => state.login)

    const dispatch = useDispatch()
    const history = useHistory()

    const editUserHandler = (product) => {
        dispatch(editUser(product))
        history.push("/")
    }


    return (
        <div className="container mt-5">
            <button onClick={() => history.push("/")}>Back</button>
            <div className="row">
                {users.map((product, index) => (
                    <div key={index} className="col-md-4 text-center">
                        <div className="card card-body m-2">
                      <img src={Laptop} className="img-fluid" alt="img" />
           
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                          <p className="lead"> {product?.firstName} </p>
                          <p className="lead" style={{ fontWeight: 'bold' }}> ${product.lastName} </p>
                      </div>
                      <div className='d-flex' style={{ justifyContent: "space-around",}}>
                      <button onClick={() => editUserHandler(product)} className="btn btn-primary">Edit</button>
                      <button onClick={() => dispatch(deleteUser(product))} className="btn btn-danger">Delete</button>
                      </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
