/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/context/ThemeWithProps} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ThemeWithProps from '../../src/context/ThemeWithProps';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ThemeWithProps />);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('changes theme', () => {
    const wrapper = mount(<ThemeWithProps />);
    const themeSwitch = wrapper.find('.aj-switch');

    expect(wrapper.find('.theme-with-props').hasClass('light-theme-with-props'))
      .toBe(true);
    expect(wrapper.find('.theme-with-props-card').hasClass('light-theme-with-props-card'))
      .toBe(true);

    themeSwitch.simulate('click');

    expect(wrapper.find('.theme-with-props').hasClass('dark-theme-with-props'))
      .toBe(true);
    expect(wrapper.find('.theme-with-props-card').hasClass('dark-theme-with-props-card'))
      .toBe(true);

    themeSwitch.simulate('click');

    expect(wrapper.find('.theme-with-props').hasClass('light-theme-with-props'))
      .toBe(true);
    expect(wrapper.find('.theme-with-props-card').hasClass('light-theme-with-props-card'))
      .toBe(true);
  });

});
