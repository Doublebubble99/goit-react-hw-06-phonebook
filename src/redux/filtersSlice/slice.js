import { createSlice } from '@reduxjs/toolkit';
export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: { setFilters: (state, action) => (state = action.payload) },
});
export const { setFilters } = filtersSlice.actions;
