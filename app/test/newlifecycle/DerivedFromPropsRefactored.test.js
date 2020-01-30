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

  it('renders message', () => {
    const wrapper = shallow(<DerivedFromPropsRefactored show={true} />);
    expect(wrapper.find('.secret-code')).toHaveLength(1);
    expect(wrapper.find('.secret-code-classified')).toHaveLength(0);
    expect(wrapper.find('.secret-code').childAt(0).text()).toEqual('You have a beautiful heart.');
  });

  it('renders classified', () => {
    const wrapper = shallow(<DerivedFromPropsRefactored show={false} />);
    expect(wrapper.find('.secret-code')).toHaveLength(0);
    expect(wrapper.find('.secret-code-classified')).toHaveLength(1);
    expect(wrapper.find('.secret-code-classified').childAt(0).text()).toEqual('CLASSIFIED');
  });

});
