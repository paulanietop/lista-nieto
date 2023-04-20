import { Button, Card, CustomModal, Divider, ItemInput, ListItem } from '../components/index.js';
import { StyleSheet, View } from 'react-native'
import { createTask, filteredTask, removeAllTasks, removeTask, selectTask, updateTask } from '../store/actions/task.action.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import {COLORS} from '../constants/Colors';
import { completeProject } from '../store/actions/project.action.js';

const ToDoScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const projectTask = useSelector(state => state.tasks.filteredTask)
  const currentProject = useSelector(state => state.projects.selected)
  const currentTask = useSelector(state => state.tasks.selected)

  const [update, setUpdate] = useState(false);
  const [itemText, setItemText] = useState("")
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteAll, setDeleteAll] = useState(false);

  useEffect(() => {
    dispatch(filteredTask(currentProject.id))
  }, [])
  
  const onChangeText = (text) => {
    setItemText(text)
  }
  
  const addTaskToList = () => {
    const taskID = projectTask.length === 0 ? 1 : projectTask.slice(-1)[0].id+1
    const newTask = {
      id: taskID, 
      name: itemText, 
      projectID: currentProject.id,
      status: false
    }
    dispatch(createTask(newTask))
    setItemText("")
  }

  const completeAllTasks = () => {
    projectTask.map(task => {
      const selectedCheckBox = projectTask.find((checkbox) => checkbox.id === task.id);
      selectedCheckBox.status = true
      dispatch(updateTask(task.id, true))
    })
    dispatch(completeProject(currentProject.id))
    navigation.goBack()
  }

  const setCheck = (id, newValue) => {
    const selectedCheckBox = projectTask.find((checkbox) => checkbox.id === id);
    selectedCheckBox.status = newValue
    dispatch(updateTask(id, newValue))
    if(projectTask.filter(task => !task.status).length === 0){
      dispatch(completeProject(currentProject.id))
    }
    setUpdate(!update)
  }

  const openModal = (taskID, deleteAll) => {
    setDeleteAll(deleteAll)
    dispatch(selectTask(taskID))
    setModalVisible(true);
  };

  const onCancelModal = () => {
    setModalVisible(false);
  };

  const onDeleteModal = (deleteAll) => {
    setModalVisible(false);
    if(deleteAll) {
      projectTask.forEach(task => dispatch(removeTask(task.id)))
    }
    else {
      dispatch(removeTask(currentTask.id))
    }
  };

  return (
    <View style={styles.container}>
      
      <ItemInput 
        placeholder="Add a task"
        onChangeText={onChangeText}
        itemText={itemText}
        addItemToList={addTaskToList}
      />
      <Divider/>
      {
        projectTask.length !== 0 &&
        <Card style={styles.card}>
          <View style={styles.buttonsContainer}>
            <Button onPress={() => openModal(null, true)} text="Clean" style={styles.buttonClean}/>
            <Button onPress={completeAllTasks} text="Complete" style={styles.buttonComplete}/>
          </View>
          <ListItem
            items={projectTask}
            update={update}
            setCheck={setCheck}
            openModal={openModal}
          />
        </Card>
      }
      <CustomModal 
        selectedItem={currentTask}
        onCancelModal={onCancelModal}
        onDeleteModal={onDeleteModal}
        modalVisible={modalVisible}
        deleteAll={deleteAll}
      />
      
    </View>
  )
}

export default ToDoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  card: {
    padding: 20
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    width: '100%',
  },
  buttonClean: {
    marginRight: '10%',
    backgroundColor: COLORS.danger,
  },
  buttonComplete: {
    marginLeft: '10%',
    backgroundColor: COLORS.primary,
  },
})
