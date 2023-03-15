import { StyleSheet, Text, View } from 'react-native'

import {COLORS} from '../constants/Colors'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: COLORS.background,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
      fontFamily: 'raleway',
      fontSize: 20,
    },
})