import React from "react";
import ReactDOM from "react-dom";

const name = "Hello Jainam";
const n = "Shah";

ReactDOM.render(
  <div>
    <h1>
      {name} {n} {`${name} ${n}`} {name + " " + n} Days
    </h1>
    <ul>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
    </ul>
  </div>,
  document.getElementById("root")
);
