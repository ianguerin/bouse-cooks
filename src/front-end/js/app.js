import '@babel/polyfill';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';

import Header from './components/Header';
import Home from './components/Home';
import Week from './components/Week';

import '../css/index.css';

class App extends React.Component {
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

render(<App />, document.getElementById('app'));
