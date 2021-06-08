import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme';
import ResturantScreen from './src/features/resturants/screens/resturants.screens';

export default function App() {
  return (
   <>
   <ThemeProvider theme={theme}>
      <ResturantScreen />
   </ThemeProvider>
   <ExpoStatusBar style="auto" />
    </>
  );
}


