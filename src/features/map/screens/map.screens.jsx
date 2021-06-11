import React from 'react';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';
import Search from '../components/search.components';

const Map = styled(MapView) `
  height: 100%;
  width: 100%;
`;

const MapScreens = () => {
    return (
        <>
        <Search />
         <Map />
         </>
    ) 
}

export default MapScreens