import { FILTERED_TASK, SELECT_TASK, filteredTask } from '../actions/task.action'

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
    default:
      return state
  }
}

export default TaskReducer