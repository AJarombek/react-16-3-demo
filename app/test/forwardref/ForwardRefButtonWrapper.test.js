/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/forwardref/ForwardRefButtonWrapper}
 * component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ForwardRefButtonWrapper from '../../src/forwardref/ForwardRefButtonWrapper';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ForwardRefButtonWrapper>Unit Test</ForwardRefButtonWrapper>);
    expect(wrapper.exists()).toBe(true);
  });

});
