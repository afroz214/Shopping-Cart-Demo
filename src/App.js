import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Order from './pages/Order'
import Demo from './pages/Demo'

const App = () => {
  return (
    <BrowserRouter>
     <Navbar />
     <Route path="/" exact component={Demo} />
     <Route path="/products" exact component={Products} />
     <Route path="/cart" exact component={Cart} />
     <Route path="/checkout" exact component={Checkout} />
     <Route path="/order" exact component={Order} />
     <Route path="/demo" exact component={Login} />
     </BrowserRouter>
  )
}

export default App
