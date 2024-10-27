import react from "react";
import { View, Text, StyleSheet } from "react-native";

const TaskCounter = ({ tasksLeft }) => {
    return (
        <View style={styles.counterContainer}>
            <Text style={styles.counterText}>{tasksLeft}</Text>
            <Text>Tasks Left</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        marginLeft: 20,
        padding: 20,
        alignItems: 'center',
        backgroundColor: '#E0E0E0',
        borderRadius: 10,
    },
    counterText: {
        fontSize: 32,
        fontWeight: 'bold',
    },
});

export default TaskCounter;