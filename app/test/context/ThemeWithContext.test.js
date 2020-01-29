/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/context/ThemeWithContext} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ThemeWithContext from '../../src/context/ThemeWithContext';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ThemeWithContext />);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('changes theme', () => {
    const wrapper = mount(<ThemeWithContext />);
    const themeSwitch = wrapper.find('.aj-switch');

    expect(wrapper.find('.theme-with-context').hasClass('light-theme-with-context'))
      .toBe(true);
    expect(wrapper.find('.theme-with-context-card').hasClass('light-theme-with-context-card'))
      .toBe(true);

    themeSwitch.simulate('click');

    expect(wrapper.find('.theme-with-context').hasClass('dark-theme-with-context'))
      .toBe(true);
    expect(wrapper.find('.theme-with-context-card').hasClass('dark-theme-with-context-card'))
      .toBe(true);

    themeSwitch.simulate('click');

    expect(wrapper.find('.theme-with-context').hasClass('light-theme-with-context'))
      .toBe(true);
    expect(wrapper.find('.theme-with-context-card').hasClass('light-theme-with-context-card'))
      .toBe(true);
  });

});
