import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

const Question = (props) => {
  const question = props.questions[props.id];
  const user = props.users[question.author];

  return (
    <div className="question">
      <h2>{user.name}</h2>

      <div className="info-wrap">
        <div className="avatar-wrap">
          <img
            className="avatar questionAvatar"
            src={user.avatarURL}
            alt={user.name}
            title={user.name}
          />
        </div>

        <div className="info">
          <h3>would you rather:</h3>
          <p>...{question.optionOne.text.substring(0, 15)}...</p>
          <Link to={`/questions/${props.id}`}>view poll</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({questions, users}, {id}) => {
  return {
    questions,
    users,
    id,
  };
};

export default connect(mapStateToProps)(Question);
