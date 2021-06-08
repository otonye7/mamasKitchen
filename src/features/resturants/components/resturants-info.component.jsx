import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


const Title = styled.Text `
 padding: ${(props) => props.theme.space[3]};
`;

const ResturantCard = styled(Card) `
   background-color: ${(props) => props.theme.colors.bg.primary}
`;

const ResturantCardCover = styled(Card.Cover) `
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
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