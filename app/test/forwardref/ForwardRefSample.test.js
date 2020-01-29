/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/forwardref/ForwardRefSample} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ForwardRefSample from '../../src/forwardref/ForwardRefSample';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ForwardRefSample />);
    expect(wrapper.exists()).toBe(true);
  });

});
