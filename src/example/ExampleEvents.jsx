import React, { useState } from "react";
import Button from "../ui/Button";

const ExampleEvents = () => {
  const [text, setText] = useState("");
  function handleClick(e) {
    alert("Button click event ishga tushdi.");
  }
  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div className="event-container">
      <Button onClick={handleClick}>Click</Button>
      <h1>Input: {text}</h1>
      <input
        type="text"
        onChange={handleChange}
        value={text}
        className="event-input"
      />
    </div>
  );
};

export default ExampleEvents;
