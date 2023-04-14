import { API } from "./../../Services/API";
import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import FilterReducer from "./filterSlice";
export const rootReducer = combineReducers({
  [API.reducerPath]: API.reducer,
  user: UserReducer,
  filter: FilterReducer,
});
