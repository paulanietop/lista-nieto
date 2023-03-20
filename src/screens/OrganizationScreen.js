import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {COLORS} from '../constants/Colors'
import React from 'react'

const OrganizationScreen = ({navigation}) => {
  return (
    <View style={styles.menuContainer}>
      <View style={styles.menuRow}> 
        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuText}>My Budget</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuBox}
          onPress={() => navigation.navigate('Projects')}
        >
          <Text style={styles.menuText}>To-Do Lists</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuText}>My Notes</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuText}>My Schedule</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.menuRow}>
        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuText}>Photo Journal</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.menuBox}>
          <Text style={styles.menuText}>Anniversaries</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrganizationScreen

const styles = StyleSheet.create({
  menuContainer: {
    flex: 1,
    margin: 20,
  },
  menuRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  menuBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 20,
    padding: 20,
  },
  menuText: {
    textAlign: 'center'
  }
})
