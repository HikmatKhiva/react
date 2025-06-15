import { useState } from "react";
const ExampleConditionalRendering = () => {
  const [check, setCheck] = useState(false);
  const handleClick = () => setCheck(!check);
  return (
    <div>
      <h1>Conditional Rendering</h1>
      {check ? <h1>✅</h1> : <h1>❎</h1>}
      <button onClick={handleClick}>Click me!</button>
    </div>
  );
};
export default ExampleConditionalRendering;