import React from 'react';
import { storiesOf } from '@storybook/react';

import Breadcrumb from 'components/Breadcrumb';
import { HeaderTemplate } from 'templates';
import { WrapThemeProvider, withTests } from './utils';

storiesOf('Breadcrumb', module)
  .addDecorator(withTests('Breadcrumb'))
  .addWithJSX('default', () => (
    <WrapThemeProvider>
      <HeaderTemplate
        heading="Heading"
        breadcrumb={
          <Breadcrumb
            items={[
              {
                label: 'Item 1',
                href: '/item-1'
              },
              {
                label: 'Item 2',
                href: '/item-2'
              }
            ]}
          />
        }
      />
    </WrapThemeProvider>
  ))
  .addWithJSX('with rootLabel', () => (
    <WrapThemeProvider>
      <HeaderTemplate
        heading="Heading"
        breadcrumb={
          <Breadcrumb
            rootLabel="Homepage"
            items={[
              {
                label: 'Item 1',
                href: '/item-1'
              },
              {
                label: 'Item 2',
                href: '/item-2'
              }
            ]}
          />
        }
      />
    </WrapThemeProvider>
  ))
  .addWithJSX('with rootURL', () => (
    <WrapThemeProvider>
      <HeaderTemplate
        heading="Heading"
        breadcrumb={
          <Breadcrumb
            rootURL="/"
            items={[
              {
                label: 'Item 1',
                href: '/item-1'
              },
              {
                label: 'Item 2',
                href: '/item-2'
              }
            ]}
          />
        }
      />
    </WrapThemeProvider>
  ))
  .addWithJSX('without items', () => (
    <WrapThemeProvider>
      <HeaderTemplate
        heading="Heading"
        breadcrumb={<Breadcrumb />}
      />
    </WrapThemeProvider>
  ));
