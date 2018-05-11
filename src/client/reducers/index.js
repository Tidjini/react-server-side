import { combineReducers } from "redux";
import UsersReducer from "./usersReducer";
import CurrentUserReducer from "./currentUserReducer";

export default combineReducers({
  users: UsersReducer,
  auth: CurrentUserReducer
});
