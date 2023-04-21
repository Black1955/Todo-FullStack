import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Icolor } from "../../ui/select/IMySelect";
import { IUniqueColors, filter, filters } from "./types";
import { IcallBack } from "../../ui/filter/IFilter";

const Filters: filter[] = JSON.parse(localStorage.getItem("filters")!);

const initialColors = [
  { color: "#fac608" },
  { color: "#fd99af" },
  { color: "#3fd4f4" },
  { color: "#ca8bfe" },
  { color: "#717082" },
  { color: "#a18aff" },
];
const filtersColor = Filters
  ? Filters.map(elem => ({ color: elem.color }))
  : [];

const uniqueColors: Icolor[] = [];
const uniqueSet: IUniqueColors = {};

[...initialColors, ...filtersColor].forEach(color => {
  if (uniqueSet[color.color] === undefined) {
    uniqueColors.push(color);
    uniqueSet[color.color] = 1;
  } else uniqueSet[color.color]++;
});

const initialState: filters = {
  filters: Filters ? Filters : [],
  colors: Filters
    ? uniqueColors.filter(color => uniqueSet[color.color] === 1)
    : initialColors,
};

export const FilterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    createFilter(state, action: PayloadAction<filter>) {
      state.filters.push(action.payload);
      localStorage.setItem("filters", JSON.stringify(state.filters));
    },
    changeFilter(state, action: PayloadAction<IcallBack>) {
      if (action.payload) {
        const filter = state.filters.find(
          filter => filter.color === action.payload.color
        );
        if (filter) {
          filter.active = action.payload.checked;
        }
      }
    },
    deleteFilter(state, action) {
      state.filters.filter(filter => filter !== action.payload);
    },
    deleteColor(state, action: PayloadAction<Icolor>) {
      return {
        ...state,
        colors: [...state.colors].filter(
          color => color.color !== action.payload.color
        ),
      };
    },

    addColor(state, action) {
      state.colors.push(action.payload);
    },
  },
});

export default FilterSlice.reducer;
export const { createFilter } = FilterSlice.actions;
