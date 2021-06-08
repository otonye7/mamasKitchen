import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';


const Title = styled.Text `
font-family: ${(props) => props.theme.fonts.heading};
 font-size: ${(props) => props.theme.fontSizes.body};
`;

const ResturantCard = styled(Card) `
   background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Address = styled.Text `
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

const ResturantCardCover = styled(Card.Cover) `
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View `
  padding: ${(props) => props.theme.space[3]};
`


const ResturantInfo = ({resturant = {}}) => {
    const {
        name = 'Mamas Kitchen',
        icon,
        photos = ['https://www.marinareservation.com/articles/wp-content/uploads/2016/07/C-COUTANCEAU-HD-2766.jpg'],
        address = 'Grieves food store',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = resturant
    return (
        <ResturantCard elevation={5} >
            <ResturantCardCover key={name} source={{uri: photos[0] }} />
            <Info>
               <Title>{name}</Title>
               <Address>{address}</Address>
            </Info>
        </ResturantCard>
    )
}


export default ResturantInfo;