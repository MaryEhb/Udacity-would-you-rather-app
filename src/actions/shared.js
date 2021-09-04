import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA";
import {getUsersAction} from "./users";
import {
  getQuestionsAction,
  addQuestionAction,
  addAnswerToQuestionAction,
} from "./questions";
import {addQuestionToUserAction, addAnswerToUserAction} from "./users";
import {showLoading, hideLoading} from "react-redux-loading";

// getting the intial data from the api
export const handleIntialState = () => {
  return (dispatch) => {
    dispatch(showLoading());
    _getUsers().then((users) => {
      dispatch(getUsersAction(users));
    });

    _getQuestions().then((questions) => {
      dispatch(getQuestionsAction(questions));
      dispatch(hideLoading());
    });
  };
};

// adding question to the api and the store
export const handleSaveQuestion = (logged, optionOne, optionTwo) => {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion({
      author: logged,
      optionOneText: optionOne,
      optionTwoText: optionTwo,
    }).then((question) => {
      dispatch(addQuestionAction(question));
      dispatch(addQuestionToUserAction(logged, question));
      dispatch(hideLoading());
    });
  };
};

// answering the question in the api and the store
export function handleQuestionAnswer(logged, questionID, option) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestionAnswer({
      authedUser: logged,
      qid: questionID,
      answer: option,
    }).then(() => {
      dispatch(addAnswerToQuestionAction(logged, questionID, option));
      dispatch(addAnswerToUserAction(logged, questionID, option));
      dispatch(hideLoading());
    });
  };
}
