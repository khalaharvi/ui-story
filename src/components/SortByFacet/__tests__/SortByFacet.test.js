import React from 'react';
import { mount, shallow } from 'enzyme';

import { SortByFacet } from '../SortByFacet';

describe('<SortByFacet />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <SortByFacet
        refine={() => null}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        currentRefinement="index1"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <SortByFacet
        refine={() => null}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        currentRefinement="index1"
        className="custom-sortby-facet"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <SortByFacet
        refine={refine}
        items={[
          { value: 'index1', label: 'index name 1' },
          { value: 'index2', label: 'index name 2' },
          { value: 'index3', label: 'index name 3' },
          { value: 'index4', label: 'index name 4' }
        ]}
        currentRefinement="index1"
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

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual('index3');
  });

  it('should use value if no label provided', () => {
    const wrapper = mount(
      <SortByFacet
        refine={() => null}
        items={[
          { value: 'index1' },
          { value: 'index2' },
          { value: 'index3' },
          { value: 'index4' }
        ]}
        currentRefinement="index1"
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
