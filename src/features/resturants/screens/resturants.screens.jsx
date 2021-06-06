import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import ResturantInfo from '../components/resturants-info.component';

const ResturantScreen = () => {
    return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar />
      </View>
      <View style={styles.list}>
        <ResturantInfo />
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     marginTop: StatusBar.currentHeight
    },
    search: {
     padding: 16
    },
    list: {
     flex: 1,
     padding: 16
    }
   });

export default ResturantScreen;