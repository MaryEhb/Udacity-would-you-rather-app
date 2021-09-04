import React from "react";

const ProgressBar = (props) => {
  const { num, total } = props;
  const percentage = Math.floor((num / total) * 100);
  return (
    <div className="progress-wrap">
      <div
        className="progress"
        style={{width: (percentage + '%')}}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default ProgressBar;
