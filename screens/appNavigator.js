import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginForm from "../components/LoginForm";
import { StyleSheet } from 'react-native';
import { MainPage } from "../components/MainPage";
import { MsgRoom } from "../components/MsgRoom";

const { Navigator, Screen } = createStackNavigator();



const AppNavigator = () => (
    <NavigationContainer >
        <Navigator screenOptions={{
            headerShown: false
        }} initialRouteName="LoginForm">
            <Screen name="LoginForm" component={LoginForm} />
            <Screen name="MainPage" component={MainPage} />
            <Screen name="MsgRoom" component={MsgRoom} />
        </Navigator>
    </NavigationContainer>
)



export default AppNavigator;