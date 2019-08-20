import React from 'react';
import { mount, shallow } from 'enzyme';

import { SearchBox } from '../SearchBox';

describe('<SearchBox />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchBox refine={() => null} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom classname', () => {
    const wrapper = shallow(<SearchBox refine={() => null} className="my-custom-classname" />);

    expect(wrapper).toMatchSnapshot();
  });

  it('treats its query prop as its input value', () => {
    const wrapper = shallow(
      <SearchBox refine={() => null} currentRefinement="QUERY1" />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.update(
      <SearchBox refine={() => null} currentRefinement="QUERY2" />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.unmount();
  });

  it('should accept `onXXX` events', () => {
    const onSubmit = jest.fn();
    const onReset = jest.fn();

    const inputEventsList = [
      'onChange',
      'onFocus',
      'onBlur',
      'onSelect',
      'onKeyDown',
      'onKeyPress'
    ];

    const inputProps = inputEventsList.reduce(
      (props, prop) => ({ ...props, [prop]: jest.fn() }),
      {}
    );

    const wrapper = mount(
      <SearchBox
        refine={() => null}
        onSubmit={onSubmit}
        onReset={onReset}
        {...inputProps}
      />
    );

    // simulate form events `onReset` && `onSubmit`
    wrapper.find('form').simulate('submit');
    expect(onSubmit).toBeCalled();

    wrapper.find('form').simulate('reset');
    expect(onReset).toBeCalled();

    // simulate input search events
    inputEventsList.forEach((eventName) => {
      wrapper
        .find('input')
        .simulate(eventName.replace(/^on/, '').toLowerCase());

      expect(inputProps[eventName]).toBeCalled();
    });

    wrapper.unmount();
  });

  it('should clear the query when the form is reset', () => {
    const refine = jest.fn();

    const wrapper = mount(<SearchBox refine={refine} />);

    // Simulate the ref
    wrapper.instance().input = { focus: jest.fn() };

    wrapper.find('form').simulate('reset');

    expect(refine).toHaveBeenCalledWith('');
    expect(wrapper.instance().input.focus).toHaveBeenCalled();

    wrapper.unmount();
  });
});
