import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";


function App() {
  return (
  <nav>
    <h1>Hello Programmers</h1>
    <Switch>
      <Route path="/login">
        <LoginFormPage />
      </Route>
    </Switch>
    </nav>
  );
}

export default App;
