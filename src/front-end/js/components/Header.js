import React from 'react';
import { Link } from 'react-router-dom';

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
          href="https://www.instagram.com/cubcoop/"
        >
          insta
        </a>
      </div>
    );
  }
}
