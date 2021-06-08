import React from 'react';
import { StatusBar, SafeAreaView, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturants-info.component';

const SafeArea = styled(SafeAreaView) `
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;


const SearchContainer = styled.View`
 padding: ${(props) => props.theme.space[3]};
`;


const ResturantContainer = styled.View `
 flex: 1;
 padding: ${(props) => props.theme.space[3]};
`;

const ResturantScreen = () => {
    return (
    <SafeArea >
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ResturantContainer>
        <FlatList 
          data={[{name: 1}, {name: 2}, {name: 3}, {name: 4}]}
          renderItem={() =>  <ResturantInfo />}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 5 }}
        />
      </ResturantContainer>
    </SafeArea>
    )
}

export default ResturantScreen;