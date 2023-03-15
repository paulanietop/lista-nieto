import { Pressable, StyleSheet, Text, View } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import {COLORS} from '../../constants/Colors';
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
          fillColor={COLORS.primary}
          unfillColor="#FFFFFF"
          text={item.name}
          fontFamily="raleway"
          innerIconStyle={{borderWidth: 2, borderColor: item.completed ? COLORS.primary : COLORS.secondary}}
          onPress={(isChecked) => setCheck(item.id, isChecked)}
        />
      </View>
      { item.completed
        ? <Text style={styles.doneText}>Done</Text>
        : <Pressable style={styles.itemButton} onPress={() => openModal(item, false)}> 
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
    borderColor: COLORS.secondary,
  },
  itemChecked: {
    borderColor: COLORS.primary,
    backgroundColor: COLORS.background,
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
    color: COLORS.danger,
    fontFamily: 'raleway',
    fontSize: 16,
  },
  doneText: {
    color: COLORS.primary,
    fontFamily: 'raleway',
    fontSize: 16,
  }
});
