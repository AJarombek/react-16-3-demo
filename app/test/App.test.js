/**
 * Unit tests with Jest and Enzyme for the {@link ./App} component.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import { useHistory } from 'react-router-dom';

// Mock react router's useHistory() hook before the tests execute.
jest.mock('react-router-dom', () => {
  const historyObj = {
    push: jest.fn()
  };

  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => historyObj
  }
});

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('calls React Router push() when clicking on the cards', () => {
    const pushSpy = jest.spyOn(useHistory(), 'push').mockImplementation();

    const wrapper = mount(<App/>);
    const contextButton = wrapper.find('.aj-text-button').at(0).childAt(0);
    const createRefButton = wrapper.find('.aj-text-button').at(1).childAt(0);
    const forwardRefButton = wrapper.find('.aj-text-button').at(2).childAt(0);
    const newLifecycleButton = wrapper.find('.aj-text-button').at(3).childAt(0);
    const strictModeButton = wrapper.find('.aj-text-button').at(4).childAt(0);

    expect(contextButton.type()).toEqual('button');
    expect(createRefButton.type()).toEqual('button');
    expect(forwardRefButton.type()).toEqual('button');
    expect(newLifecycleButton.type()).toEqual('button');
    expect(strictModeButton.type()).toEqual('button');

    expect(pushSpy).not.toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(0);

    contextButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/context');

    createRefButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(2);
    expect(pushSpy).toHaveBeenCalledWith('/create-ref');

    forwardRefButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(3);
    expect(pushSpy).toHaveBeenCalledWith('/forward-ref');

    newLifecycleButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(4);
    expect(pushSpy).toHaveBeenCalledWith('/new-lifecycle');

    strictModeButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(5);
    expect(pushSpy).toHaveBeenCalledWith('/strict-mode');

    pushSpy.mockRestore();
  });

});
