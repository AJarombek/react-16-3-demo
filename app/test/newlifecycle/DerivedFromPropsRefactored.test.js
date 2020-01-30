/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/newlifecycle/DerivedFromPropsRefactored}
 * component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import DerivedFromPropsRefactored from '../../src/newlifecycle/DerivedFromPropsRefactored';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<DerivedFromPropsRefactored show={true} />);
    expect(wrapper.exists()).toBe(true);
  });

});
