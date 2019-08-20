import React from 'react';
import { mountWithTheme } from 'utils/testing';

import ListFacetOptions from '../ListFacetOptions';

describe('<ListFacetOptions />', () => {
  it('renders correctly', () => {
    const wrapper = mountWithTheme(
      <ListFacetOptions
        items={[
          { value: 'white', count: 10, label: 'white' },
          { value: 'black', count: 20, label: 'black' }
        ]}
        cx={() => null}
        renderItem={() => null}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const wrapper = mountWithTheme(
      <ListFacetOptions
        items={[
          { value: 'white', count: 10, label: 'white' },
          { value: 'black', count: 20, label: 'black' }
        ]}
        cx={() => null}
        renderItem={() => null}
        className="custom-list-facet-options"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly without refinement', () => {
    const wrapper = mountWithTheme(
      <ListFacetOptions
        items={[
          { value: 'white', count: 10, label: 'white' },
          { value: 'black', count: 20, label: 'black' }
        ]}
        cx={() => null}
        renderItem={() => null}
        canRefine={false}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
