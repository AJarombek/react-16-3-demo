/**
 * Unit tests with Jest and Enzyme for the {@link ../src/FeaturePage} component.
 * @author Andrew Jarombek
 * @since 1/30/2019
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { useHistory } from 'react-router-dom';
import FeaturePage from '../src/FeaturePage';

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
    const wrapper = shallow(<FeaturePage/>);
    expect(wrapper.exists()).toBe(true);
  });

});
