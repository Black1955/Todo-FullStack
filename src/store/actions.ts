import { userSlice } from "./reducers/UserSlice";
import { FilterSlice } from "./reducers/filterSlice";
export default {
  ...userSlice.actions,
  ...FilterSlice.actions,
};
