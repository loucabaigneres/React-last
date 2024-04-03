import React, { useState, useEffect } from "react";
import {
    View,
    StyleSheet,
    Text,
    ScrollView,
    TouchableOpacity,
    Button,
    Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Calendar } from "react-native-calendars";

import { Header } from "../components/Header";

import useTheme from "../theme/useTheme";
import layoutStyles from "../styles/layoutStyles";

const colors = {
    primary: "#0000FF", // Bleu pour les événements
    secondary: "#FF0000", // Rouge pour les jours fériés
    background: "#FFF",
    grayText: "#2d4150",
};

const CalendarScreen = ({ navigation }) => {
    const colours = useTheme();
    const layoutScreenStyles = layoutStyles(colours);

    const [events, setEvents] = useState([
        {
            date: "2024-03-06",
            description: "PSG a joué son 8eme de final de LDC",
            pinned: false,
            notificationEnabled: false,
            isHoliday: false,
        },
        {
            date: "2024-01-01",
            description: "Jour de l'an",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-04-01",
            description: "Lundi de Pâques",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-05-01",
            description: "Fête du travail",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-05-08",
            description: "Victoire 1945",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-05-30",
            description: "Ascension",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-06-10",
            description: "Pentecôte",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-07-14",
            description: "Fête nationale",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-08-15",
            description: "Assomption",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-11-01",
            description: "Toussaint",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-11-11",
            description: "Armistice",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
        {
            date: "2024-12-25",
            description: "Noël",
            pinned: false,
            notificationEnabled: false,
            isHoliday: true,
        },
    ]);
    const [selectedDate, setSelectedDate] = useState("");

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    const togglePin = async (date) => {
        const updatedEvents = events.map((event) =>
            event.date === date
                ? {
                      ...event,
                      pinned: !event.pinned,
                      notificationEnabled: !event.notificationEnabled,
                  }
                : event
        );
        setEvents(updatedEvents);

        try {
            await AsyncStorage.setItem("events", JSON.stringify(updatedEvents));
        } catch (error) {
            console.error("Error storing events:", error);
        }
    };

    const renderEventsWithNotifications = () => {
        const selectedEvent = events.find(
            (event) => event.date === selectedDate
        );
        if (!selectedEvent) return null;

        return (
            <View style={styles.eventContainer}>
                <Text style={styles.eventText}>
                    {selectedEvent.description}
                </Text>
                <TouchableOpacity
                    onPress={() => togglePin(selectedDate)}
                    style={styles.pinButton}
                >
                    <AntDesign
                        name={selectedEvent.pinned ? "pushpin" : "pushpino"}
                        size={24}
                        color={selectedEvent.pinned ? "#FF0000" : "#000000"}
                    />
                </TouchableOpacity>
            </View>
        );
    };

    const markedDates = {};
    events.forEach((event) => {
        markedDates[event.date] = {
            marked: true,
            dotColor: event.isHoliday ? colors.secondary : colors.primary, // Utilisation de la couleur rouge pour les jours fériés et bleue pour les autres événements
        };
    });

    return (
        <View style={layoutScreenStyles.page}>
            <Header title="Calendrier" navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.calendarContainer}>
                    <Calendar
                        style={styles.calendar}
                        theme={{}}
                        onDayPress={handleDayPress}
                        markedDates={markedDates}
                    />
                </View>
                <ScrollView contentContainerStyle={styles.upcomingEvents}>
                    <Text style={styles.upcomingEventsText}>
                        {selectedDate
                            ? "Événement sélectionné :"
                            : "Aucun événement sélectionné"}
                    </Text>
                    {renderEventsWithNotifications()}
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    calendarContainer: {
        marginBottom: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    calendar: {
        borderRadius: 8,
    },
    upcomingEvents: {
        marginTop: 20,
        padding: 20,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    upcomingEventsText: {
        color: colors.primary,
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 20,
    },
    eventContainer: {
        marginBottom: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    eventText: {
        flex: 1,
        fontSize: 16,
        color: colors.primary,
    },
    pinButton: {
        marginLeft: 10,
    },
});

export default CalendarScreen;
