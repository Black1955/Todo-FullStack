import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Icolor } from "../../ui/select/IMySelect";

interface filter {
  color: string;
  text: string;
  active: boolean;
}
interface filters {
  filters: filter[];
  colors: Icolor[];
}

const initialColors: Icolor[] = [
  { color: "#fac608" },
  { color: "#fd99af" },
  { color: "#3fd4f4" },
  { color: "#ca8bfe" },
  { color: "#717082" },
  { color: "#a18aff" },
];

const Filters: filter[] = JSON.parse(localStorage.getItem("filters")!);

const initialState: filters = {
  filters: Filters ? Filters : [],
  colors: initialColors,
};
export const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    createFilter(state, action: PayloadAction<filter>) {
      state.filters.push(action.payload);
      localStorage.setItem("filters", JSON.stringify(state.filters));
      console.log(state.colors);
    },
    switchFilter(state, action) {
      state.filters.forEach(
        (filter, i) => i === action.payload && filter.active
      );
    },
    deleteFilter(state, action) {
      state.filters.filter(filter => filter !== action.payload);
    },
    deleteColor(state, action) {
      state.colors.filter(color => color !== action.payload);
    },
    addColor(state, action) {
      state.colors.push(action.payload);
    },
  },
});

export default FilterSlice.reducer;
export const { createFilter } = FilterSlice.actions;
