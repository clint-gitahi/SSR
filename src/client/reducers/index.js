import { combineReducers } from "redux";
import usersReducers from "./usersReducer";
import authReducer from "./authReducer";

export default combineReducers({
  users: usersReducers,
  auth: authReducer
});
