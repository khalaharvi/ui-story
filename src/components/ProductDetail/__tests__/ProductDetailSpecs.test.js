import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailSpecs from '../ProductDetailSpecs';

describe('<ProductDetailSpecs />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductDetailSpecs
        specs={[
          {
            name: 'Product Specifications',
            items: [
              {
                name: 'Dimensions',
                value: 'Height: 26.5 in. Diameter: 11″ Base: 13″h'
              },
              {
                name: 'Materials',
                value: 'Bluz'
              }
            ]
          },
          {
            name: 'Vintage Specifications',
            items: [
              {
                name: 'Period',
                value: '1940-1949'
              },
              {
                name: 'Creator',
                value: 'Unknown'
              },
              {
                name: 'Condition',
                value: 'Great'
              }
            ]
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
