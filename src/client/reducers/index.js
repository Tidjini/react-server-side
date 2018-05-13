import { combineReducers } from "redux";
import UsersReducer from "./usersReducer";
import CurrentUserReducer from "./currentUserReducer";
import adminsReducer from "./adminsReducer";

export default combineReducers({
  users: UsersReducer,
  auth: CurrentUserReducer,
  admins: adminsReducer
});
