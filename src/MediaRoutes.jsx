import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home_m from './MediaPage/Home_m'
import EmailLogin_m from './MediaPage/EmailLogin_m'
import Categorie_m from './MediaPage/Categorie_m'
import Exprole from './MediaPage/Exprole'
import Login_m from './MediaPage/Login_m'
import Product_ from './MediaPage/Product_'
import Description_m from './MediaPage/Description_m'
import ProductList from './MediaPage/AddToCart_m'

const MediaRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home_m />}></Route>
        <Route path='/Men' element={<Product_ />}></Route>
        <Route path='/Login' element={<Login_m />}></Route>
        <Route path='/EmailLogin_m' element={<EmailLogin_m />}></Route>
        <Route path='/Categorie_m' element={<Categorie_m />}></Route>
        <Route path='/Exprole' element={<Exprole />}></Route>
        <Route path='/Description/:id' element={<Description_m />}></Route>
        <Route path='/Cart' element={<ProductList />}></Route>


      </Routes>
    </div>
  )
}

export default MediaRoutes
