import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./App.css"
import Header from './Header/index'
import Section from './Section/index'
import Featured from './Section/Featured/index'
import About from './Section/About/index'
import Services from './Section/Services/index'
import Footer from './Footer/index'
import Products from './ECommerce/Products/index'
import ProductDetails from './ECommerce/ProductDetails/index'
import Wallet from './ECommerce/Wallet/index'
import Login from './User/Login/index'
import Register from './User/Register/index'
import HomePage from "./HomePage/index";
import PaymentForm from './ECommerce/PayService/index'
import Orders from './ECommerce/PayService/Orders'
import Success from './ECommerce/PayService/Success'
import './App.css'
import "../public/assets/css/main.css" 
import { Routes, Route, Navigate } from 'react-router-dom'
function App() {
  return (
  <Routes>
     <Route path="/" element={<HomePage/>} />
    <Route path="/Urunler" element={<Products/>} />
    <Route path='/GirisYap' element={<Login />} />
    <Route path='/KayıtOl' element={<Register />} />
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route path="/Sepetim" element={<Wallet />} />

    <Route path="/Odeme" element={<Orders />} />
    <Route path="/OdemeBilgi" element={<Success />} />

  </Routes>
  
  )
}

export default App
