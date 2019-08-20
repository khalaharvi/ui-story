import React from 'react';
import { mount, shallow } from 'enzyme';

import { TogglerFacet } from '../TogglerFacet';

describe('<TogglerFacet />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <TogglerFacet
        refine={() => null}
        items={[
          { attribute: 'vintage', label: 'Vintage' },
          { attribute: 'outdoor', label: 'Outdoor' }
        ]}
        currentRefinement="vintage"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <TogglerFacet
        refine={() => null}
        items={[
          { attribute: 'vintage', label: 'Vintage' },
          { attribute: 'outdoor', label: 'Outdoor' }
        ]}
        currentRefinement="vintage"
        className="custom-classname"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <TogglerFacet
        refine={refine}
        items={[
          { attribute: 'vintage', label: 'Vintage' },
          { attribute: 'outdoor', label: 'Outdoor' }
        ]}
        currentRefinement="vintage"
      />
    );

    const selectedValue = wrapper.find('ul');
    expect(selectedValue.find('li')).toHaveLength(2);
    expect(
      selectedValue
        .find('label')
        .first()
        .text()
    ).toBe('Vintage');

    selectedValue
      .find('input[type="radio"]')
      .last()
      .simulate('change', { target: { value: 'outdoor' } });

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual('outdoor');

    wrapper.unmount();
  });

  it('should only have one item checked', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <TogglerFacet
        refine={refine}
        items={[
          { attribute: 'vintage', label: 'Vintage' },
          { attribute: 'outdoor', label: 'Outdoor' }
        ]}
        currentRefinement="vintage"
      />
    );

    const inputs = wrapper.find('input[type="radio"]');
    expect(inputs).toHaveLength(2);

    expect(inputs.first().is('[checked]')).toBe(true);
    expect(inputs.last().is('[checked]')).toBe(false);

    wrapper.unmount();
  });
});
