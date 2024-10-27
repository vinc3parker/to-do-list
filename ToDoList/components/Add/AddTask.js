import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker'
import DateTimePicker from '@react-native-community/datetimepicker'

import CustomDatePicker from "../utils/dateTimePicker";

const AddTaskPage = () => {
    const [taskName, setTaskName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [dueDate, setDueDate] = useState(new Date());
    const [isRecurring, setIsRecurring] = useState(false);
    const [priority, setPriority] = useState('Low');
    const [taskLength, setTaskLength] = useState('');
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedIcon, setSelectedIcon] = useState('');

    const onDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || dueDate;
        setShowDatePicker(false);
        setDueDate(currentDate)
    };


    const handleAddTask = () => {
        console.log({
            taskName,
            selectedCategory,
            dueDate,
            isRecurring,
            priority,
            taskLength
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Task Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter task name"
                value={taskName}
                onChangeText={setTaskName}
            />

            <Text style={styles.label}>Due Date</Text>
            <CustomDatePicker />
            <Text style={styles.label}>Recurring</Text>
            <Picker
                selectedValue={isRecurring}
                onValueChange={(value) => setIsRecurring(value)}
                style={styles.input}
            >
                <Picker.Item label="No" value={false} />
                <Picker.Item label="Daily" value="daily" />
                <Picker.Item label="Weekly" value="weekly" />
                <Picker.Item label="Monthly" value="monthly" />
                <Picker.Item label="Yealry" value="yearly" />
                <Picker.Item label="Inconsistant" value="inconsistant" />
            </Picker>

            <Text>Icon</Text>
            
            <Text>Estimated Time</Text>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
    },
});

export default AddTaskPage;