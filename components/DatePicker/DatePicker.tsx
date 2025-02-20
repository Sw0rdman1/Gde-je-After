import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { AntDesign } from "@expo/vector-icons";
import { useColors } from "@/hooks/useColors";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const { tint } = useColors();

    const changeDate = (days: number) => {
        setSelectedDate((prevDate) => new Date(prevDate.setDate(prevDate.getDate() + days)));
    };

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        setSelectedDate(date);
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <TouchableOpacity onPress={() => changeDate(-1)} >
                    <AntDesign name="left" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.dateText}>
                    {format(selectedDate, "dd.MM.yyyy")}
                </Text>
                <TouchableOpacity onPress={() => changeDate(1)} >
                    <AntDesign name="right" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={showDatePicker} style={styles.calendarIconContainer}>
                <AntDesign style={styles.calendarIcon} name="calendar" size={24} color={tint} />
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePicker;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        marginTop: 24,
        marginHorizontal: 12,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        alignSelf: "center",
    },
    sliderContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
        padding: 12,

    },
    dateText: {
        width: 120,
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
    },
    calendarIconContainer: {

    },
    calendarIcon: {
        padding: 12,
    },
});
