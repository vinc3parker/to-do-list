import react, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from 'react-native-chart-kit';

const testData = {
    
    datasets: [
        {
            data: [
                0, 0, 0, 0, 0, 15, 30, 45, 60, 50, 10, 25,
                35, 60, 55, 40, 30, 20, 50, 60, 45, 30, 15, 10
            ]
        }
    ]
};

const ProductivityChart = () => {
    const [chartWidth, setChartWidth] = useState(0);

    const handleLayout = (event) => {
        const { width } = event.nativeEvent.layout;
        setChartWidth(width);
    }
    console.log(chartWidth);

    return (
        <View style={styles.container} onLayout={handleLayout}>
            <BarChart
                data={testData}
                width={chartWidth}
                height={80}
                yAxisSuffix=""
                chartConfig={{
                    backgroundGradientFrom: 'transparent',
                    backgroundGradientTo: 'transparent',
                    decimalPlaces: 0,  // No decimals for task completion
                    color: () => `rgba(34, 150, 243, 1)`,
                    labelColor: () => `transparent`,
                    barPercentage:0.3,
                    style: {
                        borderRadius: 6,
                    },
                }}
                withInnerLines={false}
                withHorizontalLabels={false}
                withVerticalLabels={false}
                fromZero={true}
                showValuesOnTopOfBars={false}
                style={{
                    marginLeft: -70 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 6,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
    },
});

export default ProductivityChart;