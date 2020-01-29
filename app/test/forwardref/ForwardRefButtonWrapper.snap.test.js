/**
 * Snapshot test for the {@link ../../src/forwardref/ForwardRefButtonWrapper} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import ForwardRefButtonWrapper from '../../src/forwardref/ForwardRefButtonWrapper';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <ForwardRefButtonWrapper>Snapshot Test</ForwardRefButtonWrapper>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
