import React from "react";
import {connect} from "react-redux";
import AnsweredPoll from "./answeredPoll";
import UnansweredPoll from "./unansweredPoll";

const QuestionPoll = (props) => {
  const question = props.questions[props.id];
  const author = props.users[question.author];
  const user = props.users[props.logged];
  const answered = user.answers.hasOwnProperty(props.id);

  return (
    <div className="poll-wrap">
      <div className="avatar-wrap">
        <img
          className="avatar"
          src={author.avatarURL}
          alt={author.name}
          title={author.name}
        />
      </div>

      <h2>{author.name}</h2>

      {answered ? (
        <AnsweredPoll id={question.id} />
      ) : (
        <UnansweredPoll id={question.id} />
      )}
    </div>
  );
};

const mapStateToProps = ({users, questions, logged}, {id}) => ({
  users,
  questions,
  logged,
  id,
});

export default connect(mapStateToProps)(QuestionPoll);
