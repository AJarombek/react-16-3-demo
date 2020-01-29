/**
 * Snapshot test for the {@link ../../src/context/ThemeWithProps} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import ThemeWithProps from '../../src/context/ThemeWithProps';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ThemeWithProps />).toJSON();
  expect(tree).toMatchSnapshot();
});
