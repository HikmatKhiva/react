import { useState } from "react";
const ExampleState = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="card">
      <h1>Count {count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>+</button>
      <button onClick={() => setCount((count) => count - 1)}>-</button>
    </div>
  );
};
export default ExampleState;
