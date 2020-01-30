/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/newlifecycle/SnapshotBeforeUpdate}
 * component.
 * @author Andrew Jarombek
 * @since 1/29/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import SnapshotBeforeUpdate from '../../src/newlifecycle/SnapshotBeforeUpdate';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<SnapshotBeforeUpdate />);
    expect(wrapper.exists()).toBe(true);
  });

});
