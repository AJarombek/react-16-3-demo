/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/createref/RefSamples} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import RefSamples from '../../src/createref/RefSamples';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<RefSamples />);
    expect(wrapper.exists()).toBe(true);
  });

});
