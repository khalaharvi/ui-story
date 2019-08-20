import React from 'react';
import { mount, shallow } from 'enzyme';

import { Select } from '../Select';

describe('<Select />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <Select
        onChange={() => null}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        value="index1"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <Select
        onChange={() => null}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        value="index1"
        className="custom-select-classname"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("calls 'onChange' prop on change", () => {
    const onChange = jest.fn();
    const wrapper = mount(
      <Select
        onChange={onChange}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        value="index1"
      />
    );

    const selectedValue = wrapper.find('select');
    expect(selectedValue.find('option')).toHaveLength(4);
    expect(
      selectedValue
        .find('option')
        .first()
        .text()
    ).toBe('index name 1');

    selectedValue
      .find('select')
      .simulate('change', { target: { value: 'index3' } });

    expect(onChange.mock.calls).toHaveLength(1);
    expect(onChange.mock.calls[0][0]).toEqual('index3');
  });

  it('should use value if no label provided', () => {
    const wrapper = mount(
      <Select
        onChange={() => null}
        items={[
          { value: 'index1' },
          { value: 'index2' },
          { value: 'index3' },
          { value: 'index4' }
        ]}
        value="index1"
      />
    );

    const selectedValue = wrapper.find('select');
    expect(selectedValue.find('option')).toHaveLength(4);
    expect(
      selectedValue
        .find('option')
        .first()
        .text()
    ).toBe('index1');
  });
});
