import React, { useState } from "react";

function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const textChangeHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <p>It is good to see you here!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={textChangeHandler}>Click to make a change</button>
    </div>
  );
}

export default Greeting;
