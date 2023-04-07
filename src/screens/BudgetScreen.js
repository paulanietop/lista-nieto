import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import {BILLS} from '../data/bills'
import { COLORS } from '../constants/Colors'
import {FontAwesome} from '@expo/vector-icons'
import { ItemInput } from '../components'
import React from 'react'

const BudgetScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <ItemInput placeholder="Add the amount">
          <View style={styles.row}>
            <Text>Home</Text>
            <Text>Savings</Text>
            <Text>Bills</Text>
          </View>
        </ItemInput>
      </View>
      <View style={styles.listBox}>
        <FlatList
          data={BILLS}
          renderItem={bill => {
            return (
              <View style={{...styles.row}}>
                <Text style={{...styles.text, width: '20%'}}>{bill.item.type[0].toUpperCase() + bill.item.type.slice(1)}</Text>
                <Text style={styles.text}>{bill.item.expense}</Text>
                <Pressable style={styles.itemButton} onPress={() => console.log("delete bill")}> 
                  <FontAwesome name="trash" size={23} color={COLORS.danger}/>
                </Pressable>
              </View>
            )
          }}
          keyExtractor={(bill) => bill.id.toString()}
        />
      </View>
      
      
    </View>
  )
}

export default BudgetScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  inputBox: {
    flex: 1,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30
  },
  listBox: {
    flex: 3,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 20,
    padding: 20,
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    margin: 10
  },
})