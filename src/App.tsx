import React from 'react'
import './App.css'
import LoginPage from './auth/login/loginPage'
import Navbar from './navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Register from './auth/login/Register'
import Dashboard from './components/Dashboard'
import Addtasks from '../src/components/Addtasks'
import About from './components/About'
import Tasklist from './components/Tasklist'
function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<LoginPage></LoginPage>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/addTasks' element={<Addtasks/>}></Route>
      <Route path='/about' element={<About />} />
      <Route path='/tasklist' element={<Tasklist />}></Route>
     </Routes>
    </React.Fragment>
  )
}

export default App
