import React from 'react';
import { storiesOf } from '@storybook/react';

import withGoogleMapScript from 'hocs/withGoogleMapScript';
import PlaceAutocomplete from 'components/PlaceAutocomplete';
import { FormGroup, FormLabel } from 'components/Form';
import { WrapThemeProvider, withTests } from './utils';

const PlaceAutocompleteWithGoogleMapScript = withGoogleMapScript(
  process.env.GMAP_API_KEY,
  ['places']
)(PlaceAutocomplete);

storiesOf('PlacesAutcomplete', module)
  .addDecorator(withTests('PlaceAutocomplete'))
  .addWithJSX('default', () => (
    <WrapThemeProvider>
      <PlaceAutocompleteWithGoogleMapScript
        loadingElement={<span>Loading...</span>}
        placeholder="From..."
        onPlaceSelected={(e, { place }) => {
          console.log('onPlaceSelected', place);
        }}
      />
    </WrapThemeProvider>
  ))
  .addWithJSX('withoutGeoCoords', () => (
    <WrapThemeProvider>
      <PlaceAutocompleteWithGoogleMapScript
        loadingElement={<span>Loading...</span>}
        placeholder="From..."
        onPlaceSelected={(e, { place }) => {
          console.log('onPlaceSelected', place.name);
        }}
        withoutGeoCoords
      />
    </WrapThemeProvider>
  ))
  .addWithJSX('with <FormGroup />', () => (
    <WrapThemeProvider>
      <FormGroup>
        <FormLabel htmlFor="location">Location</FormLabel>
        <PlaceAutocompleteWithGoogleMapScript
          loadingElement={<span>Loading...</span>}
          placeholder="From..."
          onPlaceSelected={(e, { place }) => {
            console.log('onPlaceSelected', place.name);
          }}
          withoutGeoCoords
          id="location"
        />
      </FormGroup>
    </WrapThemeProvider>
  ));
