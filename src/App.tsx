import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./components/pages/homepage"

export default class App extends React.Component {
  componentWillMount() {

  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}
