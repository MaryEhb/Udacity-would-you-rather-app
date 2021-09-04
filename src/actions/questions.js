import {
  ADD_QUESTION,
  GET_QUESTIONS,
  ADD_ANSWER_TO_QUESTION,
} from "./actionTypes";

export const getQuestionsAction = (questions) => ({
  type: GET_QUESTIONS,
  questions,
});

export const addQuestionAction = (question) => ({
  type: ADD_QUESTION,
  question,
});

export const addAnswerToQuestionAction = (logged, questionID, option) => ({
  type: ADD_ANSWER_TO_QUESTION,
  logged,
  questionID,
  option,
});
