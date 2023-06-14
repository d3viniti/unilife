import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';

function App() {
  const [count, setCount] = useState(0)
  //create state to know which page slider is displayed on
  const [currentPage, setCurrentPage] = useState('')


  const baseUrl = 'https://unilife-server.herokuapp.com/cities'


  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path='/' element={<Homepage currentPage={currentPage} baseUrl={baseUrl}/>} /> 
        <Route path='/SeeAllCities' element={<SeeAllCitiesPage />} />
        <Route path='/CityDetails' element={<CityDetailsPage />} />
        <Route path='/HomeDetails' element={<HomeDetailsPage />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
