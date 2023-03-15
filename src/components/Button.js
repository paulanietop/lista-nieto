import { Pressable, StyleSheet, Text } from 'react-native'

import {COLORS} from '../constants/Colors'
import React from 'react'

const Button = ({onPress, style, text}) => {
  return (
    <Pressable
      onPress={onPress} 
      style={[styles.button, style]}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'raleway-600',
    fontSize: 16,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    padding: 10,
    flex: 1
  },
})
