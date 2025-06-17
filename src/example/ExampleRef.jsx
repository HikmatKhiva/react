import { useRef } from "react";
const ExampleRef = () => {
  const inputRef = useRef();
  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div className="ref-container">
      <input className="input-ref" ref={inputRef} type="text" />{" "}
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};
export default ExampleRef;
