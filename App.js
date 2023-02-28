import { CustomModal, ItemInput, ListItem } from './src/components';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>TO DO List</Text>
        <ItemInput 
          onChangeText={onChangeText}
          itemText={itemText}
          addItemToList={addItemToList}
        />
        <View
          style={styles.divider}
        />
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
  divider: {
    borderBottomColor: '#a1acb9',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
    borderBottomWidth: 1.5,
  },
  title: {
    fontSize: 20,
    textAlign: 'center'
  },
});
