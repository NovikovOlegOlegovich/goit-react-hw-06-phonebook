import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload: currentContact }) => {
      return {
        ...state,
        contacts: [...state.contacts, currentContact],
      };
    },
    deleteContact: (state, { payload: contactId }) => {
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== contactId),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
