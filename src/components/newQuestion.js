import React, {Component} from "react";
import {connect} from "react-redux";
import {Redirect} from "react-router";
import {handleSaveQuestion} from "../actions/shared";

class NewQuestion extends Component {
  state = {
    goHome: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.optionOne.value !== "" && e.target.optionTwo.value !== "") {
      this.props
        .dispatch(
          handleSaveQuestion(
            this.props.logged,
            e.target.optionOne.value,
            e.target.optionTwo.value
          )
        )
        .then(() => {
          this.setState({goHome: true});
        });
    } else {
      alert("please fill the form to submit");
    }
  };

  render() {
    if (this.state.goHome) {
      return <Redirect to="/" />;
    }

    return (
      <div className="newQuestion">
        <h2>add question</h2>
        <p className="title">would you rather</p>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="optionOne" placeholder="first option" />
          <p>or</p>
          <input type="text" name="optionTwo" placeholder="second option" />
          <button className="btn">add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({logged}) => ({logged});

export default connect(mapStateToProps)(NewQuestion);
