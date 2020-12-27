import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./components/About/About";
import ProjectoList from "./components/ProJectos/ProjectoList";
import "./App.scss";
import Home from "../src/components/Home/Home";
import ShowPage from "./components/ShowPage/Showpage";

function App(props) {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/ShowPage">
          <ShowPage />
        </Route>
        <Route path="/about">
          <ShowPage />
        </Route>
        <Route path="/projectolist/:id" children={<ProjectoList />} />
      </Switch>
    </Router>
  );
}

export default App;
