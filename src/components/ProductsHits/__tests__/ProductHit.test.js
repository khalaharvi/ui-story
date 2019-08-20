import React from 'react';
import { shallow } from 'enzyme';

import ProductHit from '../ProductHit';

describe('<ProductHit />', () => {
  it('renders correctly', () => {
    const hit = {
      brand_name: 'Brand Name',
      objectID: '12345',
      price: 1000,
      primary_image_url: 'https://placehold.it/270x270',
      product_path: '/product',
      title: 'Product Title'
    };

    const wrapper = shallow(<ProductHit hit={hit} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with transformHitImageUrl', () => {
    const hit = {
      brand_name: 'Brand Name',
      objectID: '12345',
      price: 1000,
      primary_image_url: 'https://placehold.it/270x270',
      product_path: '/product',
      title: 'Product Title'
    };

    const wrapper = shallow(
      <ProductHit
        hit={hit}
        transformHitImageUrl={url => url}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
