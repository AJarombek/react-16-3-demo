/**
 * Snapshot test for the {@link ../src/FeaturePage} component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import renderer from 'react-test-renderer';
import FeaturePage from '../src/FeaturePage';

jest.mock('react-router-dom', () => {
  const historyObj = {
    push: jest.fn()
  };

  return {
    ...jest.requireActual('react-router-dom'),
    useHistory: () => historyObj
  }
});

it('renders correctly', () => {
  const tree = renderer.create(<FeaturePage />).toJSON();
  expect(tree).toMatchSnapshot();
});
