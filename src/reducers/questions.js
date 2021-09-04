import {
  ADD_ANSWER_TO_QUESTION,
  ADD_QUESTION,
  GET_QUESTIONS,
} from "../actions/actionTypes";

const questions = (state = {}, action) => {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.id]: action.question,
      };

    case ADD_ANSWER_TO_QUESTION:
      return {
        ...state,
        [action.questionID]: {
          ...state[action.questionID],
          [action.option]: {
            ...state[action.questionID][action.option],
            votes: state[action.questionID][action.option].votes.concat([
              action.logged,
            ]),
          },
        },
      };

    default:
      return state;
  }
};

export default questions;
