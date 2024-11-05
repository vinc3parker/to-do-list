import { Dimensions, FlatList, StyleSheet, View, Animated } from 'react-native';
import React, { useRef } from 'react';
import SliderCard from './SliderCard';

const { width } = Dimensions.get('window');
const cardWidth = width * 0.8;
const cardMargin = 5;
const totalCardWidth = cardWidth + cardMargin * 2;

const Cards = [
    { id: 1, title: 'Routine', color: 'blue' },
    { id: 2, title: 'Productivity', color: 'green' },
    { id: 3, title: 'All Tasks', color: 'yellow' },
];

const Slider = () => {
    const flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;

    // Center the first card
    const initialScrollIndex = Math.floor(Cards.length / 2);

    // Scale animation for each card based on its distance from the center
    const renderItem = ({ item, index }) => {
        const inputRange = [
            (index - 1) * totalCardWidth,
            index * totalCardWidth,
            (index + 1) * totalCardWidth,
        ];
        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View style={[styles.cardContainer, { transform: [{ scale }] }]}>
                <SliderCard item={item} width={cardWidth} />
            </Animated.View>
        );
    };

    // Center snap function to smoothly align cards
    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(contentOffsetX / totalCardWidth);
        flatListRef.current.scrollToOffset({
            offset: (index * totalCardWidth) + 0.075 * totalCardWidth,
            animated: true,
        });
    };

    return (
      <Animated.FlatList
        ref={flatListRef}
        data={Cards}
        horizontal
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        decelerationRate="0.05"
        snapToInterval={totalCardWidth}
        onMomentumScrollEnd={handleScrollEnd}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={8}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          paddingHorizontal: (width - cardWidth) / 2 - cardMargin,
        }}
        style={styles.slider}
        initialScrollIndex={initialScrollIndex}
        getItemLayout={(data, index) => ({
          length: totalCardWidth,
          offset: totalCardWidth * index,
          index,
        })}
      />
    );
};

const styles = StyleSheet.create({
    slider: {
        padding: 16,
    },
    cardContainer: {
        width: cardWidth,
        marginHorizontal: cardMargin,
    },
});

export default Slider;
