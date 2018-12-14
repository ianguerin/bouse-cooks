import React from 'react';
import { shallow } from 'enzyme';

import Week from '../Week';

describe('Week component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Week />);
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot in holiday mode', () => {
    const wrapper = shallow(<Week />);
    wrapper.setState({ isHoliday: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('matches snapshot with data', () => {
    const wrapper = shallow(<Week />);
    wrapper.setState({
      data: [
        {
          date: 'Testeenth of Testember',
          cooks: [
            {
              name: 'Testman'
            },
            {
              name: 'Testwoman'
            },
            {
              name: 'Testperson'
            }
          ],
          suggestions: [
            {
              title: 'Recipe 1',
              href: 'example.com/recipes/1'
            },
            {
              title: 'Recipe 2',
              href: 'example.com/recipes/2'
            }
          ]
        }
      ]
    });
    expect(wrapper).toMatchSnapshot();
  });
});
