import { useState } from "react";
import "./App.css";
import ExampleFunctionComponent from "./example/ExampleFunctionComponent";
import ExampleState from "./example/ExampleState";
import ExampleProps from "./example/ExampleProps";
import ExampleConditionalRendering from "./example/ExampleConditionalRendering";
function App() {
  const [tabs, setTabs] = useState("example");
  const [text, setText] = useState("");
  const Show = {
    example: <ExampleFunctionComponent />,
    state: <ExampleState />,
    props: <ExampleProps text={text} />,
    rendering: <ExampleConditionalRendering />,
  };
  const handleTab = (tab = "example") => {
    setTabs(tab);
  };
  return (
    <>
      <div className="tabs">
        <button className={`${tabs === "example" ? "active" : ""}`} onClick={() => handleTab("example")}>Function Component</button>
        <button className={`${tabs === "props" ? "active" : ""}`}  onClick={() => handleTab("props")}>Props</button>
        <button className={`${tabs === "state" ? "active" : ""}`}  onClick={() => handleTab("state")}>State</button>
        <button className={`${tabs === "rendering" ? "active" : ""}`}  onClick={() => handleTab("rendering")}>Conditional Rendering</button>
      </div>
      {tabs === "props" && (
        <input
          style={{ marginTop: "20px",padding:"8px",borderRadius:"8px",outline:"none",border:"1px solid #ccc" }}
          onChange={(e) => setText(e.target.value)}
        />
      )}
      <div>{Show[tabs]}</div>
    </>
  );
}
export default App;
