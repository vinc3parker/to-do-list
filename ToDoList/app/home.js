import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet} from 'react-native';
import Task from '../components/TaskCard/Task';
import Footer from '../components/FooterMenu/Footer';
import { Stack, useRouter } from "expo-router";

const Home = () => {
    const [tasks, setTasks] = useState([
      {
        id: 1,
        name: "Clean Room",
        status: "current",
        category: "Daily",
        time: 20,
        icon: "calendar",
        iconColor: "#FFC107",
      },
      {
        id: 2,
        name: "Write Project Report",
        status: "current",
        category: "Projects",
        time: 45,
        icon: "group",
        iconColor: "#3949AB",
      },
      {
        id: 3,
        name: "Do Washing",
        status: "current",
        category: "Daily",
        time: 10,
        icon: "calendar",
        iconColor: "#FFC107",
      },
      {
        id: 4,
        name: "Buy Bananas",
        status: "current",
        category: "Daily",
        time: 15,
        icon: "shopping-cart",
        iconColor: "#4CAF50",
      },
    ]);

  const currentTasks = tasks.filter(task => task.status === 'current');
  
  const onCompleteTask = (taskToComplete) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToComplete.id ? { ...task, status: "complete" } : task
      )
    );
  };

  const onRemoveTask = (taskToRemove) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskToRemove.id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <Text>Info Cards</Text>
      </View>
      <View>
        <Text>Progress Bar</Text>
      </View>
      <View>
        <Text>Current Tasks</Text>
      </View>
      <ScrollView style={{ flex: 1 }}>
        {currentTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCompleteTask={onCompleteTask}
            onRemoveTask={onRemoveTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;