import React from 'react';
import { storiesOf } from '@storybook/react';
import { Configure } from 'react-instantsearch/dom';

import NavBar from 'components/NavBar';
import { ListFacetDropdown, ListFacetCheckbox } from 'components/ListFacet';
import SearchAutocomplete from 'components/SearchAutocomplete';
import Link from 'components/Link';
import SearchHeading from 'components/SearchHeading';
import SearchBreadcrumb from 'components/SearchBreadcrumb';
import ProductsHits from 'components/ProductsHits';
import RangeFacet from 'components/RangeFacet';
import SortByFacet from 'components/SortByFacet';
import Panel from 'components/Panel';
import ActiveFacets from 'components/ActiveFacets';
import ClearFacets from 'components/ClearFacets';
import FacetsToggler from 'components/FacetsToggler';
import TogglerFacet from 'components/TogglerFacet';
import {
  FacetsTemplate,
  ProductsSearchTemplate,
  ProductsResultsTemplate,
  SearchResultsHeaderTemplate,
  HeaderTemplate
} from 'templates';
import {
  PRIMARY_CATEGORY_KEY,
  SECONDARY_CATEGORY_KEY,
  TERTIARY_CATEGORY_KEY
} from 'utils/constants';
import {
  SearchStateDebug,
  Wrap,
  WrapThemeProvider,
  MediaQueriesWrapper,
  OnSmallOnly,
  withTests
} from './utils';

const Facets = (
  <FacetsTemplate>
    <OnSmallOnly>
      <TogglerFacet
        defaultLabel="All Products"
        namespace="test1"
        items={[
          { label: 'Vintage', attribute: 'vintage' },
          { label: 'Outdoor', attribute: 'outdoor' }
        ]}
      />
      <SortByFacet
        items={[
          { value: 'Product', label: 'Relevance' },
          { value: 'Product (price ASC)', label: 'Price: Low to High' },
          { value: 'Product (price DESC)', label: 'Price: High to Low' }
        ]}
        defaultRefinement="Product"
      />
    </OnSmallOnly>
    <Panel header="Active Filters" headerAction={<ClearFacets />}>
      <ActiveFacets
        transformItems={items => items.map((item) => {
          if (item.attribute === 'categories.lvl0') {
            item.label = `Category: ${item.currentRefinement}`;
          }

          if (item.attribute === 'price') {
            item.label = `$${item.currentRefinement.min}-$${item.currentRefinement.max}`;
          }

          return item;
        })}
      />
    </Panel>
    <Panel header="Category">
      <ListFacetDropdown
        attributes={[
          'categories.lvl0',
          'categories.lvl1',
          'categories.lvl2'
        ]}
        limit={10}
        rootPath={null}
        separator=" < "
        showMore={false}
        showMoreLimit={20}
        showParentLevel
      />
    </Panel>
    <Panel header="Price">
      <RangeFacet
        attribute="price"
        transformLabel={(min, max) => `$${min.toLocaleString()} - $${max.toLocaleString()}`}
      />
    </Panel>
    <Panel header="Materials">
      <ListFacetCheckbox
        attribute="materials"
        limit={10}
        rootPath={null}
        showMore
        showMoreLimit={20}
      />
    </Panel>
    <Panel header="Styles">
      <ListFacetCheckbox
        attribute="styles"
        limit={10}
        rootPath={null}
        showMore
        showMoreLimit={20}
      />
    </Panel>
  </FacetsTemplate>
);

const SortByDropdown = (
  <SortByFacet
    items={[
      { value: 'Product', label: 'Relevance' },
      { value: 'Product (price ASC)', label: 'Price: Low to High' },
      { value: 'Product (price DESC)', label: 'Price: High to Low' }
    ]}
    defaultRefinement="Product"
  />
);

const ResultsWithoutFacets = (
  <ProductsResultsTemplate>
    <ProductsHits />
  </ProductsResultsTemplate>
);

const ResultsWithLeftFacet = (
  <ProductsResultsTemplate>
    <SearchResultsHeaderTemplate
      leftFacet={
        <TogglerFacet
          namespace="test2"
          defaultLabel="All Products"
          items={[
            { label: 'Vintage', attribute: 'vintage' },
            { label: 'Outdoor', attribute: 'outdoor' }
          ]}
        />
      }
    />
    <ProductsHits />
  </ProductsResultsTemplate>
);

const ResultsWithRightFacet = (
  <ProductsResultsTemplate>
    <SearchResultsHeaderTemplate
      rightFacet={SortByDropdown}
    />
    <ProductsHits />
  </ProductsResultsTemplate>
);

const ResultsWithFacets = (
  <ProductsResultsTemplate>
    <SearchResultsHeaderTemplate
      leftFacet={
        <TogglerFacet
          defaultLabel="All Products"
          items={[
            { label: 'Vintage', attribute: 'vintage' },
            { label: 'Outdoor', attribute: 'outdoor' }
          ]}
        />
      }
      rightFacet={SortByDropdown}
    />
    <ProductsHits />
  </ProductsResultsTemplate>
);

const DefaultNavBar = (
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
    <Configure hitsPerPage={5} />
  </Wrap>
);

const DefaultHeader = (
  <HeaderTemplate
    heading={<SearchHeading defaultHeading="Furnishings" />}
    breadcrumb={
      <SearchBreadcrumb
        attributes={[PRIMARY_CATEGORY_KEY, SECONDARY_CATEGORY_KEY, TERTIARY_CATEGORY_KEY]}
        alwaysShowRoot
      />
    }
  />
);

storiesOf('Products Search', module)
  .addDecorator(withTests(
    'ActiveFacets',
    'ClearFacets',
    'ListFacetCheckbox',
    'ListFacetDropdown',
    'NavBar',
    'Panel',
    'ProductsHits',
    'RangeFacet',
    'SearchAutocomplete',
    'SearchBreadcrumb',
    'SearchHeading',
    'SortByFacet',
    'TogglerFacet'
  ))
  .addWithJSX('default', () => (
    <WrapThemeProvider>
      <MediaQueriesWrapper>
        {DefaultNavBar}
        <Wrap>
          {DefaultHeader}
          <ProductsSearchTemplate
            facets={Facets}
            results={ResultsWithoutFacets}
          />
          <FacetsToggler />
          <Configure hitsPerPage={12} />
          <SearchStateDebug />
        </Wrap>
      </MediaQueriesWrapper>
    </WrapThemeProvider>
  ))
  .addWithJSX('with left facet', () => (
    <WrapThemeProvider>
      <MediaQueriesWrapper>
        {DefaultNavBar}
        <Wrap>
          {DefaultHeader}
          <ProductsSearchTemplate
            facets={Facets}
            results={ResultsWithLeftFacet}
          />
          <FacetsToggler />
          <Configure hitsPerPage={12} />
          <SearchStateDebug />
        </Wrap>
      </MediaQueriesWrapper>
    </WrapThemeProvider>
  ))
  .addWithJSX('with right facet', () => (
    <WrapThemeProvider>
      <MediaQueriesWrapper>
        {DefaultNavBar}
        <Wrap>
          {DefaultHeader}
          <ProductsSearchTemplate
            facets={Facets}
            results={ResultsWithRightFacet}
          />
          <Configure hitsPerPage={12} />
          <SearchStateDebug />
        </Wrap>
      </MediaQueriesWrapper>
    </WrapThemeProvider>
  ))
  .addWithJSX('with both left and right facets', () => (
    <WrapThemeProvider>
      <MediaQueriesWrapper>
        {DefaultNavBar}
        <Wrap>
          {DefaultHeader}
          <ProductsSearchTemplate
            facets={Facets}
            results={ResultsWithFacets}
          />
          <Configure hitsPerPage={12} />
          <SearchStateDebug />
        </Wrap>
      </MediaQueriesWrapper>
    </WrapThemeProvider>
  ));
