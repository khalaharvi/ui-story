import React from 'react';
import { mount, shallow } from 'enzyme';

import NavBarLogo from '../NavBarLogo';

describe('<NavBarLogo />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<NavBarLogo src="https://placehold.it/125x35" alt="Logo" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a custom element', () => {
    const Logo = () => (<img src="https://placehold.it/125x35" alt="Logo" />);
    const wrapper = shallow(<NavBarLogo logo={<Logo />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should have an <a> when to prop is passed', () => {
    const wrapper = mount(<NavBarLogo src="https://placehold.it/125x35" alt="Logo" to="https://deringhall.com" />);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);

    wrapper.unmount();
  });

  it('should have an <a> with a custom element when to prop is passed', () => {
    const Logo = () => (<img src="https://placehold.it/125x35" alt="Logo" />);
    const wrapper = mount(<NavBarLogo logo={<Logo />} to="https://deringhall.com" />);

    const a = wrapper.find('a');

    expect(a).toHaveLength(1);

    wrapper.unmount();
  });
});
