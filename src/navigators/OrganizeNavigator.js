import { COLORS } from '../constants/Colors';
import {NavigationContainer} from '@react-navigation/native'
import OrganizationScreen from '../screens/OrganizationScreen';
import ProjectScreen from '../screens/ProjectScreen';
import React from 'react'
import ToDoScreen from '../screens/ToDoScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const OrganizeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Organization'
        screenOptions={{
          headerStyle: {
            backgroundColor: COLORS.background,
          },
          headerTintColor: COLORS.primary,
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Organization" component={OrganizationScreen}/>
        <Stack.Screen name="Projects" component={ProjectScreen}/>
        <Stack.Screen name="ToDo" component={ToDoScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default OrganizeNavigator
