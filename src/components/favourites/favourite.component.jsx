import React, {useContext} from 'react';
import {FavouritesContext} from '../../services/favourites/favourites.context';
import styled from 'styled-components/native';
import {AntDesign} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native';
 
const FavouriteButton = styled(TouchableOpacity) `
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

const Favourites = () => {
    const {favourites, addToFavourites, removeFromFavourites} = useContext(FavouritesContext);
    return (
        <FavouriteButton>
            
        </FavouriteButton>
    )
}

export default Favourites