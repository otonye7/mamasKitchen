import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';
import styled from 'styled-components/native';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturants-info.component';

const SafeArea = styled(SafeAreaView) `
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;


const SearchContainer = styled.View`
 padding: 16px;
`;


const ResturantContainer = styled.View `
 flex: 1;
 padding: 16px;
`;

const ResturantScreen = () => {
    return (
    <SafeArea >
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ResturantContainer>
        <ResturantInfo />
      </ResturantContainer>
    </SafeArea>
    )
}

export default ResturantScreen;