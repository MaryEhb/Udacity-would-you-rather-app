import {SET_LOGGED_USER} from "../actions/actionTypes";

const logged = (state = null, action) => {
  switch (action.type) {
    case SET_LOGGED_USER:
      return action.user;

    default:
      return state;
  }
};

export default logged;