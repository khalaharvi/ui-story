import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import _debounce from 'lodash.debounce';
import Autosuggest from 'react-autosuggest';
import { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import _get from 'lodash.get';

import { createClassNames } from 'utils';
import PlaceAutocompleteSuggestion from './PlaceAutocompleteSuggestion';
import PlaceAutocompleteInput from './PlaceAutocompleteInput';
import {
  INPUT_X_PADDING,
  INPUT_LINE_HEIGHT,
  inputBgColor,
  inputBorderColor,
  inputPlaceholderColor
} from '../Form/FormInput';

export const cx = createClassNames('place-autocomplete');

const getReactAutosuggestClassnames = (theme, error) => ({
  container: css({
    position: 'relative'
  }),
  input: css({
    width: '100%',
    padding: `0 70px 0 ${INPUT_X_PADDING}px`,
    backgroundColor: inputBgColor(theme),
    border: `1px solid ${inputBorderColor(theme, error)}`,
    lineHeight: `${INPUT_LINE_HEIGHT}px`,
    outline: 0,

    '::placeholder': {
      color: inputPlaceholderColor(theme)
    }
  }),
  suggestionsContainer: css({
    position: 'absolute',
    top: '100%',
    left: 0,
    zIndex: 1,
    width: '100%',

    backgroundColor: inputBgColor(theme),
    borderRight: `1px solid ${inputBorderColor(theme)}`,
    borderLeft: `1px solid ${inputBorderColor(theme)}`
  }),
  suggestionsList: css({
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  }),
  suggestion: css({
    padding: `0 ${INPUT_X_PADDING}px`,
    lineHeight: `${INPUT_LINE_HEIGHT + 1}px`,
    borderBottom: `1px solid ${inputBorderColor(theme)}`,
    cursor: 'pointer'
  }),
  suggestionHighlighted: css({
    backgroundColor: _get(theme, 'colors.secondary.beige'),
    color: _get(theme, 'text.primary')
  })
});

class PlaceAutocomplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
      inputValue: props.defaultValue || ''
    };
  }

  componentDidMount() {
    if (!window.google) {
      throw new Error('Google Maps JavaScript API library must be loaded.');
    }

    if (!window.google.maps.places) {
      throw new Error('Google Maps Places library must be loaded.');
    }

    this.autocompleteService = new window.google.maps.places.AutocompleteService();
    this.autocompleteOK = window.google.maps.places.PlacesServiceStatus.OK;
    this.autocompleteNoResults = window.google.maps.places.PlacesServiceStatus.ZERO_RESULTS;

    this.geocoderService = new window.google.maps.Geocoder();
    this.geocoderOK = window.google.maps.GeocoderStatus.OK;
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      places: []
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.fetchPlacesPredictions(value);
  };

  onSuggestionSelected = (event, {
    suggestion,
    suggestionValue,
    suggestionIndex,
    method
  }) => {
    if (method === 'enter') {
      event.preventDefault();
    }

    // Don't allow selection of 'No Results.'
    if (suggestion.placeId === this.autocompleteNoResults) {
      this.setState({ inputValue: '' });

      return;
    }

    const { onPlaceSelected, withoutGeoCoords } = this.props;

    if (onPlaceSelected) {
      if (withoutGeoCoords) {
        onPlaceSelected(event, {
          place: suggestion,
          placeValue: suggestionValue,
          placeIndex: suggestionIndex,
          method
        });
      } else {
        this.getLatLng(suggestion.placeId).then((coordinates) => {
          const place = Object.assign({}, suggestion, {
            _geoloc: coordinates
          });

          onPlaceSelected(event, {
            place,
            placeValue: suggestionValue,
            placeIndex: suggestionIndex,
            method
          });
        });
      }
    }
  };

  onInputChange = (e, { newValue }) => {
    const { onChange } = this.props;

    this.setState({ inputValue: newValue });

    if (onChange) {
      onChange(e);
    }
  };

  onInputReset = (e) => {
    const { onReset } = this.props;

    this.setState({ inputValue: '' });

    if (onReset) {
      onReset(e);
    }
  };

  // Adapted from https://github.com/kenny-hibino/react-places-autocomplete/blob/v6.1.3/src/utils.js
  getLatLng = placeId => new Promise((resolve, reject) => {
    this.geocoderService.geocode({ placeId }, (results, status) => {
      if (status !== this.geocoderOK) {
        reject(status);
      }

      try {
        const latLng = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };

        resolve(latLng);
      } catch (e) {
        reject(e);
      }
    });
  });

  fetchPlacesPredictions = (value) => {
    if (value.length > 0) {
      this.autocompleteService.getPlacePredictions(
        {
          types: ['(cities)'],
          input: value
        },
        this.placesAutocompleteCallback
      );
    }
  };

  placesAutocompleteCallback = (predictions, status) => {
    if (status !== this.autocompleteOK && status !== this.autocompleteNoResults) {
      this.props.onError(status, this.onSuggestionsClearRequested);

      return;
    }

    if (status === this.autocompleteNoResults) {
      this.setState({
        places: [{
          name: 'No results.',
          placeId: this.autocompleteNoResults
        }]
      });

      return;
    }

    this.setState({
      places: predictions.map(p => ({
        name: p.description,
        placeId: p.place_id
      }))
    });
  };

  render() {
    const {
      className,
      placeholder,
      theme,
      id,
      onBlur,
      error
    } = this.props;

    const { inputValue, places } = this.state;

    const reactAutosuggestClassnames = getReactAutosuggestClassnames(theme, error);

    return (
      <div className={classnames(cx(''), className)}>
        <Autosuggest
          ref={(autosuggest) => {
            if (autosuggest !== null) {
              this.input = autosuggest.input;
            }
          }}
          highlightFirstSuggestion
          inputProps={{
            onReset: this.onInputReset,
            canReset: (inputValue !== ''),
            onChange: this.onInputChange,
            onBlur,
            placeholder,
            value: inputValue,
            id
          }}
          getSuggestionValue={place => place.name}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionsFetchRequested={_debounce(this.onSuggestionsFetchRequested, 200)}
          onSuggestionSelected={this.onSuggestionSelected}
          renderInputComponent={PlaceAutocompleteInput}
          renderSuggestion={place => <PlaceAutocompleteSuggestion place={place} />}
          suggestions={places}

          theme={reactAutosuggestClassnames}
          focusInputOnSuggestionClick={false}
        />
      </div>
    );
  }
}

PlaceAutocomplete.propTypes = {
  className: PropTypes.string,
  onError: PropTypes.func,
  onChange: PropTypes.func,
  onPlaceSelected: PropTypes.func,
  onReset: PropTypes.func,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  withoutGeoCoords: PropTypes.bool,
  id: PropTypes.string
};

PlaceAutocomplete.defaultProps = {
  placeholder: 'New York, NY',
  withoutGeoCoords: false,
  onChange: () => {},
  onError: (status, _clearSuggestions) => {
    console.error(
      '[<PlaceAutocomplete />] An error happened when fetching data from Google Maps API.\nPlease check the docs here (https://developers.google.com/maps/documentation/javascript/places#place_details_responses)\nStatus: ',
      status
    );

    _clearSuggestions();
  }
};

export default withTheme(PlaceAutocomplete);
