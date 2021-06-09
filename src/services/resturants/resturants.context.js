import React, {useState, useContext, useEffect, useMemo, createContext} from 'react';
import {resturantsRequest, resturantsTransform} from './resturants.service';

export const ResturantsContext = createContext();

export const ResturantsContextProvider = ({children}) => {

    const [resturants, setResturants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveResturants = () => {
        setIsLoading(true);
        setTimeout(() => {
            resturantsRequest()
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
        retrieveResturants()
    }, [])

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