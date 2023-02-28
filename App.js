import { FlatList, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Item from './src/components/Item';
import { useState } from 'react';

export default function App() {

  const [update, setUpdate] = useState(false);
  const [items, setItems] = useState([{id: 1, name: 'Hola', completed: true}, {id: 2, name: 'Revisar correos', completed: false}])
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const setCheck = (id, newValue) => {
    const selectedCheckBoxes = items.find((cb) => cb.id === id);
    selectedCheckBoxes.completed = newValue
    setUpdate(!update)
  }

  const openModal = (item) => {
    console.log(item)
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(!modalVisible);
  };

  const onDeleteModal = (id) => {
    setModalVisible(!modalVisible);
    setItems((oldArry) => oldArry.filter((item) => item.id !== id));
    setSelectedItem(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>TO DO List</Text>
        <View
          style={styles.divider}
        />
        <FlatList
          data={items}
          renderItem={item => {
            return (
              <View>
                <Item item={item.item} setCheck={setCheck} openModal={openModal}/>
              </View>
            )
          }}
          keyExtractor={(item) => item.id}
          extraData={update}
        />
        <Modal animationType='slide' transparent={true} visible={modalVisible}>
          <View style={styles.modalMainView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Are you sure you want to delete the task "
                <Text style={styles.modalBoldText}>{selectedItem?.name}</Text>"?
              </Text>
              <View style={styles.modalActions}>
                <Pressable
                  style={[styles.button, styles.buttonCancel]}
                  onPress={onCancelModal}
                >
                  <Text style={{...styles.modalBoldText, color: '#6358ec'}}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonDelete]}
                  onPress={() => {
                    onDeleteModal(selectedItem.id);
                  }}
                >
                  <Text style={{...styles.modalBoldText, color: 'white'}}>Delete</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
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
  modalMainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  modalView: {
    margin: 50,
    width: '60%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    marginBottom: 20,
    fontSize: 15,
    textAlign: 'center',
  },
  modalBoldText: {
    fontWeight: 'bold',
  },
  modalActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 10,
  },
  buttonCancel: {
    borderColor: '#6358ec',
    borderWidth: 1,
    color: '#6358ec',
  },
  buttonDelete: {
    backgroundColor: '#f44336',
  },
  textStyle: {

  }
});
