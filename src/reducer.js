import { combineReducers } from "redux";
import loginSlice from "./reducers/userReducer";
export default combineReducers({
	// user: {}
	login: loginSlice,
});

