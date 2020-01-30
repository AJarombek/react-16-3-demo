/**
 * Snapshot test for the {@link ../../src/strictmode/StrictModeComponent} component.
 * @author Andrew Jarombek
 * @since 1/30/2020
 */

import React from 'react';
import StrictModeComponent from '../../src/strictmode/StrictModeComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<StrictModeComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
