import { Redirect } from 'expo-router';
import { initializeData } from '../data/storageHelper';
import { ENV } from "../.env";

export default function Index() {
    console.log(ENV)
    return <Redirect href="/home" />;
}