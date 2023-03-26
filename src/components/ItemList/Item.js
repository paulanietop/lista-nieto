import { Pressable, StyleSheet, Text, View } from 'react-native';

import BouncyCheckbox from "react-native-bouncy-checkbox";
import {COLORS} from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

const Item = ({item, setCheck, openModal}) => {
  const dynamicStyle = item.status ? styles.itemChecked : styles.itemUnchecked
  
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
          isChecked={item.status}
          size={20}
          fillColor={COLORS.primary}
          unfillColor="#FFFFFF"
          text={item.name}
          fontFamily="raleway"
          innerIconStyle={{borderWidth: 2, borderColor: item.status ? COLORS.primary : COLORS.secondary}}
          onPress={(isChecked) => setCheck(item.id, isChecked)}
        />
      </View>
      { item.status
        ? <FontAwesome name="calendar-check-o" size={24} color={COLORS.primary} />
        : <Pressable style={styles.itemButton} onPress={() => openModal(item.id, false)}> 
            <FontAwesome name="trash" size={23} color={COLORS.danger}/>
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
});
