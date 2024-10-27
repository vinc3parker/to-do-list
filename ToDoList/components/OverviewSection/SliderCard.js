import { Dimensions, StyleSheet, Text, View } from "react-native";
import react from "react";
import { LinearGradient } from 'expo-linear-gradient';

const cardMargin = 10;

const SliderCard = ({ item, index, width }) => {
    
    const cardWidth = width;
    
    return (
        <View style={[styles.card, { backgroundColor: item.color, width: cardWidth, }]}>
            <Text>{item.title}</Text>
            <Text>{index}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        marginHorizontal: cardMargin,
        padding: 16,
        borderRadius: 16,
        height: 'flex',
        backgroundColor: 'blue',
        borderColor: 'black',
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0 , height: 2},
        shadowRadius: 8,
        elevation: 5,
    },
});

export default SliderCard;