import React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';


const ResturantInfo = ({resturant = {}}) => {
    const {
        name = 'Mamas Kitchen',
        icon,
        photos = ['https://www.marinareservation.com/articles/wp-content/uploads/2016/07/C-COUTANCEAU-HD-2766.jpg'],
        address,
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = resturant
    return (
        <Card elevation={5} style={styles.card}>
            <Card.Cover key={name} style={styles.cover} source={{uri: photos[0] }} />
            <Text style={styles.title}>{name}</Text>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white'
    },
    cover: {
        padding: 20,
        backgroundColor: 'white'
    },
    title: {
        padding: 20
    }
})

export default ResturantInfo;