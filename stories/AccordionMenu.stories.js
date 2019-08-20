import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import theme from '@dering-hall/dh-theme';
import AccordionMenu from 'components/AccordionMenu';

const accordionMenuItems = [
  {
    render: () => <AccordionMenu.FavoriteButton />
  },
  {
    label: 'Tearsheet',
    items: [
      {
        label: 'Download',
        href: '#',
        attributes: {
          rel: 'nofollow'
        }
      },
      {
        label: 'Print',
        href: '#',
        attributes: {
          rel: 'nofollow'
        }
      }
    ]
  },
  {
    label: 'Share',
    items: [
      {
        label: 'Facebook',
        href: '#'
      },
      {
        label: 'Pinterest',
        href: '#'
      },
      {
        label: 'Copy Link',
        onClick: () => { console.log('copy link cliked'); }
      }
    ]
  }
];

storiesOf('AccordionMenu', module)
  .addWithJSX('default', () => (
    <ThemeProvider theme={theme}>
      <Fragment>
        <AccordionMenu items={accordionMenuItems} />
        <AccordionMenu items={accordionMenuItems} alignRight />
        <AccordionMenu items={accordionMenuItems} small />
        <AccordionMenu items={accordionMenuItems} alignRight small />
      </Fragment>
    </ThemeProvider>
  ));
