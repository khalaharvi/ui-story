import React from 'react';
import { storiesOf } from '@storybook/react';
import { Index } from 'react-instantsearch/dom';

import SearchAutocomplete from 'components/SearchAutocomplete';
import SearchAutocompleteHit from 'components/SearchAutocomplete/SearchAutocompleteHit';
import { withTests, Wrap } from './utils';

const DefaultSearchAutocomplete = ({ getHitValue, hitTitleKey, ...props }) => (
  <SearchAutocomplete
    getHitValue={getHitValue || (hit => hit.title)}
    hitTitleKey={hitTitleKey || 'title'}
    {...props}
  />
);

storiesOf('SearchAutocomplete', module)
  .addDecorator(withTests(
    'SearchAutocomplete',
    'SearchAutocompleteHit'
  ))
  .addWithJSX('default', () => (
    <Wrap>
      <DefaultSearchAutocomplete />
    </Wrap>
  ))
  .addWithJSX('with image', () => (
    <Wrap>
      <DefaultSearchAutocomplete hitImageKey="primary_image_url" />
    </Wrap>
  ))
  .addWithJSX('with custom placeholder', () => (
    <Wrap>
      <DefaultSearchAutocomplete placeholder="Search products..." />
    </Wrap>
  ))
  .addWithJSX('with first suggestion highlighted', () => (
    <Wrap>
      <DefaultSearchAutocomplete highlightFirstSuggestion />
    </Wrap>
  ))
  .addWithJSX('with transformHit', () => (
    <Wrap>
      <DefaultSearchAutocomplete
        hitImageKey="primary_image_url"
        transformHit={hit => Object.keys(hit).reduce((acc, key) => {
          acc[key] = (key === 'primary_image_url') ? 'https://placehold.it/50x50' : hit[key];

          return acc;
        }, {})}
      />
    </Wrap>
  ))
  .addWithJSX('with onHitSelected', () => (
    <Wrap>
      <DefaultSearchAutocomplete
        onHitSelected={(event, params) => console.log('onHitSelected', event, params)}
      />
    </Wrap>
  ))
  .addWithJSX('with onSubmit', () => (
    <Wrap>
      <DefaultSearchAutocomplete
        onSubmit={value => console.log('onSubmit', value)}
      />
    </Wrap>
  ))
  .addWithJSX('with sections', () => (
    <Wrap>
      <DefaultSearchAutocomplete
        multiSection
        renderSectionTitle={section => (section.hits.length > 0 ? section.index : null)}
        getHitValue={hit => hit.title || hit.name}
        renderHit={hit => (
          <SearchAutocompleteHit
            hit={hit}
            hitTitleKey={['title', 'name']}
            hitImageKey="image"
          />
        )}
      />
      <Index indexName={process.env.ALGOLIA_SECONDARY_INDEX} />
    </Wrap>
  ))
  .addWithJSX('with sections and images', () => (
    <Wrap>
      <DefaultSearchAutocomplete
        multiSection
        renderSectionTitle={section => (section.hits.length > 0 ? section.index : null)}
        getHitValue={hit => hit.title || hit.name}
        renderHit={hit => (
          <SearchAutocompleteHit
            hit={hit}
            hitTitleKey={['title', 'name']}
            hitImageKey="primary_image_url"
          />
        )}
      />
      <Index indexName={process.env.ALGOLIA_SECONDARY_INDEX} />
    </Wrap>
  ));
