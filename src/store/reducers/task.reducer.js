import { CREATE_TASK, FILTERED_TASK, GET_TASKS, REMOVE_ALL_TASKS, REMOVE_TASK, SELECT_TASK } from '../actions/task.action'

const initialState = {
  tasks: [],
  filteredTask: [],
  selected: null,
}

const TaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload
      }
    case SELECT_TASK:
      return {
        ...state,
        selected: state.tasks.find(task => task.id === action.taskID)
      }
    case FILTERED_TASK:
      console.log(state)
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