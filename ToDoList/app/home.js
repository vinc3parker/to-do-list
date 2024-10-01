import React, { useState } from 'react';
import { View, ScrollView, Text, TextInput, Button, StyleSheet} from 'react-native';
import Task from '../components/Task';

export default function HomeScreen() {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Buy groceries', completed: false },
        { id: 2, name: 'Complete project', completed: true },
    ]);

    const [newTaskName, setNewTaskName] = useState('');

    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    const addTask = () => {
        if (newTaskName.trim()) {
            setTasks([...tasks, { id: tasks.lenght + 1, name: newTaskname, completed: false }]);
            setNewTaskName('');
        }
    };


    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, padding: 16 }}>Tasks</Text>
          {tasks.map((task) => (
            <Task
              key={task.id}
              taskName={task.name}
              isComplete={task.completed}
              onCompleteTask={() => toggleTaskCompletion(task.id)}
            />
          ))}
        </ScrollView>
        
        <View style={StyleSheet.footer}>
            <TextInput style={StyleSheet.input} placeholder="New Task" value={newTaskName} onChangeText={setNewTaskName} />
            <Button title="Add Task" onPress={addTask} />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        marginRight: 8,
        borderRadius: 4,
    },
});