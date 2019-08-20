import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const PlaceName = styled('span')({
  overflow: 'hidden',
  display: 'block',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
});

const PlaceAutocompleteSuggestion = ({ place }) => (
  <div><PlaceName>{place.name}</PlaceName></div>
);

PlaceAutocompleteSuggestion.propTypes = {
  place: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
};

export default PlaceAutocompleteSuggestion;
