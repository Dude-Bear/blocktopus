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
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { config } from './Constants';



function App() {
  // using different URLs for development and deployment
  const BackendURL = config.url;

  const [topCoins, setCoins] = useState([])

useEffect(() => {
    axios.get(BackendURL+"/api/coins").then((response) => {
      setCoins(response.data);
      console.log(response.data)
    });
  }, [BackendURL]);

  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home topCoins={topCoins}/>} />
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