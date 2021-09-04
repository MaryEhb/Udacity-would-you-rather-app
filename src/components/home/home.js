import React, {Component} from "react";
import {connect} from "react-redux";
import Question from "./question";

class Home extends Component {
  state = {
    displayed: [],
    type: "answered",
  };

  componentDidMount() {
    this.getQuestionsByType();
  }

  getQuestionsByType = (type = "") => {
    const {users, questions, logged} = this.props;

    if (type === "answered") {
      this.setState({
        displayed: Object.keys(users[logged].answers),
        type: "answered",
      });
    } else {
      this.setState({
        displayed: questions
          .filter(
            (question) => !users[logged].answers.hasOwnProperty(question.id)
          )
          .map((question) => question.id),
        type: "unanswered",
      });
    }
  };

  render() {
    return (
      <div className="home">
        <div className="choice-btns">
          <button
            className={`btn ${this.state.type !== "unanswered" && "inactive"}`}
            onClick={() => this.getQuestionsByType("unanswered")}
            value="unanswered"
          >
            unanswered questions
          </button>
          <button
            className={`btn ${this.state.type !== "answered" && "inactive"}`}
            onClick={() => this.getQuestionsByType("answered")}
            value="answered"
          >
            answered questions
          </button>
        </div>

        {this.state.displayed.length === 0 ? (
          <div className="finished-ans">
            <h2>great work!</h2>
            <p>You answered all the questions</p>
            <p>
              you can either add new questions for you and your friends or wait
              for more questions added by them
            </p>
          </div>
        ) : (
          <ul className="questions">
            {this.state.displayed.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({users, logged, questions}) => {
  const arrangedQuestions = Object.values(questions).sort(
    (a, b) => b.timestamp - a.timestamp
  );

  return {
    users,
    logged,
    questions: arrangedQuestions,
  };
};

export default connect(mapStateToProps)(Home);
