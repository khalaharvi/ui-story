import React from 'react';
import { mount, shallow } from 'enzyme';

import { ClearFacets } from '../ClearFacets';

describe('<ClearFacets />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ClearFacets
        items={[{ filter: 1 }]}
        refine={() => null}
        canRefine
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = shallow(
      <ClearFacets
        items={[{ filter: 1 }]}
        refine={() => null}
        canRefine
        className="custom-clear-facets"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('has a disabled mode', () => {
    const wrapper = shallow(
      <ClearFacets
        items={[]}
        refine={() => null}
        canRefine={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should have a disabled mode', () => {
    const wrapper = shallow(
      <ClearFacets
        items={[]}
        refine={() => null}
        canRefine={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should be disabled when there is no filters', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <ClearFacets
        items={[]}
        refine={refine}
        canRefine={false}
      />
    );

    expect(refine.mock.calls).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(refine.mock.calls).toHaveLength(0);
  });

  it('should not be disabled when there are filters', () => {
    const refine = jest.fn();
    const wrapper = mount(
      <ClearFacets
        items={[{ value: 'test', label: 'test: test' }]}
        refine={refine}
        canRefine
      />
    );

    expect(refine.mock.calls).toHaveLength(0);
    wrapper.find('button').simulate('click');
    expect(refine.mock.calls).toHaveLength(1);
  });
});
