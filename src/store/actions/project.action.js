export const SELECT_PROJECT = 'SELECT_PROJECT'
export const COMPLETE_PROJECT = 'COMPLETE_PROJECT'

export const selectProject = (projectID) => ({
  type: SELECT_PROJECT,
  projectID
})

export const completeProject = (projectID) => ({
  type: COMPLETE_PROJECT,
  projectID
})