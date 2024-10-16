import { Dimensions, FlatList, StyleSheet, View, Animated } from 'react-native';
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

const renderItem = ({ item, index }, scrollX, totalCardWidth) => {
    // Calculate card position relative to the scrollX value
    const inputRange = [
        (index - 2) * totalCardWidth,
        index * totalCardWidth,
        (index + 2) * totalCardWidth,
    ];
    const scale = scrollX.interpolate({
        inputRange,
        outputRange: [0.8, 1, 0.8],
        extrapolate: 'clamp',
    });
    return (
        <Animated.View
            style={[
                styles.cardContainer,
                { width: cardWidth, transform: [{ scale }] },
            ]}
        >
            <SliderCard item={item} index={index} width={cardWidth} />
        </Animated.View>
    );
};

const Slider = () => {
    const flatListRef = useRef(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const totalCardWidth = cardWidth + cardMargin * 2;
    const totalWidth = totalCardWidth * Cards.length;

    const handleScroll = (event) => {
        const contentOffsetX = event.nativeEvent.contentOffset.x;

        if (contentOffsetX >= totalWidth + totalCardWidth * 2) {
            Animated.timing(scrollX, {
                toValue: contentOffsetX - totalWidth,
                duration: 300,
                useNativeDriver: true,
            }).start(() => {
                flatListRef.current.scrollToOffset({
                    offset: contentOffsetX - totalWidth,
                    animated: false,
                });
            });
        }

        if (contentOffsetX <= totalCardWidth * 2) {
            flatListRef.current.scrollToOffset({
                offset: contentOffsetX + totalWidth,
                animated: false,
            });

            Animated.timing(scrollX, {
                toValue: contentOffsetX - totalWidth,
                duration: 1000,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleScrollEnd = (event) => {
        const contentOffsetX = event.nativeEvent.conentOffset.x;        
        const closestIndex = Math.round(contentOffsetX / totalCardWidth);
        const newOffset = closestIndex * totalCardWidth;

        flatListRef.current.scrollToOffset({
            offset: newOffset,
            animated: true,
        });
    };

    return (
        <Animated.FlatList
            ref={flatListRef}
            data={loopedCards}
            horizontal={true}
            snapToAlignment={'center'}
            showsHorizontalScrollIndicator={false}
            decelerationRate='normal'
            getItemLayout={getItemLayout}
            initialScrollIndex={Cards.length}
            snapToInterval={totalCardWidth}
            onMomentumScrollEnd={handleScrollEnd}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: true, listener: handleScroll }
            )}
            scrollEventThrottle={128}
            renderItem={({ item, index }) => renderItem({ item, index }, scrollX, totalCardWidth)}
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
