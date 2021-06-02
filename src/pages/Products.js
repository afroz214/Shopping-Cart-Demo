import React from 'react'
import { useDispatch } from 'react-redux'
import Laptop from './laptop.png'
import { addToCart } from '../actions/cart'

const Products = ({ history }) => {

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

    const dispatch = useDispatch()


    return (
        <div className="container mt-5">
            <div className="row">
                {dummyProduct.map((product, index) => (
                    <div key={index} className="col-md-4 text-center">
                        <div className="card card-body m-2">
                      <img src={Laptop} className="img-fluid" alt="img" />
                      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                          <p className="lead"> {product.productName} </p>
                          <p className="lead" style={{ fontWeight: 'bold' }}> ${product.price} </p>
                      </div>
                      <button onClick={() => {
                          dispatch(addToCart(product, 1))
                          history.push('/cart')
                      }} className="btn btn-danger">Add To Cart</button>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
