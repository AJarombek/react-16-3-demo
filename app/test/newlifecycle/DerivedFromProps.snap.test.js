/**
 * Snapshot test for the {@link ../../src/newlifecycle/DerivedFromProps} component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import DerivedFromProps from '../../src/newlifecycle/DerivedFromProps';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<DerivedFromProps show={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
