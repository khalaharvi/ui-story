import React from 'react';
import { mountWithTheme } from 'utils/testing';

import { ListFacetCheckbox } from '../ListFacetCheckbox';

describe('<ListFacetCheckbox />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <ListFacetCheckbox
        refine={() => null}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          }
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
      <ListFacetCheckbox
        refine={() => null}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine
        className="custom-list-facet-checkbox"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without refinement', () => {
    const wrapper = mountWithTheme(
      <ListFacetCheckbox
        refine={() => null}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          }
        ]}
        limit={2}
        showMoreLimit={4}
        showMore
        canRefine={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('refines its value on change', () => {
    const refine = jest.fn();
    const wrapper = mountWithTheme(
      <ListFacetCheckbox
        refine={refine}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          }
        ]}
        canRefine={false}
      />
    );

    const items = wrapper.find('li');

    expect(items).toHaveLength(3);

    const firstItem = items.first().find('input[type="checkbox"]');

    firstItem.simulate('change', { target: { checked: true } });

    expect(refine.mock.calls).toHaveLength(1);
    expect(refine.mock.calls[0][0]).toEqual(['white']);

    wrapper.unmount();
  });

  it('should respect defined limits', () => {
    const wrapper = mountWithTheme(
      <ListFacetCheckbox
        refine={() => null}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          },
          {
            label: 'red',
            value: ['red'],
            count: 30,
            isRefined: false
          },
          {
            label: 'green',
            value: ['green'],
            count: 30,
            isRefined: false
          }
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
      <ListFacetCheckbox
        refine={() => null}
        items={[
          {
            label: 'white',
            value: ['white'],
            count: 10,
            isRefined: true
          },
          {
            label: 'black',
            value: ['black'],
            count: 20,
            isRefined: false
          },
          {
            label: 'blue',
            value: ['blue'],
            count: 30,
            isRefined: false
          }
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
