/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/newlifecycle/DerivedFromPropsWrapper}
 * component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import DerivedFromPropsWrapper from '../../src/newlifecycle/DerivedFromPropsWrapper';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<DerivedFromPropsWrapper />);
    expect(wrapper.exists()).toBe(true);
  });

});
