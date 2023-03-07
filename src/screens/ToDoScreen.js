import { Button, Card, CustomModal, Divider, ItemInput, ListItem } from '../components/index.js';
import { StyleSheet, View } from 'react-native'

import Colors from '../constants/Colors';
import { useState } from 'react';

const ToDoScreen = ({finishToDo, projectID}) => {

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
    <View style={styles.container}>
      
      <ItemInput 
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToList={addItemToList}
      />
      <Divider/>
      <Card style={styles.card}>
        <ListItem
          items={items}
          update={update}
          setCheck={setCheck}
          openModal={openModal}
        />
        <View style={styles.buttonsContainer}>
          <Button onPress={() => setItems([])} text="Clean" style={styles.buttonClean}/>
          <Button onPress={() => finishToDo(projectID)} text="Complete" style={styles.buttonComplete}/>
        </View>
      </Card>
      <CustomModal 
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
        modalVisible={modalVisible}
      />
    </View>
  )
}

export default ToDoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  card: {
    padding: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  buttonClean: {
    marginRight: '10%',
    backgroundColor: Colors.danger,
  },
  buttonComplete: {
    marginLeft: '10%',
    backgroundColor: Colors.primary,
  },
})
