import React from 'react';
import styled from 'styled-components/native';
import {Text} from 'react-native';
import WebView from 'react-native-webview';

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const CompactResturantInfo = ({resturant}) => {
    console.log(resturant)
    return (
        <Item>
            <CompactImage source={{ uri: resturant.photos[0] }}/>
            <Text>
                {resturant.name}
            </Text>
            
        </Item>
    )
};

export default CompactResturantInfo;