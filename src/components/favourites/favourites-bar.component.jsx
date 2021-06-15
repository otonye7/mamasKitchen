import React from 'react';
import {View, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import CompactResturantInfo from '../resturants/compact-resturant-info.component';

const FavoriteWrapper = styled.View`
  padding: 10px;
`;

const FavouritesBar = ({favourites}) => {
    return  (
        <FavoriteWrapper>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    favourites.map((resturant) => {
                        const key = resturant.name;
                        return (
                            <View key={key} style={{marginRight: 10}}>
                                <CompactResturantInfo resturant={resturant} />
                            </View>
                        )
                    })
                }
            </ScrollView>
        </FavoriteWrapper>
    )
}

export default FavouritesBar;