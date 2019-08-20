import React from 'react';
import { shallow } from 'enzyme';
import { mountWithTheme } from 'utils/testing';

import { SellersHits } from '../SellersHits';

describe('<SellersHits />', () => {
  it('renders correctly', () => {
    const hits = [
      {
        objectID: '123',
        name: 'Designer Name',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name',
        seller_types: ['architect'],
        primary_type: 'architect'
      }
    ];

    const wrapper = shallow(
      <SellersHits
        refine={() => null}
        hits={hits}
        searching={false}
        hasMore
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with className', () => {
    const hits = [
      {
        objectID: '123',
        name: 'Designer Name',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name',
        seller_types: ['architect'],
        primary_type: 'architect'
      }
    ];

    const wrapper = shallow(
      <SellersHits
        refine={() => null}
        hits={hits}
        searching={false}
        hasMore
        className="custom-products-hits"
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should call refine when the load more button is clicked', () => {
    const refine = jest.fn();
    const hits = [
      {
        objectID: '123',
        name: 'Designer Name',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name',
        seller_types: ['interior-designer'],
        primary_type: 'interior-designer'
      },
      {
        objectID: '456',
        name: 'Designer Name 2',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name-2',
        seller_types: ['architect'],
        primary_type: 'architect'
      },
      {
        objectID: '789',
        name: 'Designer Name 3',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name-3',
        seller_types: ['brand'],
        primary_type: 'brand'
      }
    ];

    const wrapped = mountWithTheme(
      <SellersHits
        hits={hits}
        refine={refine}
        hasMore
        searching={false}
      />
    );

    expect(refine.mock.calls).toHaveLength(0);
    wrapped.find('button').simulate('click');
    expect(refine.mock.calls).toHaveLength(1);
  });

  it('should disable load more button when searching', () => {
    const hits = [
      {
        objectID: '123',
        name: 'Designer Name',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name',
        seller_types: ['architect'],
        primary_type: 'architect'
      }
    ];

    const wrapped = mountWithTheme(
      <SellersHits
        refine={() => null}
        hits={hits}
        searching
        hasMore
      />
    );

    expect(wrapped.find('button').props().disabled).toBe(true);
  });

  it('should hide load more button when it is the last page', () => {
    const hits = [
      {
        objectID: '123',
        name: 'Designer Name',
        primary_image_url: 'https://placehold.it/370x220',
        slug: '/designer-name',
        seller_types: ['architect'],
        primary_type: 'architect'
      }
    ];

    const wrapped = mountWithTheme(
      <SellersHits
        refine={() => null}
        hits={hits}
        hasMore={false}
        searching={false}
      />
    );
    expect(wrapped.find('button').props().hidden).toBe(true);
  });
});
