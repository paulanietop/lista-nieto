import { COMPLETE_PROJECT, SELECT_PROJECT } from "../actions/project.action";

import { PROJECT } from "../../data/project";

const initialState = {
  projects: PROJECT,
  selected: null
}

const ProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PROJECT:
      const indexProject = state.projects.findIndex(project => project.id === action.projectID)
      if(indexProject === -1) return state
      return {...state, selected: state.projects[indexProject]}
    case COMPLETE_PROJECT:
      const index = state.projects.findIndex(project => project.id === action.projectID)
      if(index === -1) return state
      const projects = state.projects
      projects[index].status = true
      return {
        projects: projects,
        selected: null
      }
    default:
      return state
  }
}

export default ProjectReducer