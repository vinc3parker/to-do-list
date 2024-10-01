import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const Task = ({ taskName, isCompleted, onCompleteTask }) => {
    return (
        <View style={StyleSheet.taskContainer}>
            <Text style={[styles.taskText, isCompleted && styles.completedTaskText]}>
                {taskName}
            </Text>
            <TouchableOpacity onPress={onCompleteTask} style={styles.completeButton}>
                <Text style={styles.buttonText}>
                    {isCompleted ? "Undo" : "Complete"}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    taskText: {
        fontSize: 16,
    },
    completedTaskText: {
        textDecorationLine: 'line-through',
        colour: '#bbb',
    },
    completeButton: {
        backgroundColor: '#4CAF50',
        padding: 8,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Task;