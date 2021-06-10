import React from 'react';
import {Text} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import  ResturantsScreen  from "../../features/resturants/screens/resturants.screens";

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
               component={() => <Text>Resturant Details</Text>}
            />
        </ResturantStack.Navigator>
    )
}

export default ResturantNavigator;