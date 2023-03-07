import { StyleSheet, TextInput, View } from 'react-native';

import Button from './Button';
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
      <Button
        style={styles.button}
        onPress={addItemToList}
        text="Add"
      />
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
    marginLeft: 20,
  },
})