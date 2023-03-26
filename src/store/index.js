import {combineReducers, createStore} from 'redux';

import ProjectReducer from './reducers/project.reducer';
import TaskReducer from './reducers/task.reducer';

const RootReducer = combineReducers({
  tasks: TaskReducer,
  projects: ProjectReducer
})

export default createStore(RootReducer)