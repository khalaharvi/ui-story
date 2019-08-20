import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import connectGeoSearch from 'connectors/connectGeoSearch';
import PlaceAutocomplete from 'components/PlaceAutocomplete';

import { createClassNames } from 'utils';

const cx = createClassNames('geosearch');

export const GeoSearch = ({
  // isRefined,
  currentRefinement,
  refine,

  radiuses,
  className
}) => {
  const {
    lat,
    lng,
    name,
    radius
  } = currentRefinement;
  const disabledRadius = (!lat || !lng);

  return (
    <div className={classnames(cx(''), className)}>
      <div className={classnames(cx('select'), { [cx('select--disabled')]: disabledRadius })}>
        <select
          value={radius}
          onChange={e => refine({ lat, lng }, name, e.target.value)}
          disabled={disabledRadius}
        >
          <option value={0}>Distance</option>
          {
            radiuses.map(({ value, label }) => (
              <option key={`geosearch-radius-${value}`} value={value}>{label}</option>
            ))
          }
        </select>
      </div>
      <PlaceAutocomplete
        className={cx('autocomplete')}
        onReset={() => refine(null, null, null)}
        placeholder="Current Location"
        defaultValue={name}
        onPlaceSelected={(event, { place }) => {
          refine(place._geoloc, place.name, radius); // eslint-disable-line no-underscore-dangle
        }}
      />
    </div>
  );
};

GeoSearch.propTypes = {
  // isRefined: PropTypes.bool,
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.shape({
    lat: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    lng: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    radius: PropTypes.number
  }),
  radiuses: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired
  })),
  className: PropTypes.string
};

GeoSearch.defaultProps = {
  currentRefinement: {},
  radiuses: [{
    label: 'Within 10 miles',
    value: 10
  },
  {
    label: 'Within 25 miles',
    value: 25
  }]
};

export default connectGeoSearch(GeoSearch);
