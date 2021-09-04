import {combineReducers} from "redux";
import users from "./users";
import questions from "./questions";
import logged from "./logged";
import {loadingBarReducer} from "react-redux-loading";

export default combineReducers({
  users,
  questions,
  logged,
  loadingBar: loadingBarReducer,
});
