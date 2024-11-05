import AsyncStorage from "@react-native-async-storage/async-storage";
import developmentData from "./developmentData.json";

const DATA_KEY = 'tasks';

export const initializeData = async () => {
    try {
        const existingData = await AsyncStorage.getItem(DATA_KEY);

        if (!existingData) {
            await AsyncStorage.setItem(DATA_KEY, JSON.stringify(developmentData.tasks));
            console.log('Development data loaded into AsyncStorage');
        } else {
            console.log('Deveopment data loaded into AsyncStorage');
        }
    } catch (error) {
        console.log('Error initializing data: ', error);
    }
};

export const getTasks = async () => {
    try {
        const tasks = await AsyncStorage.getItem(DATA_KEY);
        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        console.error('Error getting tasks: ', error);
        return [];
    }
}