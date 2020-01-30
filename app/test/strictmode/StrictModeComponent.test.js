/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/strictmode/StrictModeComponent}
 * component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import StrictModeComponent from '../../src/strictmode/StrictModeComponent';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<StrictModeComponent />);
    expect(wrapper.exists()).toBe(true);
  });

});
