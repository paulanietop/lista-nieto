import { PROJECT } from "../../data/project";
import { SELECT_PROJECT } from "../actions/project.action";

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
    default:
      return state
  }
}

export default ProjectReducer