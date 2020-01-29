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
