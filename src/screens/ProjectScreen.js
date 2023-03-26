import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../components/index'
import {COLORS} from '../constants/Colors'
import {selectProject} from '../store/actions/project.action';

const ProjectScreen = ({navigation}) => {
  const projects = useSelector(state => state.projects.projects)
  const dispatch = useDispatch()

  const handleNavigation = (item) => {
    dispatch(selectProject(item.id))
    navigation.navigate('ToDo', { toDoName: item.title })
  }

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
              && <Button onPress={() => handleNavigation(project.item)} text="Start"/>
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
