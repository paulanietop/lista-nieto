import { StyleSheet, View } from 'react-native'

import {COLORS} from '../constants/Colors'
import React from 'react'

const Divider = () => {
  return (
    <View style={styles.divider}/>
  )
}

export default Divider

const styles = StyleSheet.create({
  divider: {
    alignSelf: 'center',
    borderBottomColor: COLORS.lightGrey,
    borderBottomWidth: 1.5,
    marginVertical: 20,
    width: '80%',    
  },
})