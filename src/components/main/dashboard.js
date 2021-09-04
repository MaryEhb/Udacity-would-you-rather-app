import React from "react";
import {Route, Switch} from "react-router";
import Home from "../home/home";
import LeaderBoard from "../leaderboard/leaderBoard";
import NewQuestion from "../newQuestion";
import QuestionPolls from "../questionPoll/questionPolls";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add">
        <NewQuestion />
      </Route>

      <Route path="/leaderboard">
        <LeaderBoard />
      </Route>

      <QuestionPolls />
    </div>
  );
};

export default Dashboard;
