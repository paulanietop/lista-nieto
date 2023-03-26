export const SELECT_TASK = 'SELECT_TASK'
export const FILTERED_TASK = 'FILTERED_TASK'
export const CREATE_TASK = 'CREATE_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const REMOVE_ALL_TASKS = 'REMOVE_ALL_TASKS'

export const selectTask = (taskID) => ({
  type: SELECT_TASK,
  taskID,
})

export const filteredTask = (projectID) => ({
  type: FILTERED_TASK,
  projectID,
})

export const createTask = (task) => ({
  type: CREATE_TASK,
  task
})

export const removeTask = (taskID) => ({
  type: REMOVE_TASK,
  taskID
})

export const removeAllTasks = (projectID) => ({
  type: REMOVE_ALL_TASKS,
  projectID
})