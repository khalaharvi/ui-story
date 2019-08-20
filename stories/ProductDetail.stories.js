import React from 'react';
import { storiesOf } from '@storybook/react';

import 'react-image-gallery/styles/css/image-gallery.css';

import ProductDetailTemplate from 'templates/ProductDetail';
import { CommerceModuleTemplate, CommerceModuleMetaTemplate } from 'templates/CommerceModule';
import {
  ProductDetailDescription,
  ProductDetailSpecs,
  ProductDetailAbout,
  ProductDetailGallery,
  ProductDetailSwatches
} from 'components/ProductDetail';
import {
  CommerceModuleHeader,
  CommerceModulePricing,
  CommerceModulePhone
} from 'components/CommerceModule';
import ConversionButtons from 'components/ConversionButtons';
import { withTests } from './utils';

const product = {
  name: 'Acrylic on Canvas',
  brandName: 'Witford',
  price: 3000,
  currency: 'EUR',
  description: `
    <p>
      1940′s black glazed ceramic sphere lamp.<br />
      Dimension below are for the overall lamp – the base has a 11″ diameter, the ball is 13″ diameter and it is 26.5″ high. Lampshade measures 10″ diameter top/13″ slant/18″ diameter bottom. New antique brass hardware and newly rewired. LT0360
    </p>
  `,
  specs: [
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
  ],
  swatches: [
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
  ],
  designer: {
    name: 'Steven Sclaroff',
    image: 'https://cdn.deringhall.com/primary_images/27636/original/27636-interior-designer.jpg?auto=format&amp;h=440&amp;q=60&amp;w=740',
    description: `
      <p>
        “Sclaroff is know for having one of the best—and quirkiest—eyes in the business.” -New York Times Magazine
      </p>
    `
  }
};

storiesOf('Product Detail', module)
  .addDecorator(withTests(
    'ProductDetailGallery',
    'ProductDetailDescription',
    'ProductDetailSpecs',
    'ProductDetailSwatches',
    'ProductDetailAbout',
    'CommerceModuleHeader',
    'CommerceModulePricing',
    'CommerceModulePhone',
    'ConversionButtons'
  ))
  .addWithJSX('default', () => (
    <ProductDetailTemplate>
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
      <ProductDetailDescription description={product.description} />
      <ProductDetailSpecs specs={product.specs} />
      <ProductDetailSwatches items={product.swatches} />
      <ProductDetailAbout
        name={product.designer.name}
        image={product.designer.image}
        description={product.designer.description}
      />
      <CommerceModuleTemplate>
        <CommerceModuleHeader productName={product.name} brandName={product.brandName} />
        <CommerceModuleMetaTemplate>
          <CommerceModulePricing
            price={`$${(product.price).toLocaleString()}`}
            priceRaw={product.price}
            currency="USD"
          />
          <CommerceModulePhone name={product.designer.name} phone="123123123" />
        </CommerceModuleMetaTemplate>
        <ConversionButtons
          buttons={[
            {
              type: 'download'
            },
            {
              type: 'email'
            },
            {
              type: 'print'
            },
            {
              type: 'facebook'
            },
            {
              type: 'pinterest'
            }
          ]}
        />
      </CommerceModuleTemplate>
    </ProductDetailTemplate>
  ));
