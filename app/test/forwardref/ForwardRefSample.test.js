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

describe('integration tests', () => {

  it('renders ref value on screen', () => {
    const wrapper = mount(<ForwardRefSample />);

    const refButton = wrapper.find('.button-wrapper').at(0);
    const refContents = wrapper.find('.prop-ref').childAt(2);

    expect(refContents.text()).toEqual('""');
    refButton.simulate('click');
    expect(refContents.text()).toEqual('null');
  });

  it('renders forward ref value on screen', () => {
    const wrapper = mount(<ForwardRefSample />);

    const refButton = wrapper.find('.button-wrapper').at(1);
    const refContents = wrapper.find('.forward-ref').childAt(2);

    expect(refContents.text()).toEqual('""');
    refButton.simulate('click');
    expect(refContents.text()).toEqual('{"current":"[object HTMLButtonElement]"}');
  });

});
