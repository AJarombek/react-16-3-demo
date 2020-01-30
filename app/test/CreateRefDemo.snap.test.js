/**
 * Snapshot test for the {@link ../src/CreateRefDemo} component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import CreateRefDemo from '../src/CreateRefDemo';
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
  const tree = renderer.create(<CreateRefDemo />).toJSON();
  expect(tree).toMatchSnapshot();
});
