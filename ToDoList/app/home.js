import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, ScrollView, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Task from '../components/TaskCard/Task';
import ProductivityChart from '../components/ProductivitySection/ProductivityChart';
import TaskCounter from '../components/ProductivitySection/TaskCounter';
import Slider from '../components/OverviewSection/Slider'
import { Stack, useRouter } from "expo-router";
import { loadData } from '../data/loadData';

const Home = () => {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    console.log("Collecting data")
    const fetchTasks = async () => {
      const data = await loadData();
      console.log("Collected data")
      setTasks(data);
    };

    fetchTasks();
  }, []);

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
      <View style={styles.overviewSection}>
        <Slider />
      </View>
      <View style={styles.productivitySection}>
        <ProductivityChart />
        <TaskCounter tasksLeft={5}/>
      </View>
      <ScrollView
        style={styles.taskSection}
        showsVerticalScrollIndicator={false}
      >
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

const styles = StyleSheet.create({
  productivitySection: {
    flexDirection: 'row',
    margin: 20,
  },
  overviewSection: {
    height: 300,
    backgroundColor: '#fff',
  },
  taskSection: {
    flex: 1,
  }
})

export default Home;