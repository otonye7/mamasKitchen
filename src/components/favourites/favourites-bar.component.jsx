import React from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import styled from 'styled-components/native';
import CompactResturantInfo from '../resturants/compact-resturant-info.component';

const FavoriteWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({favourites, onDetail}) => {
    if(favourites.length === 0) {
        return;
    }
    return  (
        <FavoriteWrapper>
            <Text>Favourites</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((resturant) => {
                        const key = resturant.name;
                        return (
                            <View key={key} style={{marginRight: 10}}>
                                <TouchableOpacity onPress={() => onDetail("Resturant Details", {
                                    resturant
                                })}>
                                     <CompactResturantInfo resturant={resturant} />
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </FavoriteWrapper>
    )
}

export default FavouritesBar;