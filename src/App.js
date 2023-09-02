import React from "react";
import "./App.css";
``;
import Home from "./components/Home";
import AppRouter from "./routing/router";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <AppRouter />
    </div>
  );
}

export default App;
