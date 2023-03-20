import { StyleSheet, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';
import MetricScreen from '../screens/MetricScreen';
import React from 'react'
import ToDoNavigator from './ToDoNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
      initialRouteName='Shop'
    >
      <BottomTabs.Screen
        name="ToDoNav"
        component={ToDoNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="home" size={24} color={focused ? COLORS.primary : COLORS.grey} />
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="MetricNav"
        component={MetricScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="barschart" size={26} color={focused ? COLORS.primary : COLORS.grey} />
            </View>
          )
        }}
      />
      <BottomTabs.Screen
        name="CalendarNav"
        component={MetricScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="calendar" size={22} color={focused ? COLORS.primary : COLORS.grey} />
            </View>
          )
        }}
      />
      
    </BottomTabs.Navigator>
  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: COLORS.background
  }
})