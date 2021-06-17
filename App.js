import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import {ResturantsContextProvider} from './src/services/resturants/resturants.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {FavouritesContextProvider} from './src/services/favourites/favourites.context';
import { Navigation } from "./src/infrastructure/navigation/index";
import firebase from 'firebase/app'



const firebaseConfig = {
  apiKey: "AIzaSyBlIKL7w6ES2va0_2YEVot70Rywy-IOFhE",
  authDomain: "mamakitchen-c5929.firebaseapp.com",
  projectId: "mamakitchen-c5929",
  storageBucket: "mamakitchen-c5929.appspot.com",
  messagingSenderId: "844208627158",
  appId: "1:844208627158:web:11e5226fbe0927faa6d877"
};

firebase.initializeApp(firebaseConfig);
 
export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  })

  const  [latoLoaded] = useLato({
    Lato_400Regular
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
   <>
   <ThemeProvider theme={theme}>
     <FavouritesContextProvider>
     <LocationContextProvider>
     <ResturantsContextProvider>
           <Navigation />
      </ResturantsContextProvider>
      </LocationContextProvider>
      </FavouritesContextProvider>
   </ThemeProvider>
   <ExpoStatusBar style="auto" />
    </>
  );
}


