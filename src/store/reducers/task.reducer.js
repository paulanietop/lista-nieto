import { CREATE_TASK, FILTERED_TASK, REMOVE_ALL_TASKS, REMOVE_TASK, SELECT_TASK, filteredTask } from '../actions/task.action'

import {TASK} from '../../data/todo'

const initialState = {
  tasks: TASK,
  filteredTask: [],
  selected: null,
}

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_TASK:
      return {
        ...state,
        selected: state.tasks.find(task => task.id === action.taskID)
      }
    case FILTERED_TASK:
      return {
        ...state,
        filteredTask: state.tasks.filter(task => task.projectID === action.projectID)
      }
    case CREATE_TASK:
      return {
        ...state,
        filteredTask: [...state.filteredTask, action.task],
        tasks: [...state.tasks, action.task]
      }
    case REMOVE_TASK:
      return {
        tasks: state.tasks.filter(task => task.id !== action.taskID),
        filteredTask: state.filteredTask.filter(task => task.id !== action.taskID),
        selected: null,
      }
    case REMOVE_ALL_TASKS:
      return {
        tasks: state.tasks.filter(task => task.projectID !== action.projectID),
        filteredTask: [],
        selected: null,
      }
    default:
      return state
  }
}

export default TaskReducer