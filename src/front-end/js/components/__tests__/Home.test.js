import React from 'react';
import { shallow } from 'enzyme';

import Home from '../Home';

describe('Home component', () => {
  it('matches snapshot', () => {
    global.Math.random = () => 0;

    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
});
