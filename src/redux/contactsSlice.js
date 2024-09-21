import { createSlice } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.items;

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: { items: [] },
  reducers: {
    addContact: (state, action) => {},
    deleteContact: (state, action) => {},
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
