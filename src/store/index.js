import {applyMiddleware, combineReducers, createStore} from 'redux';

import BillReducer from './reducers/budget.reducer';
import JournalsReducer from './reducers/journals.reducer';
import ProjectReducer from './reducers/project.reducer';
import TaskReducer from './reducers/task.reducer';
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
  tasks: TaskReducer,
  projects: ProjectReducer,
  journals: JournalsReducer,
  bills: BillReducer,
})

export default createStore(RootReducer, applyMiddleware(thunk))