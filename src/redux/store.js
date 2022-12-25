import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './searchSlice'
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { changeSearchEpic } from '../epics/changeSearchEpic';
import { searchSkillsEpic } from '../epics/searchSkillsEpic';


const epicMiddleware = createEpicMiddleware();
const epic = combineEpics(
  changeSearchEpic,
  searchSkillsEpic
)

export const store = configureStore({
  reducer: {
    skills: searchReducer,
  },
  middleware: [epicMiddleware]
});

epicMiddleware.run(epic);
export default store;