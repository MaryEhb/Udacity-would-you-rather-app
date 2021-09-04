import React from "react";
import {connect} from "react-redux";
import ProgressBar from "../../utils/progressBar";

const AnsweredPoll = (props) => {
  const {question, user} = props;
  
  const totalAnswers =
    question.optionOne.votes.length + question.optionTwo.votes.length;

  return (
    <div className="poll-answer answered-poll">
      <p>asked: Would you rather</p>
      <div
        className={`option ${
          user.answers[question.id] === "optionOne" && "chosen"
        }`}
      >
        <p>{question.optionOne.text}</p>
        <ProgressBar
          num={question.optionOne.votes.length}
          total={totalAnswers}
        />
        <span>
          {question.optionOne.votes.length} out of {totalAnswers} votes
        </span>
        {user.answers[question.id] === "optionOne" && (
          <p className="indicateChoice">your choice</p>
        )}
      </div>
      <p>or</p>
      <div
        className={`option ${
          user.answers[question.id] === "optionTwo" && "chosen"
        }`}
      >
        <p>{question.optionTwo.text}</p>
        <ProgressBar
          num={question.optionTwo.votes.length}
          total={totalAnswers}
        />
        <span>
          {question.optionTwo.votes.length} out of {totalAnswers} votes
        </span>
        {user.answers[question.id] === "optionTwo" && (
          <p className="indicateChoice">your choice</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({questions, users, logged}, {id}) => ({
  question: questions[id],
  user: users[logged],
});

export default connect(mapStateToProps)(AnsweredPoll);
