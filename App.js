import * as SplashScreen from 'expo-splash-screen';

import { StyleSheet, View } from 'react-native';
import { useEffect, useState } from 'react';

import { Header } from './src/components';
import ProjectScreen from './src/screens/ProjectScreen';
import ToDoScreen from './src/screens/ToDoScreen';
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
  
  const projects = [{id: 1, title: 'Work', status: false}, {id: 2, title: 'Personal', status: false}]
  const [switchScreen, setSwitchScreen] = useState(false)
  const [project, setProyect] = useState({})

  const startToDo = (currentProject) => {
    setProyect(currentProject)
    setSwitchScreen(true)
  }

  const finishToDo = (id) => {
    console.log(id)
    const currentProject = projects.find((item) => item.id === id);
    currentProject.status = true;
    setProyect({});
    setSwitchScreen(false)
  }

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Header title={!switchScreen ? "Projects" : project.title}/>
      { 
        !switchScreen
        ? <ProjectScreen startToDo={startToDo} projects={projects} switchScreen={switchScreen}/>
        : <ToDoScreen finishToDo={finishToDo} projectID={project.id}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
