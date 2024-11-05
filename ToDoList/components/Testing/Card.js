import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome5";

import Icon from "../utils/icon";

const TestCard = ({name, icon, category}) => {
    return (
        <View style={styles.card}>
            <Icon iconName={icon} />
            <Text style={styles.name}>{name} : {icon}</Text>
            <Text style={styles.category}>Category: {category}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginBottom: 10,
        backgroundColor: "#f8f9fa",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center"
    },
    icon: {
        marginBottom: 5,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    category: {
        fontSize: 14,
        color: '#555',
    },
});

export default TestCard;