import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Home from './Home';
import Week from './Week';
import Header from '../Header';
import { instaLink } from '../../constants';

export default class Bouse extends React.Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        to: '/',
        text: 'bouse',
        external: false
      },
      {
        to: '/cookbot/week',
        text: 'cookbot',
        external: false
      },
      {
        to: instaLink,
        text: 'insta',
        isExternal: true
      }
    ];
  }

  render() {
    return [
      <Header links={this.links} key="a" />,
      <Switch key="b">
        <Route exact path="/cookbot/week/:week?" component={Week} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" key="c" />
      </Switch>
    ];
  }
}
