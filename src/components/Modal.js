import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

import React from 'react'

const CustomModal = ({selectedItem, onCancelModal, onDeleteModal, modalVisible}) => {
  return (
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
  )
}

export default CustomModal

const styles = StyleSheet.create({
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
})
