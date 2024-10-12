import { Dimensions, StyleSheet, Text, View } from "react-native";
import react from "react";
import { LinearGradient } from 'expo-linear-gradient';

const {width} = Dimensions.get('screen');

const SliderCard = ({ item, index }) => {
    return (
        <View style={[styles.card, { backgroundColor: item.color }]}>
            <Text>{item.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 16,
        width: (width),
        height: 200,
        backgroundColor: 'blue',
        borderColor: 'black',
    },
});

export default SliderCard;