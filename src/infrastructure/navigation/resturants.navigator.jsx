import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import  ResturantsScreen  from "../../features/resturants/screens/resturants.screens";
import  ResturantsDetails  from "../../features/resturants/screens/resturant-details";

const ResturantStack = createStackNavigator();

const ResturantNavigator = () => {
    return (
        <ResturantStack.Navigator headerMode="none" screenOptions={{
            ...TransitionPresets.ModalPresentationIos
        }}>
            <ResturantStack.Screen 
               name="Resturants"
               component={ResturantsScreen}
            />
               <ResturantStack.Screen 
               name="Resturants Details"
               component={ResturantsDetails}
            />
        </ResturantStack.Navigator>
    )
}

export default ResturantNavigator;