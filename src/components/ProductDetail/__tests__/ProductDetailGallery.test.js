import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailGallery from '../ProductDetailGallery';

describe('<ProductDetailGallery />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductDetailGallery
        images={[
          {
            original: 'https://placehold.it/600x600',
            thumbnail: 'https://placehold.it/100x100'
          },
          {
            original: 'https://placehold.it/600x600',
            thumbnail: 'https://placehold.it/100x100'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
