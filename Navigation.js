import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Calculadora from "./calculadora"
import StackScreen from "./screens/StackScreen";


import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const HomeStackNavigator = createNativeStackNavigator(); 


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarActiveTintColor: "Red",
            }}
        >
            <Tab.Screen
                name="Home"
                component={Calculadora}
                options={{
                    tabBarLabel: "Feed",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            size={30}
                            color={color}
                        />
                    ),
                    tabBarBadge: 69,
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "settins",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="brightness-5"
                            size={30}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}