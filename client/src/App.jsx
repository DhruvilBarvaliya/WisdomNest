import React from 'react'

import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/Sign-In' element={<SignIn />} />
          <Route path='/Sign-Up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
