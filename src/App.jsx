import React from 'react'
import Home from './pages/Home/Home.jsx'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login.jsx'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login/>}/>
        </Routes>
    </div>
  )
}

export default App