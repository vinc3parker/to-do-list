import React , { useState } from "react";
import { Platform, Text, StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";

const CustomDatePicker = (props) => {
    const [dateString, setDateString] = useState(moment(new Date()).format('YYY-MM-DD'));
    const [date, setDate] = useState(props.date || new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        if (selectedDate) {
            setDateString(moment(selectedDate).format('YYYY-MM-DD'));
            setDate(selectedDate);
        }
        setShow(false);
    };

    const showOverlay = () => {
        setShow(true);
        console.log("Showing Overlay")
    }

    const hideOverlay = () => setShow(false);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={showOverlay} style={styles.inputContainer}>
                {dateString ? (
                    <Text style={styles.text}>{dateString}</Text>
                ) : (
                    <Text style={styles.placeholder}>{props.placeholder}</Text>
                )}
            </TouchableOpacity>

            {Platform.OS === 'ios' && show && (
                <View style={styles.overlay}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={hideOverlay}>
                            <Text style={{ paddingHorizontal: 15 }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={hideOverlay}>
                            <Text style={{ paddingHorizontal: 15, color: 'green' }}>Done</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePicker
                        value={date}
                        mode={'date'}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        style={{ backgroundColor: 'white' }}
                    />
                </View>
            )}

            {Platform.OS === 'android' && show && (
                <DateTimePicker
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}
            <DateTimePicker
                value={date}
                mode={'date'}
                is24Hour={true}
                display="default"
                onChange={onChange}
                style={{ backgroundColor: 'white' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    borderRadius: 100,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        marginBottom: 15,
        borderRadius: 8,
        fontSize: 16,
    },
    placeholder: {
        fontSize: 16,
        color: '#999',
    },
    text: {
        fontSize: 16,
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
});

export default CustomDatePicker;