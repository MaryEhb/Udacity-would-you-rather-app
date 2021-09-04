import {SET_LOGGED_USER} from "./actionTypes";

export const loggedUserAction = (user) => ({
  type: SET_LOGGED_USER,
  user,
});
