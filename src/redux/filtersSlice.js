import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filters: {
    name: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNameFilter = (state) => state.filters.filters.name;
// Редюсер слайсу
export const filtersReducer = filtersSlice.reducer;
