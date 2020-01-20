/**
 * Unit tests with Jest and Enzyme for the {@link ./App} component.
 * @author Andrew Jarombek
 * @since 12/30/2019
 */

import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('unit tests', () => {

    it('renders', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});
