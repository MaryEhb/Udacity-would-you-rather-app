import React from "react";
import {connect} from "react-redux";
import {loggedUserAction} from "../../actions/logged";

const Login = (props) => {
  const handleClick = (id) => {
    props.dispatch(loggedUserAction(id));
  };

  const {users} = props;

  return (
    <div className="login">
      <h1>Welcome stranger!</h1>
      <p>
        please login to your account to enter <span>would you rather</span>{" "}
        plateform
      </p>
      <div className="users">
        {Object.values(users).map((user) => (
          <div
            className="btn"
            key={user.id}
            onClick={() => handleClick(user.id)}
          >
            <div className="avatar-wrap">
              <img
                className="avatar login-avatar"
                src={user.avatarURL}
                alt={user.name}
                title={user.name}
              />
            </div>
            <div className="name">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapPropsToState = ({users, logged}) => ({
  users,
  logged,
});

export default connect(mapPropsToState)(Login);
