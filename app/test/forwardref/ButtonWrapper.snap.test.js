/**
 * Snapshot test for the {@link ../../src/forwardref/ButtonWrapper} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import ButtonWrapper from '../../src/forwardref/ButtonWrapper';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<ButtonWrapper>Snapshot Test</ButtonWrapper>).toJSON();
  expect(tree).toMatchSnapshot();
});
