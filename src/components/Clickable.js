import React from "react";
import { ReactDOM } from "react-dom";

function Clickable({ onClick }) {
    return (<button onClick={onClick}>Click me</button>);

  }
export default Clickable;
  