import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header component', () => {
  it('matches snapshot', () => {
    const links = [
      {
        to: '/test',
        text: 'test',
        external: false
      },
      {
        to: 'http://test.example.com',
        text: 'test example',
        isExternal: true
      }
    ];
    const wrapper = shallow(<Header links={links} />);
    expect(wrapper).toMatchSnapshot();
  });
});
