import React from 'react';
import { storiesOf } from '@storybook/react';
import { Configure } from 'react-instantsearch/dom';

import NavBar from 'components/NavBar';
import SearchAutocomplete from 'components/SearchAutocomplete';
import Link from 'components/Link';
import SellersHits from 'components/SellersHits';
import SearchHeading from 'components/SearchHeading';
import Breadcrumb from 'components/Breadcrumb';
import SectionNav from 'components/SectionNav';
import {
  SellersSearchTemplate,
  SellersResultsTemplate,
  HeaderTemplate,
  SearchResultsHeaderTemplate
} from 'templates';

import withGoogleMapScript from 'hocs/withGoogleMapScript';
import GeoSearch from 'components/GeoSearch';

import {
  SearchStateDebug,
  Wrap,
  WrapThemeProvider,
  withTests
} from './utils';

const gapiURL = `https://maps.googleapis.com/maps/api/js?key=${process.env.GMAP_API_KEY}&libraries=places`;

const GeoSearchWithGoogleMapScript = withGoogleMapScript(GeoSearch);

const DefaultNavBar = (
  <WrapThemeProvider>
    <Wrap index={process.env.ALGOLIA_SELLER_INDEX}>
      <NavBar
        logo={{ src: 'https://placehold.it/259x28', alt: 'Logo' }}
        searchInputComponent={() => (
          <SearchAutocomplete
            getHitValue={hit => hit.name}
            hitTitleKey="name"
            placeholder="Search designers..."
          />
        )}
      >
        <Link to="https://deringhall.com">Item 1</Link>
        <Link to="https://deringhall.com">Item 2</Link>
        <Link to="https://deringhall.com">Item 3</Link>
      </NavBar>
      <Configure hitsPerPage={5} />
    </Wrap>
  </WrapThemeProvider>
);

storiesOf('Sellers Search', module)
  .addDecorator(withTests(
    'Breadcrumb',
    'NavBar',
    'SearchHeading',
    'SectionNav',
    'SellersHits',
    'withGoogleMapScript'
  ))
  .addWithJSX('default', () => (
    <WrapThemeProvider>
      {DefaultNavBar}
      <Wrap index={process.env.ALGOLIA_SELLER_INDEX}>
        <HeaderTemplate
          heading={<SearchHeading defaultHeading="Professionals" />}
          breadcrumb={<Breadcrumb />}
        />
        <SectionNav>
          <a className="dh-section-nav-link dh-section-nav-link--active" href="/">Featured Professionals</a>
          <a className="dh-section-nav-link" href="/">Interior Designer</a>
          <a className="dh-section-nav-link" href="/">Architect</a>
          <a className="dh-section-nav-link" href="/">Landscape Designer</a>
          <a className="dh-section-nav-link" href="/">Specialty Artisan</a>
        </SectionNav>
        <SellersSearchTemplate
          results={
            <SellersResultsTemplate>
              <SearchResultsHeaderTemplate
                className="dh-sellers-results-header"
                leftFacet={
                  <GeoSearchWithGoogleMapScript
                    googleMapURL={gapiURL}
                    loadingElement={<span>Loading...</span>}
                  />
                }
              />
              <SellersHits />
            </SellersResultsTemplate>
          }
        />
        <Configure hitsPerPage={12} />
        <SearchStateDebug />
      </Wrap>
    </WrapThemeProvider>
  ));
