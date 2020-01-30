/**
 * Snapshot test for the {@link ../../src/newlifecycle/DerivedFromPropsWrapper} component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import DerivedFromPropsWrapper from '../../src/newlifecycle/DerivedFromPropsWrapper';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<DerivedFromPropsWrapper />).toJSON();
  expect(tree).toMatchSnapshot();
});
