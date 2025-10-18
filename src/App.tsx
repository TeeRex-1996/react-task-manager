import React from 'react'
import './App.css'
import LoginPage from './auth/login/loginPage'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Register from './auth/login/Register'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='dashboard/:username' element={<Dashboard />}></Route>
    </Routes>
    </React.Fragment>
  )
}

export default App
