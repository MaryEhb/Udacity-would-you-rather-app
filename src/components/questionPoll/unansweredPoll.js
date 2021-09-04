import React, {Component} from "react";
import {connect} from "react-redux";
import {handleQuestionAnswer} from "../../actions/shared";

class UnansweredPoll extends Component {
  state = {
    option: "optionOne",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(
      handleQuestionAnswer(
        this.props.logged,
        this.props.question.id,
        this.state.option
      )
    );
  };

  handleClick = (e) => {
    this.setState({option: e.target.value});
  };

  render() {
    const {question} = this.props;

    return (
      <div className="poll unanswered-poll">
        <p>asks: Would you rather</p>
        <form onSubmit={this.handleSubmit}>
          <div className="option">
            <input
              onClick={this.handleClick}
              type="radio"
              value="optionOne"
              name="choice"
              defaultChecked
            />
            <span>{question.optionOne.text}</span>
          </div>
          <p>or</p>
          <div className="option">
            <input
              onClick={this.handleClick}
              type="radio"
              value="optionTwo"
              name="choice"
            />
            <span>{question.optionTwo.text}</span>
          </div>
          <button className="btn">submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({questions, users, logged}, {id}) => ({
  question: questions[id],
  users,
  logged,
});

export default connect(mapStateToProps)(UnansweredPoll);
