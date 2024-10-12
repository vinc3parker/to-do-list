import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import SliderCard from './SliderCard';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.7;
const cardMargin = 10;

const getItemLayout = (_, index) => ({
    length: cardWidth + cardMargin * 2,
    offset: (cardWidth + cardMargin * 2) * index,
    index,
});

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
    },
    {
        id: 4,
        title: 'Overview',
        color: 'red',
    },
];

const loopedCards = [
    Cards[Cards.length - 2],
    Cards[Cards.length - 1],
    ...Cards,
    Cards[0],
    Cards[1],
];

const Slider = () => {
    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const totalCardWidth = cardWidth + cardMargin * 2;
        const totalWidth = totalCardWidth * Cards.length;

        if (contentOffsetX >= totalWidth + totalCardWidth * 2) {
            flatListRef.current.scrollToOffset({
                offset: contentOffsetX - totalWidth,
                animated: false,
            });
        }

        if (contentOffsetX <= totalCardWidth * 2) {
            flatListRef.current.scrollToOffset({
                offset: contentOffsetX + totalWidth,
                animated: false,
            });
        }
    };

    return (
        <FlatList
            ref={flatListRef}
            data={loopedCards}
            horizontal={true}
            
            showsHorizontalScrollIndicator={false}
            pagingEnabled={false}
            decelerationRate='fast'
            snapToInterval={cardWidth + cardMargin * 2}
            snapToAlignment='center'
            getItemLayout={getItemLayout}
            initialScrollIndex={Cards.length}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            renderItem={({ item, index }) => (
                <View style={[styles.cardContainer, { width: cardWidth }]}>
                    <SliderCard item={item} index={index} width={cardWidth} />
                </View>
            )}
            keyExtractor={(item, index) => `${item.id}-${index}`}
            contentContainerStyle={{
                paddingHorizontal: (width - cardWidth) / 2 - cardMargin,  // Center the cards
            }}
            style={styles.slider}
        />
    );
};

const styles = StyleSheet.create({
    slider: {
        padding: 16,
    },
    cardContainer: {
        marginHorizontal: cardMargin,  // Add space between cards
    },
});

export default Slider;
