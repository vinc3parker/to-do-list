import react from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

const Footer = ({ nativagation }) => {
    return (
      <View style={styles.footer}>
        <Link href="/home">
          <FontAwesome name="home" size={40} color="black" />
        </Link>
        <Link href="/calendar">
          <FontAwesome name="calendar" size={40} color="black" />
        </Link>
        <Link href="/edit">
          <FontAwesome name="edit" size={40} color="black" />
        </Link>
        <Link href="/projects">
          <FontAwesome name="folder" size={40} color="black" />
        </Link>
        <Link href="/add">
          <FontAwesome name="plus" size={40} color="black" />
        </Link>
      </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 8,
        paddingHorizontal: 40,
        height: 80,
    },
});

export default Footer;