import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import Bouse from './bouse/Bouse';
import Boux from './boux/Boux';

import '../../css/index.css';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app-router">
          <Switch>
            <Route path="/boux" component={Boux} />
            <Route path="/" component={Bouse} />
          </Switch>
        </div>
      </Router>
    );
  }
}
