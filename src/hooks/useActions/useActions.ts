import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "../useAppDispatch/useAppDispatch";
import actions from "../../store/actions";
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators(actions, dispatch);
};
