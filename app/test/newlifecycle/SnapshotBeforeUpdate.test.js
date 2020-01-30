/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/newlifecycle/SnapshotBeforeUpdate}
 * component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import SnapshotBeforeUpdate from '../../src/newlifecycle/SnapshotBeforeUpdate';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<SnapshotBeforeUpdate />);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('changes color on click', () => {
    const wrapper = mount(<SnapshotBeforeUpdate />);
    const button = wrapper.find('button');
    const prevColor = wrapper.find('strong');

    expect(button.text()).toEqual('AQUA');
    expect(prevColor.text()).toEqual('none');
    button.simulate('click');

    expect(button.text()).toEqual('AQUAMARINE');
    expect(prevColor.text()).toEqual('aqua');
    button.simulate('click');

    expect(button.text()).toEqual('LIGHTSKYBLUE');
    expect(prevColor.text()).toEqual('aquamarine');
    button.simulate('click');

    expect(button.text()).toEqual('AQUA');
    expect(prevColor.text()).toEqual('lightskyblue');
    button.simulate('click');

    expect(button.text()).toEqual('AQUAMARINE');
    expect(prevColor.text()).toEqual('aqua');
  });

});
