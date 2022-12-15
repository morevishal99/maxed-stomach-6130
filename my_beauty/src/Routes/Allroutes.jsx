import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Pages/Products'
import Navbar from "../Components/Navbar"
import Product from '../Pages/Product'
import Cart from '../Pages/Cart'
import Footer from '../Pages/Footer'
import Home from '../Pages/Home'

import Signup from '../Pages/Signup'
import Login from '../Pages/Login'
import CheckOut from '../Pages/Checkout'


const Allroutes = () => {
  return (
    <div>
        <Navbar></Navbar>
        
    
        <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
          {/* <Route path="/products/:page" element={<Products></Products>}></Route>
           <Route path='/products/:page/:id' element={<Product></Product>}></Route> */}
           <Route path="/cart" element={<Cart></Cart>}></Route>
           <Route path="/signup" element={<Signup></Signup>}></Route>
           <Route path="/login" element={<Login></Login>}></Route>
           <Route path ="/checkout" element={<CheckOut></CheckOut>}></Route>
        </Routes>
     <Footer></Footer>
    </div>
  )
}

export default Allroutes