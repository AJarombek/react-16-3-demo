/**
 * Unit tests with Jest and Enzyme for the {@link ./App} component.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App';

// Mock react router's useHistory() hook before the tests execute.
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls React Router push() when clicking on the Context card', () => {
    const pushSpy = jest.spyOn(history, 'push');

    const wrapper = shallow(<App/>);
    expect(wrapper.exists()).toBe(true);

    pushSpy.mockRestore();
  });

});
