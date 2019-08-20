import React from 'react';
import { storiesOf } from '@storybook/react';

import ConversionButtons from 'components/ConversionButtons';
import { withTests } from './utils';

storiesOf('Conversion Buttons', module)
  .addDecorator(withTests('ConversionButtons'))
  .addWithJSX('default', () => (
    <ConversionButtons
      buttons={[
        {
          type: 'facebook'
        },
        {
          type: 'pinterest'
        },
        {
          type: 'twitter'
        },
        {
          type: 'print'
        },
        {
          type: 'email'
        },
        {
          type: 'download'
        }
      ]}
    />
  ))
  .addWithJSX('with click handlers', () => (
    <ConversionButtons
      buttons={[
        {
          type: 'facebook',
          onClick: e => console.log('Facebook clicked!', e)
        },
        {
          type: 'pinterest',
          onClick: e => console.log('Pinterest clicked!', e)
        },
        {
          type: 'twitter',
          onClick: e => console.log('Twitter clicked!', e)
        }
      ]}
    />
  ))
  .addWithJSX('as links', () => (
    <ConversionButtons
      buttons={[
        {
          type: 'facebook',
          url: '#'
        },
        {
          type: 'pinterest',
          url: '#'
        },
        {
          type: 'twitter',
          url: '#'
        }
      ]}
    />
  ))
  .addWithJSX('with custom data attributes', () => (
    <ConversionButtons
      buttons={[
        {
          type: 'facebook',
          attributes: {
            'data-test': 'facebook'
          }
        },
        {
          type: 'pinterest',
          attributes: {
            'data-test': 'pinterest'
          }
        },
        {
          type: 'twitter',
          attributes: {
            'data-test': 'twitter'
          }
        }
      ]}
    />
  ));
