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
    console.info(wrapper.debug());
    expect(wrapper.exists()).toBe(true);

    pushSpy.mockRestore();
  });

});
