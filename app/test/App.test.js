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

  beforeEach(() => jest.resetModuleRegistry());

  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls React Router push() when clicking on the Context card', () => {
    const pushSpy = jest.spyOn(useHistory(), 'push').mockImplementation();

    const wrapper = mount(<App/>);
    const contextButton = wrapper.find('.aj-text-button').at(0).childAt(0);
    expect(contextButton.type()).toEqual('button');

    expect(pushSpy).not.toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(0);

    contextButton.simulate('click');

    expect(pushSpy).toHaveBeenCalled();
    expect(pushSpy).toHaveBeenCalledTimes(1);
    expect(pushSpy).toHaveBeenCalledWith('/context');

    pushSpy.mockRestore();
  });

});
