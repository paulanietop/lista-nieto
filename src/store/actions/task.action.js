import { URL_API } from "../../constants/Database"

export const GET_TASKS= 'GET_TASKS'
export const SELECT_TASK = 'SELECT_TASK'
export const FILTERED_TASK = 'FILTERED_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const UPDATE_TASK = 'UPDATE_TASK'

export const getTasks = () => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}tasks.json`, {
        headers: {
          'Content-Type': 'applications/json',
        },
      })

      const result = await response.json()
      const tasks = Object.keys(result).map(key => ({
        ...result[key],
        id: key
      }))
      
      dispatch({type: GET_TASKS, payload: tasks})
    }
    catch (error) {
      console.log(error.message)
    }
  }
}

export const selectTask = (taskID) => ({
  type: SELECT_TASK,
  taskID,
})

export const filteredTask = (projectID) => ({
  type: FILTERED_TASK,
  projectID,
})

export const createTask = (task) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}tasks.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'applications/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          name: task.name,
          projectID: task.projectID,
          status: task.status,
        })
      })
      
      dispatch({type: CREATE_TASK, task})
    }
    catch (error) {
      console.log(error.message)
    }
  }
}

export const removeTask = (taskID) => {
  return async dispatch => {
    try {
      await fetch(`${URL_API}tasks/${taskID}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'applications/json',
        },
      })
      
      dispatch({type: REMOVE_TASK, taskID})
    }
    catch (error) {
      console.log(error.message)
    }
  }
} 

export const updateTask = (taskID, newValue) => {
  return async dispatch => {
    try {
      await fetch(`${URL_API}tasks/${taskID}.json`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'applications/json',
        },
        body: JSON.stringify({
          status: newValue,
        })
      })
      
      dispatch({type: UPDATE_TASK})
    }
    catch (error) {
      console.log('Aqui')
      console.log(error.message)
    }
  }
}