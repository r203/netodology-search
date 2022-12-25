import { ofType } from "redux-observable";
// import { of } from "rxjs";
// import {ajax} from 'rxjs/ajax';
import {map, filter, debounceTime, 
  // tap
  // switchMap, 
  // catchError
} from 'rxjs/operators';
import {searchSkillsRequest, 
  // searchSkillsFailure, 
  // searchSkillsSuccess, 
  changeSearchField} from '../redux/searchSlice';

export const changeSearchEpic = action$ => action$.pipe (
  ofType(changeSearchField),
  map(o => o.payload.trim()),
  filter(o => o !== ''),
  debounceTime(100),
  map(o => searchSkillsRequest(o)),
  // tap(o => console.log(o)),
)