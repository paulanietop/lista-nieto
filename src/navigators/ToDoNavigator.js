import { COLORS } from '../constants/Colors';
import ProjectScreen from '../screens/ProjectScreen';
import React from 'react'
import ToDoScreen from '../screens/ToDoScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ToDoNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Projects'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primary,
        headerBackTitleVisible: false,
      }}
    >
      
      <Stack.Screen name="Projects" component={ProjectScreen}/>
      <Stack.Screen name="ToDo" component={ToDoScreen}
        options={({route}) => ({
          title: route.params.toDoName
        })}
      />
    </Stack.Navigator>
  )
}

export default ToDoNavigator
