import { Button, Card, CustomModal, Divider, ItemInput, ListItem } from '../components/index.js';
import { StyleSheet, View } from 'react-native'

import {COLORS} from '../constants/Colors';
import { useState } from 'react';

const ToDoScreen = ({navigation}) => {

  const [itemText, setItemText] = useState("")
  const [items, setItems] = useState([])
  const [update, setUpdate] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteAll, setDeleteAll] = useState(false);
  
  const onChangeText = (text) => {
    setItemText(text)
  }
  
  const addItemToList = () => {
    const newItem = [...items, {id: Date.now(), name: itemText, completed: false}]
    setItems(newItem)
    setItemText("")
  }

  const setCheck = (id, newValue) => {
    setModalType('deleteOne')
    const selectedCheckBoxes = items.find((checkbox) => checkbox.id === id);
    selectedCheckBoxes.completed = newValue
    setUpdate(!update)
  }

  const openModal = (item, deleteAll) => {
    setDeleteAll(deleteAll)
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(false);
  };

  const onDeleteModal = (id, deleteAll) => {
    setModalVisible(false);
    
    if(deleteAll) {
      setItems([])
    }
    else {
      setItems((oldArray) => oldArray.filter((item) => item.id !== id));
    }
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
      {
        items.length !== 0 &&
        <Card style={styles.card}>
          <View style={styles.buttonsContainer}>
            <Button onPress={() => openModal(null, true)} text="Clean" style={styles.buttonClean}/>
            <Button onPress={() => navigation.goBack()} text="Complete" style={styles.buttonComplete}/>
          </View>
          <ListItem
            items={items}
            update={update}
            setCheck={setCheck}
            openModal={openModal}
          />
        </Card>
      }
      <CustomModal 
        selectedItem={selectedItem}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
        modalVisible={modalVisible}
        deleteAll={deleteAll}
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
    marginVertical: 20,
    width: '100%',
  },
  buttonClean: {
    marginRight: '10%',
    backgroundColor: COLORS.danger,
  },
  buttonComplete: {
    marginLeft: '10%',
    backgroundColor: COLORS.primary,
  },
})
