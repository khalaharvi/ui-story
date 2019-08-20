import React from 'react';
import { mount } from 'enzyme';
import { mountWithTheme } from 'utils/testing';
import theme from '@dering-hall/dh-theme';

import Button from '../Button';

describe('<Button />', () => {
  it('renders correctly as primary', () => {
    const wrapper = mount(<Button theme={theme} primary>Primary Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly as primary and inverted', () => {
    const wrapper = mount(<Button theme={theme} primary inverted>Primary Inverted Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = mount(
      <Button theme={theme} primary className="my-btn">
        Primary Button with custom className
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when disabled', () => {
    const wrapper = mount(
      <Button theme={theme} primary disabled>
        Disabled Primary Button
      </Button>
    );

    expect(
      wrapper
        .find('button')
        .prop('disabled')
    ).toBe(true);
    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should be disabled when loading', () => {
    const wrapper = mount(
      <Button theme={theme} primary loading>Primary Button Loading...</Button>
    );

    expect(
      wrapper
        .find('button')
        .prop('disabled')
    ).toBe(true);

    wrapper.unmount();
  });

  it('renders correctly when hidden', () => {
    const wrapper = mount(
      <Button theme={theme} primary hidden>Primary Button Hidden</Button>
    );

    expect(
      wrapper
        .find('button')
        .prop('hidden')
    ).toBe(true);

    wrapper.unmount();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(
      <Button theme={theme} primary onClick={onClick}>Primary Button</Button>
    );

    const button = wrapper.find('button');

    button.simulate('click');

    expect(onClick.mock.calls).toHaveLength(1);

    wrapper.unmount();
  });

  it('can use theme from a ThemeProvider', () => {
    const wrapper = mountWithTheme(<Button primary>Themed using ThemeProvider</Button>);

    expect(wrapper).toMatchSnapshot();
  });
});
