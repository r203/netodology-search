import { ofType } from "redux-observable";
// import { of } from "rxjs";
import {ajax} from 'rxjs/ajax';
import {map, 
  // filter, 
  // debounceTime, 
  switchMap, 
  // catchError,
  // tap
} from 'rxjs/operators';
import {
  searchSkillsRequest, 
  // searchSkillsFailure, 
  searchSkillsSuccess, 
  // changeSearchField
} from '../redux/searchSlice';


export const searchSkillsEpic = action$ => action$.pipe (
  // ofType('searchSlice/searchSkillsRequest'),
  ofType(searchSkillsRequest),
  // tap(o => console.log('test')),
  map(o => o.payload),
  map(o => new URLSearchParams({q: o})),
  switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`)),
  map(o => searchSkillsSuccess(o)),
  // switchMap(o => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}?${o}`)).pipe(
  //   map(o => searchSkillsSuccess(o)),
  //   catchError(e => of(searchSkillsFailure(e)))
  // ),
)