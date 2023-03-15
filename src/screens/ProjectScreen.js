import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

import { Button } from '../components/index'
import {COLORS} from '../constants/Colors'
import React from 'react'

const ProjectScreen = ({navigation}) => {
  const projects = [
    {id: 1, title: 'Work', status: false}, 
    {id: 2, title: 'Personal', status: false},
    {id: 3, title: '2023 Goals', status: false}
  ]

  return (
    <View style={styles.container}>
    <FlatList
      data={projects}
      renderItem={project => {
        return (
          <View style={styles.item}>
            <Text style={styles.itemText}>{project.item.title}</Text>
            {
              !project.item.status
              && <Button onPress={() => navigation.navigate('ToDo')} text="Start"/>
            }  
          </View>
        )
      }}
      keyExtractor={(project) => project.id}
    />
    </View>
  )
}

export default ProjectScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  itemText: {
    alignSelf: 'center',
    fontFamily: 'raleway-600',
    fontSize: 16,
    flex: 3
  },
  item: {
    marginVertical: 10,
    padding: 20,
    width: '100%',
    borderRadius: 10,
    borderWidth: 2,
    flex: 1,
    flexDirection: 'row',
    borderColor: COLORS.secondary,
  },
})
