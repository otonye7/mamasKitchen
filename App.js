import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import {theme} from './src/infrastructure/theme';
import {Text} from 'react-native';
import ResturantScreen from './src/features/resturants/screens/resturants.screens';
import {useFonts as useOswald, Oswald_400Regular} from '@expo-google-fonts/oswald';
import {useFonts as useLato, Lato_400Regular} from '@expo-google-fonts/lato';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Ionicons } from "@expo/vector-icons";
import {ResturantsContext, ResturantsContextProvider} from './src/services/resturants/resturants.context';

const Tab = createBottomTabNavigator();

const Setting = () => (
  <Text>Hey</Text>
)

const Map = () => (
  <Text>Hey</Text>
)
 
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
     <ResturantsContextProvider>
      <NavigationContainer>
        <Tab.Navigator  
           screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if (route.name === "Resturants") {
                iconName = "md-restaurant";
              } else if (route.name === "Setting") {
                iconName = "md-settings";
              } else if (route.name === "Map") {
                iconName = "md-map";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name='Resturants' component={ResturantScreen}/>
          <Tab.Screen name='Map' component={Map}/>
          <Tab.Screen name='Setting' component={Setting}/>
        </Tab.Navigator>
      </NavigationContainer>
      </ResturantsContextProvider>
   </ThemeProvider>
   <ExpoStatusBar style="auto" />
    </>
  );
}


