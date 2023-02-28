import { Pressable, StyleSheet, Text, View } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import React from 'react'

const Item = ({item, setCheck, openModal}) => {
  const dynamicStyle = item.completed ? styles.itemChecked : styles.itemUnchecked
  
  return (
    <View 
      style={[
        styles.row,
        styles.item,
        dynamicStyle
      ]}
    >
      <View style={styles.row}>
        <BouncyCheckbox
          isChecked={item.completed}
          size={20}
          fillColor="#6358ec"
          unfillColor="#FFFFFF"
          text={item.name}
          innerIconStyle={{borderWidth: 2, borderColor: item.completed ? "#6358ec" : '#c5ced8'}}
          onPress={(isChecked) => setCheck(item.id, isChecked)}
        />
      </View>
      { item.completed
        ? <Text style={styles.doneText}>Done</Text>
        : <Pressable style={styles.itemButton} onPress={() => openModal(item)}> 
            <Text style={styles.deleteText} >Delete</Text>
          </Pressable>
      }
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    padding: 20,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2
  },
  itemUnchecked: {
    borderColor: '#c5ced8',
  },
  itemChecked: {
    borderColor: "#6358ec",
    backgroundColor: "#dee0fa",
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  itemButton: {
    alignItems: 'flex-end',
    backgroundColor: 'transparent',
  },
  deleteText: {
    color: 'red',
    fontSize: 16
  },
  doneText: {
    color: '#6358ec',
    fontSize: 16
  }
});
