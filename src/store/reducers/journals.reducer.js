import { ADD_JOURNAL } from "../actions/journals.action";
import Journal from '../../models/Journal'

const initialState = {
  journals: []
}

const JournalsReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_JOURNAL: 
      const newJournal = new Journal(Date.now(), action.payload.title, action.payload.description, action.payload.image)
      return {
        ...state,
        journals: state.journals.concat(newJournal)
      }
    default: 
      return state
  }
}

export default JournalsReducer;