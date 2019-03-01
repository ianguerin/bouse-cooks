import React from 'react';
import { Link } from 'react-router-dom';
import { instaLink } from '../constants';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Link to="/">bouse</Link>
        {' / '}
        <Link to="/cookbot/week">cookbot</Link>
        {' / '}
        <a
          className="external"
          target="_blank"
          rel="noopener noreferrer"
          href={instaLink}
        >
          insta
        </a>
      </div>
    );
  }
}
