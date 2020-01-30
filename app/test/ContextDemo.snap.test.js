/**
 * Snapshot test for the {@link ../src/StrictModeComponent} component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import ContextDemo from '../src/ContextDemo';
import renderer from 'react-test-renderer';

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
  const tree = renderer.create(<ContextDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
