import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Home, Login } from './pages'

const App = () => (
  <div className="App">
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </div>
)

export default App