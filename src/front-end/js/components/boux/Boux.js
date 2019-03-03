import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Thanks from './Thanks';
import Facts from './Facts';
import Header from '../Header';
import { instaLink } from '../../constants';

export default class Boux extends React.Component {
  constructor(props) {
    super(props);

    this.links = [
      {
        to: '/boux/facts',
        text: 'facts',
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
        <Route exact path="/boux/thanks" component={Thanks} />
        <Route exact path="/boux/facts" component={Facts} />
        <Redirect to="/boux/facts" />
      </Switch>
    ];
  }
}
