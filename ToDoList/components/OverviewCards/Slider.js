import { FlatList, StyleSheet, Text, View } from 'react-native';
import react from 'react';
import SliderCard from './SliderCard'

const Cards = [
    {
        id: 1,
        title: 'Routine',
        color: 'blue',
    },
    {
        id: 2,
        title: 'Productivity',
        color: 'green',
    },
    {
        id: 3,
        title: 'All Tasks',
        color: 'yellow',
    }
]

const Slider = () => {
    return (
        <FlatList
            data={Cards}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            renderItem={({ item, index }) => <SliderCard item={item} index={index} />}
            keyExtractor={(item) => item.id.toString()}
            style={styles.slider}
        />
    )
}

const styles = StyleSheet.create({
    slider: {
        padding: 16,
    }
})

export default Slider;