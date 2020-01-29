/**
 * Snapshot test for the {@link ../../src/context/ThemeWithContext} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import ThemeWithContext from '../../src/context/ThemeWithContext';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ThemeWithContext />).toJSON();
  expect(tree).toMatchSnapshot();
});
