import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { format } from "date-fns";
import { useColors } from "@/hooks/useColors";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "../Themed";

const DatePicker = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const disableBackArrow = selectedDate <= new Date();
    const { tint, text } = useColors();

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
                <TouchableOpacity onPress={() => changeDate(-1)} disabled={disableBackArrow}>
                    <Ionicons name="chevron-back" size={24} color={disableBackArrow ? "lightgrey" : "black"} />
                </TouchableOpacity>
                <Text style={styles.dateText}>
                    {format(selectedDate, "dd.MM.yyyy")}
                </Text>
                <TouchableOpacity onPress={() => changeDate(1)} >
                    <Ionicons name="chevron-forward" size={24} color={text} />
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={showDatePicker} style={styles.calendarIconContainer}>
                <Ionicons style={styles.calendarIcon} name="calendar" size={24} color={tint} />
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
