/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/newlifecycle/DerivedFromProps}
 * component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import DerivedFromProps from '../../src/newlifecycle/DerivedFromProps';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<DerivedFromProps show={true} />);
    expect(wrapper.exists()).toBe(true);
  });

});
