import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Values from "./pages/Values";
import Calculate from "./pages/Calculate";
import NotFound from "./pages/NotFound";
import Layout from "./components/UI/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/timer" component={Timer} />
          <Route path="/values" component={Values} />
          <Route path="/calculate" component={Calculate} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
