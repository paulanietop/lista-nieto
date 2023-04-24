import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { COLORS } from '../constants/Colors'
import React from 'react'

const Radio = ({onPress, selected, children}) => {
  return (
    <View style={styles.radioButtonContainer}>
      <TouchableOpacity onPress={onPress} style={styles.radioButton}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.radioButtonText}>{children}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Radio

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between'
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: COLORS.primary
  },
  radioButtonText: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: 'raleway',
  }
})