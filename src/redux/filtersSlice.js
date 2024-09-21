import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filtres.name;
export const filtersSlice = createSlice({
  name: "filters",
  initialState: { name: "" },
  reducers: { changeFilter: (state, action) => {} },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
