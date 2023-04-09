import { FlatList, Image, StyleSheet, Text, View } from 'react-native'

import { Card } from '../components';
import React from 'react'
import { useSelector } from 'react-redux'

const PhotoScreen = () => {
  const journals = useSelector(state=>state.journals.journals)

  const renderPhotoItem = (data) => (
    <Card style={styles.card}>
      <Image style={styles.image} source={{uri: data.item.image}} />
      <View style={styles.info}>
        <Text style={styles.title}>{data.item.title} {console.log(JSON.stringify(data,null, 2))}</Text>
        <Text style={styles.description}>{data.item.description}</Text>
      </View>
    </Card>
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
    flex: 1,
    padding: 20,
  },
  image:{
    width: '100%',
    height: 168,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  info: {
    padding: 15
  },
  title: {
    fontFamily: 'raleway-bold',
    fontSize: 16,
    marginBottom: 10
  },
  description: {
    fontFamily: 'raleway',
    fontSize: 14
  }
})
