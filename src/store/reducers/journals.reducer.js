import { ADD_JOURNAL, LOAD_JOURNAL } from "../actions/journals.action";

import Journal from '../../models/Journal'

const initialState = {
  journals: []
}

const JournalsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_JOURNAL: 
      console.log(action.payload.id)
      const newJournal = new Journal(action.payload.id.toString(), action.payload.title, action.payload.description, action.payload.image)
      return {
        ...state,
        journals: state.journals.concat(newJournal)
      }
    case LOAD_JOURNAL:
      return {
        ...state,
        journals: action.journals.map(item => new Journal(
          item.id.toString(),
          item.title,
          item.description,
          item.image
        ))
      }
    default: 
      return state
  }
}

export default JournalsReducer;