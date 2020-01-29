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
