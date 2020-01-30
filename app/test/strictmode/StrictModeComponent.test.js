/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/strictmode/StrictModeComponent}
 * component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import StrictModeComponent, {StrictModeChild} from '../../src/strictmode/StrictModeComponent';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<StrictModeComponent />);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('text logged when component updates', () => {
    const wrapper = mount(<StrictModeChild />);
    const instance = wrapper.instance();

    const componentWillUpdateSpy = jest.spyOn(instance, 'UNSAFE_componentWillUpdate');
    const consoleInfoSpy = jest.spyOn(console, 'info');

    expect(componentWillUpdateSpy).not.toHaveBeenCalled();
    expect(componentWillUpdateSpy).toHaveBeenCalledTimes(0);

    expect(consoleInfoSpy).not.toHaveBeenCalled();
    expect(consoleInfoSpy).toHaveBeenCalledTimes(0);

    wrapper.setProps({dummyProp: true});

    expect(componentWillUpdateSpy).toHaveBeenCalled();
    expect(componentWillUpdateSpy).toHaveBeenCalledTimes(1);

    expect(consoleInfoSpy).toHaveBeenCalled();
    expect(consoleInfoSpy).toHaveBeenCalledTimes(1);
    expect(consoleInfoSpy).toHaveBeenCalledWith('Inside UNSAFE_componentWillUpdate');
  });

});
