import React from 'react'
import './CityDropdown.css'
import { useState, useEffect } from 'react'
import axios from 'axios';

function CityDropdown() {

    //create state for the dropdown options to be stored in
    const [cityData, setCityData] = useState([]);
    //create a state for selectedoption
    const[selectedOption, setSelectedOption] = useState('');


    //https://unilife-server.herokuapp.com/cities

    useEffect(
        ()=> {
            console.log('dropdown loaded!')
            //make an api call to get all cities
            axios.get(`https://unilife-server.herokuapp.com/cities`)
            .then(res=>{
                console.log(res.data.response)
                setCityData(res.data.response)

            })
            .catch(err=>console.log(err))
        }, []
    )

        //will also need a useEffect to be triggered every time there's a change in selectedOption

        const [options, setOptions] = useState([])
        //how do I set/map these into options for my dropdown?
    


  return (
    <div>
        <div className='select-city-form'>
            {
            cityData.map((city)=><p key={city.id}>{city?.name}</p>)
            }
        </div>
        <form>

        </form>
    </div>
  )
}

export default CityDropdown