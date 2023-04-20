import * as journalAction from '../store/actions/journals.action'

import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Card } from '../components';

const PhotoScreen = () => {
  const dispatch = useDispatch()
  const journals = useSelector(state=>state.journals.journals)

  const renderPhotoItem = (data) => (
    <Card style={styles.card}>
      <Image style={styles.image} source={{uri: data.item.image}} />
      <View style={styles.info}>
        <Text style={styles.title}>{data.item.title}</Text>
        <Text style={styles.description}>{data.item.description}</Text>
      </View>
    </Card>
  )
    
  useEffect(() => {
    dispatch(journalAction.loadJournal())
  }, [])

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
