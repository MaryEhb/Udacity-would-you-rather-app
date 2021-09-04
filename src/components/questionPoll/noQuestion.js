import React from "react";
import {Link} from "react-router-dom";

const NoQuestionFound = () => {
  return (
    <div className="no-question-found">
      <h2>404</h2>
      <h3>not found</h3>
      <p>This question you are looking for doesn't exist</p>
      <Link to="/">return home</Link>
    </div>
  );
};

export default NoQuestionFound;
