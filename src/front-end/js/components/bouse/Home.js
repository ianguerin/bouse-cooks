import React from 'react';

export default class Home extends React.Component {
  render() {
    const names = [
      'booty',
      'best',
      'bokbok',
      'best butts',
      'bee',
      'blue',
      'bonfire',
      'big ups to all my haters',
      'bird',
      'big'
    ];
    const currName = names[Math.floor(Math.random() * names.length)];

    return (
      <div className="content home">
        <div className="centered">{currName} house</div>
      </div>
    );
  }
}
