import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


const Title = styled.Text `
 padding: 16px;
`;

const ResturantCard = styled(Card) `
   background-color: white;
`;

const ResturantCardCover = styled(Card.Cover) `
  padding: 20px;
  background-color: white;
`;


const ResturantInfo = ({resturant = {}}) => {
    const {
        name = 'Mamas Kitchen',
        icon,
        photos = ['https://www.marinareservation.com/articles/wp-content/uploads/2016/07/C-COUTANCEAU-HD-2766.jpg'],
        address,
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = resturant
    return (
        <ResturantCard elevation={5} >
            <ResturantCardCover key={name} source={{uri: photos[0] }} />
            <Title>{name}</Title>
        </ResturantCard>
    )
}


export default ResturantInfo;