import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
  search: '',
};

export const searchSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    searchSkillsRequest(state, action) {
      state.items = [];
      state.loading = true;
      state.error = null;
    },

    searchSkillsFailure(state, action) {
      state.items = [];
      state.loading = false;
      state.error = action.payload;
    },

    searchSkillsSuccess(state, action) {
      // console.log(action.payload);
      state.items = action.payload;
      state.loading = false;
      state.error = null;
    },

    changeSearchField(state, action) {
      // console.log('test');
      state.search = action.payload;
    },

    clearItems(state, action) {
      state.items = [];
    }
  },

});

export const { searchSkillsRequest, searchSkillsFailure, searchSkillsSuccess, changeSearchField, clearItems } = searchSlice.actions;


export default searchSlice.reducer;
