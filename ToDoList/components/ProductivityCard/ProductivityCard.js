import react from "react";
import { View, StyleSheet } from "react-native";

const ProductivityChart = () => {
    return (
        <View style={styles.chartContainer}>
            <View style={styles.barContainer}>
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
            </View>
            <View style={styles.barContainer}>
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
                <View style={[styles.bar, { backgroundColor: '#4CAF50', height: 10 }]} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
    },
    barContainer: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    bar: {
        width: 20,
    },
});

export default ProductivityChart;