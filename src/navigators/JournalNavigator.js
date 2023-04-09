import { COLORS } from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons'
import NewPhotoScreen from '../screens/NewPhotoScreen';
import PhotoScreen from '../screens/PhotoScreen';
import React from 'react'
import { TouchableOpacity } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

const JournalNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='PhotoJournal'
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.primary,
        headerBackTitleVisible: false,
      }}
    >
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
    </Stack.Navigator>
  )
}

export default JournalNavigator
