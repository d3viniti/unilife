import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import CityDetailsPage from './pages/CityDetailsPage/CityDetailsPage';
import HomeDetailsPage from './pages/HomeDetailsPage/HomeDetailsPage';
import SeeAllCitiesPage from './pages/SeeAllCitiesPage/SeeAllCitiesPage';
import Footer from './components/Footer/Footer'
import {useState, createContext, useEffect} from 'react'
import ShortlistContextProvider from './contexts/ShortlistContext'

// export const FavoritesContext = createContext();

// export default function FavoritesContextProvider(props){
//     //create my global state
//     const [favorites, setFavorites] = useState([])

function App() {
  const [count, setCount] = useState(0)
  //create state to know which page slider is displayed on
  const [currentPage, setCurrentPage] = useState('')


  const baseUrl = 'https://unilife-server.herokuapp.com/cities'


  return (
    <BrowserRouter>
      <ShortlistContextProvider>
      <Header /> 
      <Routes>
        <Route path='/' element={<Homepage currentPage={currentPage} baseUrl={baseUrl}/>} /> 
        <Route path='/SeeAllCities' element={<SeeAllCitiesPage baseUrl={baseUrl}/>} />
        <Route path='/CityDetails/:cityId' element={<CityDetailsPage />} />
        <Route path='/HomeDetails/:propertyId' element={<HomeDetailsPage />} /> 
       
      </Routes>
      <Footer />
      </ShortlistContextProvider>
    </BrowserRouter>
  )
  }
export default App
