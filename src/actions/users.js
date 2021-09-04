import {
  GET_USERS,
  ADD_QUESTION_TO_USER,
  ADD_ANSWER_TO_USER,
} from "./actionTypes";

export const getUsersAction = (users) => ({
  type: GET_USERS,
  users,
});

export const addQuestionToUserAction = (author, question) => ({
  type: ADD_QUESTION_TO_USER,
  author,
  question,
});

export const addAnswerToUserAction = (logged, questionID, option) => ({
  type: ADD_ANSWER_TO_USER,
  logged,
  questionID,
  option,
});
