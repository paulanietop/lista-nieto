import * as SplashScreen from 'expo-splash-screen';

import { CustomModal, Divider, ItemInput, ListItem } from './src/components';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

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
  
  const [itemText, setItemText] = useState("")
  const [items, setItems] = useState([])
  const [update, setUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const onChangeText = (text) => {
    setItemText(text)
  }
  
  const addItemToList = () => {
    const newItem = [...items, {id: Date.now(), name: itemText, completed: false}]
    setItems(newItem)
    setItemText("")
  }

  const setCheck = (id, newValue) => {
    const selectedCheckBoxes = items.find((checkbox) => checkbox.id === id);
    selectedCheckBoxes.completed = newValue
    setUpdate(!update)
  }

  const openModal = (item) => {
    console.log(item)
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(false);
  };

  const onDeleteModal = (id) => {
    setModalVisible(false);
    setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    setSelectedItem(null);
  };
  
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>TO DO List</Text>
        <ItemInput 
          onChangeText={onChangeText}
          itemText={itemText}
          addItemToList={addItemToList}
        />
        <Divider/>
        <ListItem
          items={items}
          update={update}
          setCheck={setCheck}
          openModal={openModal}
        />
        <CustomModal 
          selectedItem={selectedItem}
          onCancelModal={onCancelModal}
          onDeleteModal={onDeleteModal}
          modalVisible={modalVisible}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  title: {
    fontFamily: 'raleway',
    fontSize: 20,
    textAlign: 'center',
  },
});
