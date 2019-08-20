import React from 'react';
import { mount, shallow } from 'enzyme';

import TogglerFacetItem from '../TogglerFacetItem';

describe('<TogglerFacetItem />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TogglerFacetItem
        namespace="dh-toggler"
        onChange={() => null}
        checked="checked"
        item={{ attribute: 'vintage', label: 'Vintage' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when not checked', () => {
    const wrapper = shallow(
      <TogglerFacetItem
        namespace="dh-toggler"
        onChange={() => null}
        item={{ attribute: 'vintage', label: 'Vintage' }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should onChange when changed', () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <TogglerFacetItem
        namespace="dh-toggler"
        onChange={onChange}
        item={{ attribute: 'vintage', label: 'Vintage' }}
      />
    );

    const item = wrapper.find('li');
    expect(
      item
        .find('label')
        .text()
    ).toBe('Vintage');

    item
      .find('input[type="radio"]')
      .simulate('change', { target: { value: 'vintage' } });

    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0][0].target.value).toEqual('vintage');

    wrapper.unmount();
  });
});
