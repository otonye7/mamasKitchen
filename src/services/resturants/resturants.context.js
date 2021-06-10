import React, {useState, useContext, useEffect, useMemo, createContext} from 'react';
import {resturantsRequest, resturantsTransform} from './resturants.service';
import {LocationContext} from '../location/location.context';
export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({children}) => {

    const [resturants, setResturants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {location} = useContext(LocationContext)

    const retrieveResturants = (loc) => {
        setIsLoading(true);
        setResturants([]);
        setTimeout(() => {
            resturantsRequest(loc)
            .then(resturantsTransform)
            .then((results) => {
                setIsLoading(false)
                setResturants(results)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err)
            })
        }, 2000)
    }
    
    useEffect(() => {
        if (location) {
          const locationString = `${location.lat},${location.lng}`;
          retrieveResturants(locationString)
        } 
    }, [location])

    return (
        <ResturantsContext.Provider 
        value={{
            resturants,
            isLoading,
            error
        }}>
            {children}
        </ResturantsContext.Provider>
    )
}