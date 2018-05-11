import {
    CombineReducers
} from "redux";
import UsersReducer from "./usersReducer";

export default CombineReducers({
    users: UsersReducer
})