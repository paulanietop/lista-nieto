import BudgetScreen from '../screens/BudgetScreen';
import { COLORS } from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import NewPhotoScreen from '../screens/NewPhotoScreen';
import OrganizationScreen from '../screens/OrganizationScreen';
import PhotoScreen from '../screens/PhotoScreen';
import ProjectScreen from '../screens/ProjectScreen';
import React from 'react'
import ToDoScreen from '../screens/ToDoScreen';
import { TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const ToDoNavigator = () => {
  return (
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
      <Stack.Screen name="My Budget" component={BudgetScreen}/>
      <Stack.Screen 
        name="PhotoJournal" 
        component={PhotoScreen}
        options={({navigation}) => ({
          title: 'Photo Journal',
          headerRight: () => (
            <TouchableOpacity onPress={() => {navigation.navigate('PhotoForm')}}>
              <Ionicons
                name='md-add'
                color={COLORS.primary}
                size={23}
              />
            </TouchableOpacity>
          )
        })}
      />
      <Stack.Screen 
        name="PhotoForm" 
        component={NewPhotoScreen}
        options={() => ({title:'New Photo Journal'})}
      />
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
