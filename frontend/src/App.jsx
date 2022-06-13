import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import Index from './pages/Index'
import Coin from './pages/Coin'
import History from './pages/History'
import Register from './pages/Register'
import SignIn from './pages/SignIn'
import Learn from './pages/Learn'



function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/index' element={<Index />} />
        <Route path='/Coin' element={<Coin />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/history' element={<History />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App