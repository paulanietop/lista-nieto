import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Button } from '../components/index'
import {COLORS} from '../constants/Colors'
import { getTasks } from '../store/actions/task.action'
import {selectProject} from '../store/actions/project.action';

const ProjectScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const projects = useSelector(state => state.projects.projects)
  const currentProject = useSelector(state => state.projects.selected)

  const handleNavigation = (item) => {
    dispatch(selectProject(item.id))
    navigation.navigate('ToDo', { toDoName: item.title })
  }

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <View style={styles.container}>
    <FlatList
      data={projects}
      renderItem={project => {
        return (
          <TouchableOpacity onPress={() => handleNavigation(project.item)}>
            <View style={styles.item}>
            <Text style={styles.itemText}>{project.item.title}</Text>
            {
              !project.item.status
              ? <Text style={styles.inProgressTag}>In progress</Text>
              : <Text style={styles.completeTag}>Completed</Text>
            }  
          </View>
          </TouchableOpacity>
          
        )
      }}
      keyExtractor={(project) => project.id}
      extraData={currentProject?.status}
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
  inProgressTag: {
    color: COLORS.grey,
    fontFamily: 'raleway',
  },
  completeTag: {
    color: COLORS.primary,
    fontFamily: 'raleway',
  }
})
