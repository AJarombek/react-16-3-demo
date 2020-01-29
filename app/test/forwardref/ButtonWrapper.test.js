/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/forwardref/ButtonWrapper} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ButtonWrapper from '../../src/forwardref/ButtonWrapper';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ButtonWrapper>Unit Test</ButtonWrapper>);
    expect(wrapper.exists()).toBe(true);
  });

});
