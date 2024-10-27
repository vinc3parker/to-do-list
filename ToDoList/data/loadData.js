import { Config } from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import developmentData from './developmentData.json';

const DATA_KEY = 'taskData';

export const loadData = async () => {
    try {
        console.log("Loading data...");
        console.log("Environment:", Config.ENV);  // Add this to confirm the environment


        if ('development' === 'development') {
            console.log("Environment is development. Preparing to load development data...");

            // Wrap the AsyncStorage setItem operation in a try-catch block to catch any errors
            try {
                console.log("Setting development data into AsyncStorage...");
                await AsyncStorage.setItem(DATA_KEY, JSON.stringify(developmentData.tasks));
                console.log('Development data successfully loaded into AsyncStorage');
            } catch (setItemError) {
                console.error('Error while setting data in AsyncStorage: ', setItemError);
                return [];
            }
        }

        // Fetch data from AsyncStorage, with more detailed logging
        try {
            console.log("Fetching data from AsyncStorage...");
            const storedData = await AsyncStorage.getItem(DATA_KEY);
            if (storedData) {
                console.log('Data successfully retrieved from AsyncStorage');
                return JSON.parse(storedData);
            } else {
                console.log('No data found in AsyncStorage. Returning empty array.');
                return [];
            }
        } catch (getItemError) {
            console.error('Error while fetching data from AsyncStorage: ', getItemError);
            return [];
        }

    } catch (error) {
        console.error('Unexpected error during loadData execution: ', error);
        return [];
    }
};
