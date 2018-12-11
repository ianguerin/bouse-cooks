import React from 'react';
import { shallow } from 'enzyme';

import Week from '../Week';

describe('Week component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Week />);
    expect(wrapper).toMatchSnapshot();
  });
});
