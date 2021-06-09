import React, {useState, useEffect, createContext} from 'react';

import {locationRequest, locationTransform} from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({children}) => {

    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState("san francisco");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    

    const onSearch = (searchKeyword = "Antwerp") => {
        setIsLoading(true);
        setKeyword(searchKeyword)
        locationRequest(searchKeyword.toLowerCase())
        .then(locationTransform)
        .then(result => {
            setIsLoading(false)
            setLocation(result)
        })
        .catch((err) => {
            setIsLoading(false)
            setError(err)
        })
    }

    useEffect(() => {
        onSearch(keyword)
    }, [])

    return(
        <LocationContext.Provider
          value={{
              isLoading,
              error,
              location,
              search: onSearch,
              keyword
          }}
        >
            {children}
        </LocationContext.Provider>
    )
}