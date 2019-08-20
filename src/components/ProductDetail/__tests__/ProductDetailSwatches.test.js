import React from 'react';
import { shallow } from 'enzyme';

import ProductDetailSwatches from '../ProductDetailSwatches';

describe('<ProductDetailSwatches />', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ProductDetailSwatches
        items={[
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom title', () => {
    const wrapper = shallow(
      <ProductDetailSwatches
        title="Available Swatches"
        items={[
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Satin Brass',
            image: 'https://cdn.deringhall.com/swatch/image/50cdedfe-b5fe-4386-87cd-98c8c6af768c_satin.brass.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Antiqued Bronze',
            image: 'https://cdn.deringhall.com/swatch/image/afaf2371-2e28-45ed-80a1-a35a905328ba_antiqued.bronze.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Nickel',
            image: 'https://cdn.deringhall.com/swatch/image/e2162837-d502-4fcc-91a4-bc8aba8687fb_nickel.jpg?auto=format&h=210&q=60&w=210'
          },
          {
            label: 'Polished Brass',
            image: 'https://cdn.deringhall.com/swatch/image/8461198b-cb91-4d4e-a90b-b79ffd43bb2a_polished.brass.jpg?auto=format&h=210&q=60&w=210'
          }
        ]}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
