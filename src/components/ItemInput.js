import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import Colors from '../constants/Colors';
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
    borderColor: Colors.secondary,
    borderRadius: 5,
    borderWidth: 2,
    fontFamily: 'raleway',
    padding: 10,
    width: '70%',
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontFamily: 'raleway-600',
    fontSize: 16,
  },
})