import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export default class Header extends React.Component {
  constructor() {
    super();
  }

  renderInternalLink(link, i) {
    return (
      <Link to={link.to} key={i}>
        {link.text}
      </Link>
    );
  }

  renderExternalLink(link, i) {
    return (
      <a
        className="external"
        target="_blank"
        rel="noopener noreferrer"
        href={link.to}
        key={i}
      >
        {link.text}
      </a>
    );
  }

  renderLinks(links) {
    const elements = links.reduce((acc, link, i) => {
      const element = link.isExternal
        ? this.renderExternalLink(link, i)
        : this.renderInternalLink(link, i);

      return [...acc, element, ' / '];
    }, []);

    elements.pop();

    return elements;
  }

  render() {
    return <div className="header">{this.renderLinks(this.props.links)}</div>;
  }
}

Header.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      isExternal: PropTypes.bool,
      to: PropTypes.string,
      text: PropTypes.string
    })
  )
};
