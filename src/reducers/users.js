import {
  ADD_ANSWER_TO_USER,
  ADD_QUESTION_TO_USER,
  GET_USERS,
} from "../actions/actionTypes";

const users = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: [...state[action.author].questions, action.question],
        },
      };

    case ADD_ANSWER_TO_USER:
      return {
        ...state,
        [action.logged]: {
          ...state[action.logged],
          answers: {
            ...state[action.logged].answers,
            [action.questionID]: action.option,
          },
        },
      };

    default:
      return state;
  }
};

export default users;
