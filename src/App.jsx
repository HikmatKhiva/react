import "./App.css";
import ExampleComposition from "./example/ExampleComposition";
import ExampleComponentLifeCycle from "./example/ExampleComponentLifeCycle";
import Button from "./ui/Button";
import ExampleRenderList from "./example/ExampleRenderList";
import { useState } from "react";
function App() {
  const [tabs, setTabs] = useState("composition");
  const Show = {
    composition: (
      <ExampleComposition
        title="Composition sarlavhasi"
        message="Bu xabar App.jsx dan uzatildi."
      />
    ),
    lifeCycle: <ExampleComponentLifeCycle />,
    render: <ExampleRenderList />,
  };
  const handleTab = (tab = "example") => setTabs(tab);
  return (
    <>
      <div className="tabs">
        <Button
          className={`${tabs === "composition" ? "active" : ""}`}
          onClick={() => handleTab("composition")}
        >
          Composition
        </Button>
        <Button
          className={`${tabs === "lifeCycle" ? "active" : ""}`}
          onClick={() => handleTab("lifeCycle")}
        >
          Component LifeCycle
        </Button>
        <Button
          className={`${tabs === "render" ? "active" : ""}`}
          onClick={() => handleTab("render")}
        >
          Component Render
        </Button>
      </div>
      <div>{Show[tabs]}</div>
    </>
  );
}
export default App;