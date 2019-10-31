import React from "react";
const getDate = () => {
  return new Date().toTimeString();
};
const CommentDetails = props => {
  return (
    <div className="comment">
      <a className="avatar">
        <img src={props.avatar} />
      </a>
      <div className="content">
        <a className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{getDate()}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};
export default CommentDetails;
