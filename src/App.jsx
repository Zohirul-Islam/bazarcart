import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/cart' element ={<Cart/>}/>
      <Route path='/signin' element ={<SignIn/>}/>
      <Route path='/signin' element ={<Login/>}/>
      
    </Routes>
    </>
  )
}

export default App
