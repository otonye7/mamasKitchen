import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  ResturantsScreen  from "../../features/resturants/screens/resturants.screens";

const ResturantStack = createStackNavigator();

const ResturantNavigator = () => {
    return (
        <ResturantStack.Navigator headerMode="none">
            <ResturantStack.Screen 
               name="Resturants"
               component={ResturantsScreen}
            />
        </ResturantStack.Navigator>
    )
}

export default ResturantNavigator;