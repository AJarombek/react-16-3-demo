/**
 * Unit tests with Jest and Enzyme for the {@link ../../src/createref/RefSamples} component.
 * @author Andrew Jarombek
 * @since 1/28/2020
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import RefSamples from '../../src/createref/RefSamples';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<RefSamples />);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('lights up the first light bulb on focus', () => {
    const wrapper = mount(<RefSamples />);
    console.info(wrapper.debug());

    const firstButtonSwitch = wrapper.find('.aj-outlined-button').at(0).childAt(0);
    const secondButtonSwitch = wrapper.find('.aj-outlined-button').at(1).childAt(0);
    const thirdButtonSwitch = wrapper.find('.aj-outlined-button').at(2).childAt(0);
    console.info(firstButtonSwitch.debug());

    const callbackRefLightBulb = wrapper.find('.callback-ref-sample').childAt(1).childAt(0);
    const stringRefLightBulb = wrapper.find('.string-ref-sample').childAt(1).childAt(0);
    const createRefLightBulb = wrapper.find('.createref-ref-sample').childAt(1).childAt(0);
    console.info(callbackRefLightBulb.debug());

    // The initial filter value will be empty instead of 'brightness(4)' as defined in CreateRef.css
    // because Jest/Enzyme don't load CSS stylesheets.
    expect(callbackRefLightBulb.getDOMNode().style.filter).toEqual('');

    firstButtonSwitch.simulate('click');

    // Alternative way to get the style value through the DOM API.
    expect(callbackRefLightBulb.getDOMNode().style.getPropertyValue('filter'))
      .toEqual('brightness(5)');

    expect(callbackRefLightBulb.getDOMNode().style.filter).toEqual('brightness(5)');
  });

});
