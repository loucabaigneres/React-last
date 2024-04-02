import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import SurveysScreen from "../screens/SurveysScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import ProjetsScreen from "../screens/ProjectsScreen";
import ContactScreen from "../screens/ContactScreen";
import ArticleScreen from "../screens/ArticleScreen";
import LoginScreen from "../screens/LoginScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import FranceConnectScreen from "../screens/FranceConnectScreen";

import colors from "../styles/variables";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SondagesStack = createStackNavigator();
const AgendaStack = createStackNavigator();
const ProjetsStack = createStackNavigator();

const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="dsds"
                component={HomeScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Projects"
                component={ProjectsScreen}
                options={{ headerShown: false }}
            ></HomeStack.Screen>
            <HomeStack.Screen
                name="Contact"
                component={ContactScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Articles"
                component={ArticleScreen}
                options={{ headerShown: false }}
            />
            <HomeStack.Screen
                name="Parametres"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </HomeStack.Navigator>
    );
};

const AgendaStackScreen = () => {
    return (
        <AgendaStack.Navigator>
            <AgendaStack.Screen
                name="Agendas"
                component={CalendarScreen}
                options={{ headerShown: false }}
            />
            <AgendaStack.Screen
                name="Parametres"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </AgendaStack.Navigator>
    );
};

const ProfileStackScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="FranceConnect"
                component={FranceConnectScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Profilsq"
                component={ProfileScreen}
                options={{ headerShown: false }}
            />
            <ProfileStack.Screen
                name="Parametres"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </ProfileStack.Navigator>
    );
};

const SondagesStackScreen = () => {
    return (
        <SondagesStack.Navigator>
            <SondagesStack.Screen
                name="Sondage"
                component={SurveysScreen}
                options={{ headerShown: false }}
            />
            <SondagesStack.Screen
                name="Parametres"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </SondagesStack.Navigator>
    );
};

const ProjetsStackScreen = () => {
    return (
        <ProjetsStack.Navigator>
            <ProjetsStack.Screen
                name="Projet"
                component={ProjetsScreen}
                options={{ headerShown: false }}
            />
            <ProjetsStack.Screen
                name="Parametres"
                component={SettingsScreen}
                options={{ headerShown: false }}
            />
        </ProjetsStack.Navigator>
    );
};

const Nav = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) => {
                        let iconName;

                        if (route.name == "Accueil") {
                            iconName = focused ? "home" : "home-outline";
                        } else if (route.name == "Sondages") {
                            iconName = focused
                                ? "bar-chart"
                                : "bar-chart-outline";
                        } else if (route.name == "Agenda") {
                            iconName = focused
                                ? "calendar"
                                : "calendar-outline";
                        } else if (route.name == "Profil") {
                            iconName = focused ? "person" : "person-outline";
                        } else if (route.name == "Projets") {
                            iconName = focused ? "search" : "search-outline";
                        }

                        return (
                            <Ionicons name={iconName} size={25} color={color} />
                        );
                    },
                    tabBarHideOnKeyboard: true,
                    tabBarStyle: {
                        backgroundColor: colors.primary,
                        height: 90,
                    },
                    tabBarLabelStyle: {
                        fontSize: 14,
                    },
                    tabBarActiveTintColor: colors.primary,
                    tabBarInactiveTintColor: colors.background,
                    tabBarActiveBackgroundColor: colors.background,
                    tabBarShowLabel: false,
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Accueil" component={HomeStackScreen} />
                <Tab.Screen name="Projets" component={ProjetsStackScreen} />
                <Tab.Screen name="Agenda" component={AgendaStackScreen} />
                <Tab.Screen name="Sondages" component={SondagesStackScreen} />
                <Tab.Screen name="Profil" component={ProfileStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Nav;
