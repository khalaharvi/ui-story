import React from 'react';
import { shallow } from 'enzyme';
import { mountWithTheme } from 'utils/testing';

import FacetsToggler, { defaultToggleClassName } from '../FacetsToggler';

// Create a div in the document to mount into
const div = global.document.createElement('div');
global.document.body.appendChild(div);

describe('<FacetsToggler />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<FacetsToggler />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with a custom className', () => {
    const wrapper = shallow(<FacetsToggler className="custom-classname" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should update its state and <body> classnames when clicked', () => {
    const wrapper = mountWithTheme(<FacetsToggler />, { attachTo: div });

    const button = wrapper.find('button');

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(true);
    expect(wrapper.state()).toEqual({
      visible: true
    });

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(false);
    expect(wrapper.state()).toEqual({
      visible: false
    });

    wrapper.detach();
    wrapper.unmount();
  });

  it('should remove <body> toggle classname on componentWillUnmount', () => {
    const wrapper = mountWithTheme(<FacetsToggler />, { attachTo: div });

    const button = wrapper.find('button');

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(true);
    expect(wrapper.state()).toEqual({
      visible: true
    });

    wrapper.detach();
    wrapper.unmount();

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(false);
  });

  it('should update <body> classnames with custom toggle className when clicked', () => {
    const wrapper = mountWithTheme(
      <FacetsToggler toggleClassName="custom-toggle-classname" />,
      { attachTo: div }
    );

    const button = wrapper.find('button');

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(true);
    expect(document.body.classList.contains('custom-toggle-classname')).toBe(true);

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(false);
    expect(document.body.classList.contains('custom-toggle-classname')).toBe(false);

    wrapper.detach();
    wrapper.unmount();
  });

  it('should remove <body> custom toggle classname on componentWillUnmount', () => {
    const wrapper = mountWithTheme(
      <FacetsToggler toggleClassName="custom-toggle-classname" />,
      { attachTo: div }
    );

    const button = wrapper.find('button');

    button.simulate('click');

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(true);
    expect(document.body.classList.contains('custom-toggle-classname')).toBe(true);

    wrapper.detach();
    wrapper.unmount();

    expect(document.body.classList.contains(defaultToggleClassName)).toBe(false);
    expect(document.body.classList.contains('custom-toggle-classname')).toBe(false);
  });
});
