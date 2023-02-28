import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import React from 'react'

const ItemInput = ({onChangeText, itemText, addItemToList}) => {
  return (
    <View style={styles.row}>
      <TextInput
        style={styles.input}
        placeholder='Add a task'
        onChangeText={onChangeText}
        value={itemText}
      />
      <Pressable 
        onPress={addItemToList} 
        style={styles.button}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  )
}

export default ItemInput

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10
  },
  input: {
    padding: 10,
    borderColor: '#c5ced8',
    borderWidth: 2,
    width: '70%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#6358ec',
    padding: 10,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: '600',
  }
})