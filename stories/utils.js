/* eslint-disable import/prefer-default-export */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { InstantSearch } from 'react-instantsearch/dom';
import { connectStateResults } from 'react-instantsearch/connectors';
import { withMedia, MediaQueryProvider } from 'react-media-query-hoc';
import { withTests as withTestsAddon } from '@storybook/addon-jest';
import { ThemeProvider } from 'emotion-theming';
import dhTheme from '@dering-hall/dh-theme';
import testsResults from '../.jest-test-results.json';

const Wrap = ({ index, children }) => (
  <InstantSearch
    appId={process.env.ALGOLIA_ID}
    apiKey={process.env.ALGOLIA_API_KEY}
    indexName={index}
  >
    {children}
  </InstantSearch>
);

Wrap.propTypes = {
  index: PropTypes.string,
  children: PropTypes.node
};

Wrap.defaultProps = {
  index: process.env.ALGOLIA_PRODUCT_INDEX
};

const WrapThemeProvider = ({ children, theme }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      {children}
    </Fragment>
  </ThemeProvider>
);

WrapThemeProvider.propTypes = {
  theme: PropTypes.object // eslint-disable-line
};

WrapThemeProvider.defaultProps = {
  theme: dhTheme
};

const SearchStateDebug = connectStateResults(({ searchState }) => (
  <div style={{ margin: '1rem 0', fontFamily: 'monospace' }}>
    <pre
      style={{
        background: '#f6f8fa',
        fontSize: '.65rem',
        padding: '.5rem'
      }}
    >
      <strong>searchState</strong> = {JSON.stringify(searchState, null, '\t')}
    </pre>
  </div>
));

const customQueries = {
  small: 'screen and (max-width: 730px)',
  medium: 'screen and (max-width: 970px)',
  large: 'screen and (max-width: 1240px)',
  xlarge: 'screen and (min-width: 1240px)'
};

const MediaQueriesWrapper = ({ children }) => (
  <MediaQueryProvider queries={customQueries}>
    {children}
  </MediaQueryProvider>
);

const OnSmallOnly = withMedia(({ media, children }) => {
  if (!media.small) {
    return null;
  }

  return (
    <Fragment>
      {children}
    </Fragment>
  );
});

const withTests = withTestsAddon({
  results: testsResults
});

export {
  SearchStateDebug,
  MediaQueriesWrapper,
  OnSmallOnly,
  Wrap,
  WrapThemeProvider,
  withTests
};
/* eslint-enable */
