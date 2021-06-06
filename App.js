import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import ResturantScreen from './src/features/resturants/screens/resturants.screens';

export default function App() {
  return (
   <>
    <ResturantScreen />
    <ExpoStatusBar style="auto" />
    </>
  );
}


