import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import journals from '../store/reducers/journals.reducer';
import { useSelector } from 'react-redux'

const PhotoScreen = () => {
  const journals = useSelector(state=>state.journals.journals)
  const renderPhotoItem = (data) => (
    <View>
      <Text>{data.item.title}</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  )
    

  return (
    <FlatList
      style={styles.container}
      data={journals}
      renderItem={renderPhotoItem}
    />
  )
}

export default PhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
