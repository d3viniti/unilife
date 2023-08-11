import {useState, createContext, useEffect} from 'react'

export const ShortlistContext = createContext();

export default function ShortlistContextProvider(props){
    //create state to hold Shortlist
    const [shortlist, setShortlist] = useState([])

        //this function's job is to add the property to the Shortlist
    const addShortlistItem = (propToAdd) =>{

    }

return(
    <ShortlistContext.Provider value={{shortlist}} >
        {props.children}
    </ShortlistContext.Provider>
)

}