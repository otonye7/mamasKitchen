import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';
import {SvgXml} from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';


const Title = styled.Text `
font-family: ${(props) => props.theme.fonts.heading};
 font-size: ${(props) => props.theme.fontSizes.body};
`;

const ResturantCard = styled(Card) `
   background-color: ${(props) => props.theme.colors.bg.primary};
   margin-top: ${(props) => props.theme.space[3]};
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

const Rating = styled.View `
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`

const Section = styled.View `
  flex-direction: row;
  align-items: center;
`;


const SectionEnd = styled.View `
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

const Open = styled(SvgXml)`
  flex-direction: row;
`;


const ResturantInfo = ({resturant = {}}) => {
    const {
        name = 'Mamas Kitchen',
        icon,
        photos = ['https://www.marinareservation.com/articles/wp-content/uploads/2016/07/C-COUTANCEAU-HD-2766.jpg'],
        address = 'Grieves food store',
        isOpenNow = true,
        rating = 5,
        isClosedTemporarily
    } = resturant
    
    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <ResturantCard elevation={5} >
            <ResturantCardCover key={name} source={{uri: photos[0] }} />
            <Info>
               <Title>{name}</Title>
               <Section>
               <Rating>
               {
                   ratingArray.map(() => (
                       <SvgXml xml={star} width={20} height={20}/>
                   ))
               }
               </Rating>
               <SectionEnd>
                   {
                       isOpenNow && <Open xml={open} width={20} height={20}/>
                   }
               </SectionEnd>
               </Section>
               <Address>{address}</Address>
            </Info>
        </ResturantCard>
    )
}


export default ResturantInfo;