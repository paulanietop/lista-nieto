import * as SplashScreen from 'expo-splash-screen';

import MainNavigator from './src/navigators/MainNavigator';
import { Provider } from 'react-redux';
import { init } from './db'
import store from './src/store';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('initialized'))
  .catch((error) => {
    console.log('Conection to database failed')
    console.log(error.message)
  })

export default function App() {

  const [fontsLoaded] = useFonts({
    'raleway': require('./assets/fonts/Raleway-Regular.ttf'),
    'raleway-bold': require('./assets/fonts/Raleway-Bold.ttf'),
    'raleway-600': require('./assets/fonts/Raleway-SemiBold.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }

  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}