import React, {useContext} from 'react';
import { StatusBar, SafeAreaView, FlatList, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import ResturantInfo from '../components/resturants-info.component';
import {ResturantsContext} from '../../../services/resturants/resturants.context';
import {ActivityIndicator, Colors} from 'react-native-paper';
import Search from '../components/search.component';

const SafeArea = styled(SafeAreaView) `
 flex: 1;
 ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
`;


const ResturantContainer = styled.View `
 flex: 1;
 padding: ${(props) => props.theme.space[3]};
`;

const ResturantScreen = ({navigation}) => {
    const {isLoading, error, resturants} = useContext(ResturantsContext)

    return (
    <SafeArea >
        {
           isLoading && (
            <View style={{ position: 'absolute', top: '50%', left: '50%'}}>
                <ActivityIndicator 
                  size={50}
                  style={{ marginLeft: -25}}
                  animating={true}
                  color={Colors.blue300}
                />
            </View> 
        )}
        <Search />
      <ResturantContainer>
        <FlatList 
          data={resturants}
          renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() =>   navigation.navigate("Resturants Details", {
              resturant: item,
            })
          }>
              <ResturantInfo resturant={item}/>
            </TouchableOpacity>  
          )}
          }
          keyExtractor={(item) => item.name}
          contentContainerStyle={{ padding: 5 }}
        />
      </ResturantContainer>
    </SafeArea>
    )
}

export default ResturantScreen;