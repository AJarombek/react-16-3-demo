/**
 * Unit tests with Jest and Enzyme for the {@link ../src/ScrollToTop} component.
 * @author Andrew Jarombek
 * @since 1/31/2019
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import ScrollToTop from '../src/ScrollToTop';

describe('unit tests', () => {

  it('renders', () => {
    const wrapper = shallow(<ScrollToTop/>);
    expect(wrapper.exists()).toBe(true);
  });

});

describe('integration tests', () => {

  it('window.scrollTo() is invoked when the route changes', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/test']}>
        <ScrollToTop>
          <p>Route Component</p>
        </ScrollToTop>
      </MemoryRouter>
    );
    const history = wrapper.instance().history;
    window.scrollTo = jest.fn();

    expect(window.scrollTo).not.toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenCalledTimes(0);

    history.push('/');

    expect(window.scrollTo).toHaveBeenCalled();
    expect(window.scrollTo).toHaveBeenCalledTimes(1);
    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);

    jest.clearAllMocks();
  });

});
