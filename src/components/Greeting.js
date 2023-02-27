import React, { useState } from "react";
import Output from "./Output";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <Output>It is good to see you here!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button onClick={textChangeHandler}>Click to make a change</button>
    </div>
  );
}

export default Greeting;
