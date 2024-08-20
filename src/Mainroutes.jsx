import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Page/Home'
import Product from './Page/Product'
import Description from './Page/Description'
import AddtoCart from './Page/AddtoCart'
import Login from './Page/Login'
import Emailtologin from './Page/Emailtologin'

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Men/:str' element={<Product />} />
        <Route path='/Women' element={<Product />}></Route>
        <Route path='/Mobile-Covers' element={<Product />}></Route>
        <Route path='/Description/:id' element={<Description />}></Route>
        <Route path='/Cart' element={<AddtoCart />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Loginwithemail' element={<Emailtologin />}></Route>
      </Routes>
    </div>
  )
}
export default Mainroutes
