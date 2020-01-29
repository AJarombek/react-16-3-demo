/**
 * Snapshot test for the {@link ../../src/forwardref/ForwardRefSample} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import ForwardRefSample from '../../src/forwardref/ForwardRefSample';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ForwardRefSample />).toJSON();
  expect(tree).toMatchSnapshot();
});
