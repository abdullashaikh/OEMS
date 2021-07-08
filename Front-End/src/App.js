import "./App.css";
import Login from "./Login";
import Dashboard from "./Dashboard";
import React from "react";
import Test from "./Test";
import Logindata from "./login-2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CreateExam from "./CreateExam";
import Body from "./Body";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/create-exam">
            {/* <Dashboard /> */}
            <Body />
            {/* <CreateExam /> */}
          </Route>
          <Route path="/testing">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logindata">
            <Logindata />
          </Route>
          <Route path="/TeacherDashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
