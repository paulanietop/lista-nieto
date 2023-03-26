export const SELECT_TASK = 'SELECT_TASK'
export const FILTERED_TASK = 'FILTERED_TASK'

export const selectedTask = (taskID) => ({
  type: SELECT_TASK,
  taskID,
})

export const filteredTask = (projectID) => ({
  type: FILTERED_TASK,
  projectID,
})

