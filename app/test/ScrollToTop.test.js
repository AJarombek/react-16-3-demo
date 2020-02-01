/**
 * Unit tests with Jest and Enzyme for the {@link ../src/ScrollToTop} component.
 * @author Andrew Jarombek
 * @since 1/31/2019
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import ScrollToTop from '../src/ScrollToTop';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ScrollToTop/>);
    expect(wrapper.exists()).toBe(true);
  });

});
