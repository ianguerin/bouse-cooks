import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import React from 'react';

import Header from './Header';
import Home from './Home';
import Week from './Week';

import '../../css/index.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-router">
          <Header />
          <Switch>
            <Route exact path="/cookbot/week/:week?" component={Week} />
            <Route exact path="/" component={Home} />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}
