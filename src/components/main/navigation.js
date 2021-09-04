import React from "react";
import {connect} from "react-redux";
import {Link, NavLink} from "react-router-dom";
import {loggedUserAction} from "../../actions/logged";

const Nav = (props) => {
  const logout = () => {
    props.dispatch(loggedUserAction(null));
  };

  const handleClick = () => {
    if (props.logged === null) {
      alert("Please login first to navigate to this section");
    }
  };

  return (
    <div className="navWrap">
      <nav className="nav">
        <div className="mainNav" onClick={handleClick}>
          <NavLink exact to="/" activeClassName="active">
            home
          </NavLink>
          <NavLink to="/add" activeClassName="active">
            New question
          </NavLink>
          <NavLink to="/leaderboard" activeClassName="active">
            Leaderboard
          </NavLink>
        </div>
        {props.logged !== null && (
          <div className="loggedNav">
            <span>Hello, {props.users[props.logged].name}</span>
            <div className="avatar-wrap">
              <img
                className="avatar"
                src={props.users[props.logged].avatarURL}
                alt={props.users[props.logged].name}
                title={props.users[props.logged].name}
              />
            </div>
            <Link to="/" className="btn logoutBtn" onClick={logout}>
              logout
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

const mapStateToProps = ({logged, users}) => ({
  logged,
  users,
});

export default connect(mapStateToProps)(Nav);
