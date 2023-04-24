import { Divider, ItemInput } from '../components'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { createBill, removeBill } from '../store/actions/budget.action'
import { useDispatch, useSelector } from 'react-redux'

import { COLORS } from '../constants/Colors'
import {FontAwesome} from '@expo/vector-icons'
import Radio from '../components/Radio'
import React from 'react'
import { useState } from 'react'

const BudgetScreen = () => {
  const dispatch = useDispatch()
  const bills = useSelector(state => state.bills.bills)
  const moneySpent = useSelector(state => state.bills.sum)

  const [categories, setCategories] = useState([
    { id: 1, name: "Home", type: 'home', selected: true, color: COLORS.danger },
    { id: 2, name: "Savings", type: 'savings', selected: false, color: COLORS.green },
    { id: 3, name: "Bills", type: 'bills', selected: false, color: COLORS.danger },
  ])
  const [itemText, setItemText] = useState("")

  const handleSelectRadio = (item) => {
    const updatedState = categories.map((category) => 
      category.id === item.id
      ? {...category, selected: true}
      : {...category, selected: false}
    )
    setCategories(updatedState)
  }

  const addBillToList = () => {
    const billID = bills.length === 0 ? 1 : bills.slice(-1)[0].id+1
    const currentCategory = categories.filter(category => category.selected)[0]
    const newBill = {
      id: billID, 
      expense: itemText,
      type: currentCategory.type,
      color: currentCategory.color
     }
     dispatch(createBill(newBill))
     setItemText("")
  }

  const deleteBill = (bill) => {
    dispatch(removeBill(bill))
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <ItemInput 
          placeholder="Add the amount" 
          onChangeText={(text) => setItemText(text)}
          itemText={itemText}
          addItemToList={addBillToList}
        />
        <View style={styles.row}>
          {categories.map((item) => (
            <Radio
              onPress={() => handleSelectRadio(item)}
              selected={item.selected}
              key={item.id}
            >
              {item.name}
            </Radio>
          ))}
        </View>
      </View>
      <View style={styles.listBox}>
        <View style={styles.row}>
          <Text style={{...styles.text, fontSize: 16}}>Money spent</Text>
          <Text style={styles.textHighlight}>$ {moneySpent}</Text>
        </View>
        <Divider/>
        <FlatList
          data={bills}
          renderItem={bill => {
            return (
              <View style={styles.row}>
                <Text style={{...styles.text, width: '20%'}}>{bill.item.type[0].toUpperCase() + bill.item.type.slice(1)}</Text>
                <Text style={{...styles.text, color: bill.item.color}}>$ {bill.item.expense}</Text>
                <Pressable style={styles.itemButton} onPress={() => deleteBill(bill.item)}> 
                  <FontAwesome name="trash" size={23} color={COLORS.lightGrey}/>
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
  text: {
    fontFamily: 'raleway-600',
    fontSize: 14
  },
  textHighlight: {
    color: COLORS.primary,
    fontFamily: 'raleway-bold',
    fontSize: 18
  }
})