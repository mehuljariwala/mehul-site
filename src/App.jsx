import React from "react";
import Header from "./components/Header/Header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import MainLayout from "./containers/Layout/Layout";
import { useStyles } from "./AppStyles";

function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.root}>
        <Header />
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </MainLayout>
      </div>
    </Router>
  );
}

export default App;
