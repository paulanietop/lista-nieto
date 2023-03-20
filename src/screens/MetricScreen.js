import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const MetricScreen = () => {
  return (
    <View style={styles.container}>
       <Image
          style={styles.image}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/C%C3%B4ne_orange_-_under_construction.png'}}
        />
      <Text>WIP</Text>
    </View>
  )
}

export default MetricScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '70%',
    height: 300,
  }
})