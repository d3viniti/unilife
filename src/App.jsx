import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<Homepage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
