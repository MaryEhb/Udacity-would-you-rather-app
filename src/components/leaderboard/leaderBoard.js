import React from "react";
import {connect} from "react-redux";

const LeaderBoard = (props) => {
  let {users} = props;

  return (
    <div className="leaderboard">
      {users.map((user) => (
        <div key={user.id} className="board">
          <h2
            className={
              users.indexOf(user) === 0
                ? "first-place"
                : users.indexOf(user) === 1
                ? "second-place"
                : ""
            }
          >
            {user.name}
          </h2>
          <div className="info-wrap">
            <div className="avatar-wrap">
              <img
                className="avatar"
                src={user.avatarURL}
                alt={user.name}
                title={user.name}
              />
            </div>
            <div className="info">
              <p>
                Number of questions: <span>{user.questions.length}</span>
              </p>
              <p>
                Number of answers:{" "}
                <span>{Object.keys(user.answers).length}</span>
              </p>
            </div>
            <div className="total-wrap">
              <h3>Score</h3>
              <p>{user.questions.length + Object.keys(user.answers).length}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = ({users}) => {
  const arrangedUsers = Object.values(users).sort(
    (a, b) =>
      Object.keys(b.answers).length +
      b.questions.length -
      (Object.keys(a.answers).length + a.questions.length)
  );

  return {users: arrangedUsers};
};

export default connect(mapStateToProps)(LeaderBoard);
