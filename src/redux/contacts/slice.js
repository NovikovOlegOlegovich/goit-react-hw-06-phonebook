import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, { payload }) => {
      const currentContact = payload;
      return {
        ...state,
        contacts: [...state.contacts, currentContact],
      };
    },
    deleteContact: (state, { payload }) => {
      const contactId = payload;
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== contactId),
      };
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
