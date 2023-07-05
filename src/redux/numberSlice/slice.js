import { createSlice } from '@reduxjs/toolkit';
export const numberSlice = createSlice({
  name: 'number',
  initialState: '',
  reducers: {
    setNumber: (state, action) => (state = action.payload),
  },
});
export const { setNumber } = numberSlice.actions;
