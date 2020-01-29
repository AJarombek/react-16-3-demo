/**
 * Snapshot test for the {@link ../../src/createref/RefSamples} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import RefSamples from '../../src/createref/RefSamples';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<RefSamples />).toJSON();
  expect(tree).toMatchSnapshot();
});
