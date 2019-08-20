import React from 'react';
import { shallow } from 'enzyme';
import { mountWithTheme } from 'utils/testing';

import { ProductsHits } from '../ProductsHits';

describe('<ProductsHits />', () => {
  it('renders correctly', () => {
    const hits = [
      {
        brand_name: 'Brand Name',
        objectID: '12345',
        price: 1000,
        primary_image_url: 'https://placehold.it/270x270',
        product_path: '/product',
        title: 'Product Title'
      }
    ];

    const wrapper = shallow(
      <ProductsHits
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
        brand_name: 'Brand Name',
        objectID: '12345',
        price: 1000,
        primary_image_url: 'https://placehold.it/270x270',
        product_path: '/product',
        title: 'Product Title'
      }
    ];

    const wrapper = shallow(
      <ProductsHits
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
    const hits = [{
      brand_name: 'Brand Name',
      objectID: '12345',
      price: 1000,
      primary_image_url: 'https://placehold.it/270x270',
      product_path: '/product',
      title: 'Product Title'
    },
    {
      brand_name: 'Brand Name 2',
      objectID: '6789',
      price: 1000,
      primary_image_url: 'https://placehold.it/270x270',
      product_path: '/product-2',
      title: 'Product Title 2'
    },
    {
      brand_name: 'Brand Name 3',
      objectID: '101112',
      price: 1000,
      primary_image_url: 'https://placehold.it/270x270',
      product_path: '/product-3',
      title: 'Product Title 3'
    }];

    const wrapped = mountWithTheme(
      <ProductsHits
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
        brand_name: 'Brand Name',
        objectID: '12345',
        price: 1000,
        primary_image_url: 'https://placehold.it/270x270',
        product_path: '/product',
        title: 'Product Title'
      }
    ];

    const wrapped = mountWithTheme(
      <ProductsHits
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
        brand_name: 'Brand Name',
        objectID: '12345',
        price: 1000,
        primary_image_url: 'https://placehold.it/270x270',
        product_path: '/product',
        title: 'Product Title'
      }
    ];

    const wrapped = mountWithTheme(
      <ProductsHits
        refine={() => null}
        hits={hits}
        hasMore={false}
        searching={false}
      />
    );
    expect(wrapped.find('button').props().hidden).toBe(true);
  });
});
