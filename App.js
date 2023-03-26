import * as SplashScreen from 'expo-splash-screen';

import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import store from './src/store';
import { useFonts } from 'expo-font';

export default function App() {

  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-600': require('./assets/fonts/Raleway-SemiBold.ttf'),
  });

  useEffect(() =>{
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded])
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
