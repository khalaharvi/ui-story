import React from 'react';
import { storiesOf } from '@storybook/react';
import { Configure } from 'react-instantsearch/dom';

import NavBar from 'components/NavBar';
import SearchAutocomplete from 'components/SearchAutocomplete';
import Link from 'components/Link';
import { Wrap, withTests } from './utils';

storiesOf('NavBar', module)
  .addDecorator(withTests('NavBar'))
  .addWithJSX('default', () => (
    <Wrap>
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        searchInputComponent={() => (
          <SearchAutocomplete
            getHitValue={hit => hit.title}
            hitTitleKey="title"
            hitImageKey="primary_image_url"
            placeholder="Search products..."
          />
        )}
      >
        <Link to="https://deringhall.com">Item 1</Link>
        <Link to="https://deringhall.com">Item 2</Link>
        <Link to="https://deringhall.com">Item 3</Link>
      </NavBar>
      <NavBar
        poweredBy={false}
        mobile
        searchInputComponent={({ inputRef }) => (
          <SearchAutocomplete
            getHitValue={hit => hit.title}
            hitTitleKey="title"
            hitImageKey="primary_image_url"
            placeholder="Search products..."
            inputRef={inputRef}
          />
        )}
      >
        <Link to="https://deringhall.com">Item 1</Link>
        <Link to="https://deringhall.com">Item 2</Link>
        <Link to="https://deringhall.com">Item 3</Link>
      </NavBar>
      <Configure hitsPerPage={5} />
    </Wrap>
  ))
  .addWithJSX('default with custom logo element', () => (
    <Wrap>
      <NavBar
        logo={<img src="https://placehold.it/259x28" alt="Logo" />}
        searchInputComponent={() => (
          <SearchAutocomplete
            getHitValue={hit => hit.title}
            hitTitleKey="title"
            placeholder="Search products..."
          />
        )}
      />
    </Wrap>
  ))
  .addWithJSX('with a link on logo', () => (
    <Wrap>
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        logoLinkTo="https://deringhall.com"
        searchInputComponent={() => (
          <SearchAutocomplete
            getHitValue={hit => hit.title}
            hitTitleKey="title"
            placeholder="Search products..."
          />
        )}
      />
    </Wrap>
  ));
