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

describe('integration tests', () => {

  it('shows message on click', () => {
    const wrapper = mount(<DerivedFromPropsWrapper />);
    const button = wrapper.find('.aj-contained-button').childAt(0);

    expect(wrapper.find('.secret-code')).toHaveLength(0);
    expect(wrapper.find('.secret-code-classified')).toHaveLength(1);
    expect(wrapper.find('.secret-code-classified').childAt(0).text()).toEqual('CLASSIFIED');

    button.simulate('click');

    expect(wrapper.find('.secret-code')).toHaveLength(1);
    expect(wrapper.find('.secret-code-classified')).toHaveLength(0);
    expect(wrapper.find('.secret-code').childAt(0).text()).toEqual('You have a beautiful heart.');

    button.simulate('click');

    expect(wrapper.find('.secret-code')).toHaveLength(0);
    expect(wrapper.find('.secret-code-classified')).toHaveLength(1);
    expect(wrapper.find('.secret-code-classified').childAt(0).text()).toEqual('CLASSIFIED');
  });

});
