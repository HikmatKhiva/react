import { useState } from "react";
import "./App.css";
import Button from "./ui/Button";
import ExampleRef from "./example/ExampleRef";
import ExampleHOC from "./example/ExampleHOC";
import ExampleEvents from "./example/ExampleEvents";
function App() {
  const [tabs, setTabs] = useState("example");
  const Show = {
    ref: <ExampleRef />,
    hoc: <ExampleHOC />, // isLoading={true}
    event: <ExampleEvents />,
  };
  const handleTab = (tab = "example") => {
    setTabs(tab);
  };
  return (
    <>
      <div className="tabs">
        <Button
          className={`${tabs === "ref" ? "active" : ""}`}
          onClick={() => handleTab("ref")}
        >
          Ref
        </Button>
        <Button
          className={`${tabs === "hoc" ? "active" : ""}`}
          onClick={() => handleTab("hoc")}
        >
          HOC
        </Button>
        <Button
          className={`${tabs === "event" ? "active" : ""}`}
          onClick={() => handleTab("event")}
        >
          Event
        </Button>
      </div>
      <div>{Show[tabs]}</div>
    </>
  );
}

export default App;
