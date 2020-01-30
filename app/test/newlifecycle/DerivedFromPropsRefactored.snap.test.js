/**
 * Snapshot test for the {@link ../../src/newlifecycle/DerivedFromPropsRefactored} component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import DerivedFromPropsRefactored from '../../src/newlifecycle/DerivedFromPropsRefactored';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<DerivedFromPropsRefactored show={true}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
