/**
 * Snapshot test for the {@link ../../src/newlifecycle/SnapshotBeforeUpdate} component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import SnapshotBeforeUpdate from '../../src/newlifecycle/SnapshotBeforeUpdate';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<SnapshotBeforeUpdate />).toJSON();
  expect(tree).toMatchSnapshot();
});
