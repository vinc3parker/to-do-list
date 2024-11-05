import react from "react";
import { View, Text, StyleSheet } from "react-native";

import developmentData from '../../data/developmentData.json'

const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const taskCounter = () => {
  const todayDate = getTodayDate();

  // Filter tasks that are due today and have a status of "current"
  const tasksDueToday = developmentData.tasks.filter(
    (task) => task.dueDate === todayDate && task.status === "current"
  );

  return tasksDueToday.length; // Return the count of tasks left
};

const TaskCounter = () => {
    const tasksLeft = taskCounter();
    
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