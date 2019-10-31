import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import "./styles.css";
import CommentDetails from "./CommentDetails";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div style={{ margin: "10px" }} className="ui comments">
      <h3 className="ui dividing header">Comments</h3>
      <div style={{ margin: "15px" }}>
        <ApprovalCard>
          <CommentDetails
            author="Chandan"
            avatar={faker.image.avatar()}
            text="some Text"
            date="Today at 6:00PM"
          />
        </ApprovalCard>
        <ApprovalCard>
          <CommentDetails
            author="Sam"
            avatar={faker.image.avatar()}
            text="Good Article"
            date="Today at 6:00PM"
          />
        </ApprovalCard>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
