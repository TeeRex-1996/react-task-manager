import React from 'react'
import './App.css'
import LoginPage from './auth/login/loginPage'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Register from './auth/login/Register'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
    </Routes>
    </React.Fragment>
  )
}

export default App
