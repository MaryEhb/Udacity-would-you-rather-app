import React, {Fragment} from "react";
import {connect} from "react-redux";
import {Route, Switch} from "react-router";
import NoQuestionFound from "./noQuestion";
import QuestionPoll from "./questionPoll";

const QuestionPolls = (props) => {
  const {questions} = props;

  return (
    <Fragment>
      <Switch>
        {Object.keys(questions).map((id) => (
          <Route path={`/questions/${id}`} key={id}>
            <QuestionPoll id={id} />
          </Route>
        ))}

        <Route path="/questions/:id">
          <NoQuestionFound />
        </Route>
      </Switch>
    </Fragment>
  );
};

const mapStateToProps = ({questions}) => ({
  questions,
});

export default connect(mapStateToProps)(QuestionPolls);
