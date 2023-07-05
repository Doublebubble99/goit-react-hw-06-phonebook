import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    newContact: (state, action) => [...state, action.payload],
    removeContact: (state, action) =>
      state.filter(contact => contact.id !== action.payload),
  },
});
export const { newContact, removeContact } = contactsSlice.actions;
