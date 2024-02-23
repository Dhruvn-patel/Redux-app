import React from "react";
import "./App.css";
import { RouteComponent } from "./routes/route";
import Setting from "./components/Setting";
function App() {
  return (
    <div className="App">
      {/* <Setting /> */}
      <RouteComponent />
    </div>
  );
}

export default App;
