import BudgetScreen from '../screens/BudgetScreen';
import { COLORS } from '../constants/Colors';
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const BudgetNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='My Budget'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primary,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen name="My Budget" component={BudgetScreen}/>
    </Stack.Navigator>
  )
}

export default BudgetNavigator
