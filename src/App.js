import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>these are page</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </div>
    </Switch>
  );
}

export default App;
