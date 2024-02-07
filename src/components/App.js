import React from "react";
import Tickler from "./Tickler";
import MultiButton from "./MultiButton";
import ChangeItUp from "./ChangeItUp";
import Login from "./Login";
import Clickable from "./Clickable";

function App() {
  function handleClick()
  {
    console.log("Norah!");
  }
  return (
    <div>
      <h3>onClick</h3>
      <Tickler />
      <hr />

      <MultiButton />
      <hr />

      <h3>onChange</h3>
      <ChangeItUp />
      <hr />

      <h3>onSubmit</h3>
      <Login />
      <hr />
      <Clickable onClick={handleClick}></Clickable>
      
    </div>
  )
}

export default App;
