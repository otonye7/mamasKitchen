import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {List} from 'react-native-paper';
import ResturantInfo from '../components/resturants-info.component';
import { StatusBar, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';


const SafeArea = styled(SafeAreaView) `
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;

const ResturantsDetail = ({route}) => {
    const [breakfastExpanded, setBreakfastExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [drinksExpanded, setDrinksExpanded] = useState(false);

   const {resturant} = route.params;

   return (
       <SafeArea>
           <ResturantInfo resturant={resturant}/>
            <ScrollView>
           <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={breakfastExpanded}
            onPress={() => setBreakfastExpanded(!breakfastExpanded)}
           >
            <List.Item title="Egg and Plantain" />
            <List.Item title="Egg and Yam" />
            <List.Item title="Chips and Suya" />
            <List.Item title="burger and fish" />
            <List.Item title="Indomie" />
           </List.Accordion>

           <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="hamburger" />}
            expanded={lunchExpanded}
            onPress={() => setLunchExpanded(!lunchExpanded)}
           >
            <List.Item title="Amala and ewedu" />
            <List.Item title="Afang and Poundo" />
            <List.Item title="Egusi and Garri" />
            <List.Item title="Okro and Semo" />
            <List.Item title="Rice and Catfish" />
           </List.Accordion>

           <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-variant" />}
            expanded={dinnerExpanded}
            onPress={() => setDinnerExpanded(!dinnerExpanded)}
           >
            <List.Item title="White Rice" />
            <List.Item title="Egg and Yam" />
            <List.Item title="Chips and Rice" />
            <List.Item title="burger and fish" />
            <List.Item title="Indomie" />
           </List.Accordion>

           <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="cup" />}
            expanded={drinksExpanded}
            onPress={() => setDrinksExpanded(!drinksExpanded)}
           >
             <List.Item title="Heineken" />
            <List.Item title="Budweisser" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
            <List.Item title="Sprite" />
           </List.Accordion>
           </ScrollView>

       </SafeArea>
   )
}

export default ResturantsDetail;