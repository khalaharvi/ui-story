import React from 'react';
import { mountWithTheme } from 'utils/testing';

import { ListFacetDropdown } from '../ListFacetDropdown';

describe('<ListFacetDropdown />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <ListFacetDropdown
        refine={() => null}
        createURL={() => '#'}
        items={[
          {
            value: 'white',
            count: 10,
            label: 'white',
            items: [
              { value: 'white1', label: 'white1', count: 3 },
              { value: 'white2', label: 'white2', count: 4 }
            ]
          },
          { value: 'black', count: 20, label: 'black' },
          { value: 'blue', count: 30, label: 'blue' }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = mountWithTheme(
      <ListFacetDropdown
        refine={() => null}
        createURL={() => '#'}
        items={[
          {
            value: 'white',
            count: 10,
            label: 'white',
            items: [
              { value: 'white1', label: 'white1', count: 3 },
              { value: 'white2', label: 'white2', count: 4 }
            ]
          },
          { value: 'black', count: 20, label: 'black' },
          { value: 'blue', count: 30, label: 'blue' }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine
        className="custom-list-facet-dropdown"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mountWithTheme(
      <ListFacetDropdown
        refine={refine}
        createURL={() => '#'}
        items={[
          {
            value: 'white',
            count: 10,
            label: 'white',
            items: [
              { value: 'white1', label: 'white1', count: 3 },
              { value: 'white2', label: 'white2', count: 4 }
            ]
          },
          { value: 'black', count: 20, label: 'black' },
          { value: 'blue', count: 30, label: 'blue' }
        ]}
        canRefine
      />
    );

    const itemParent = wrapper.find('li.dh-list-facet-option--parent');

    expect(itemParent).toHaveLength(1);

    itemParent
      .find('Link')
      .first()
      .simulate('click');
    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual('white');

    wrapper.unmount();
  });

  it('should respect defined limits', () => {
    const wrapper = mountWithTheme(
      <ListFacetDropdown
        refine={() => null}
        createURL={() => '#'}
        items={[
          { value: 'white', count: 10, label: 'white' },
          { value: 'black', count: 20, label: 'black' },
          { value: 'blue', count: 30, label: 'blue' },
          { value: 'green', count: 30, label: 'green' },
          { value: 'cyan', count: 30, label: 'cyan' }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine
      />
    );

    const items = wrapper.find('li');

    expect(items).toHaveLength(2);

    wrapper.find('button').simulate('click');

    expect(wrapper.find('li')).toHaveLength(4);

    wrapper.unmount();
  });

  it('should disable show more when no more item to display', () => {
    const wrapper = mountWithTheme(
      <ListFacetDropdown
        refine={() => null}
        createURL={() => '#'}
        items={[
          { value: 'white', count: 10, label: 'white' },
          { value: 'black', count: 20, label: 'black' }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine
      />
    );

    const items = wrapper.find('li');

    expect(items).toHaveLength(2);

    expect(wrapper.find('button[disabled]')).toBeDefined();

    wrapper.unmount();
  });
});
