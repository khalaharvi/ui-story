import React from 'react';
import PropTypes from 'prop-types';
import { connectStateResults } from 'react-instantsearch/connectors';

import {
  PRIMARY_CATEGORY_KEY,
  SECONDARY_CATEGORY_KEY,
  TERTIARY_CATEGORY_KEY
} from 'utils/constants';

const SEARCH_STATE_KEY = 'hierarchicalMenu';

export const SearchHeading = ({ defaultHeading, searchState }) => {
  let heading = '';

  if (searchState &&
      searchState[SEARCH_STATE_KEY] &&
      searchState[SEARCH_STATE_KEY][PRIMARY_CATEGORY_KEY] !== ''
  ) {
    const menu = searchState[SEARCH_STATE_KEY];

    if (menu[TERTIARY_CATEGORY_KEY]) {
      heading = menu[TERTIARY_CATEGORY_KEY];
    }

    if (menu[SECONDARY_CATEGORY_KEY]) {
      heading += menu[SECONDARY_CATEGORY_KEY];
    }

    if (menu[PRIMARY_CATEGORY_KEY]) {
      heading += menu[PRIMARY_CATEGORY_KEY];
    }
  } else {
    heading = defaultHeading;
  }

  heading = heading.split(' < ').pop();

  return <span>{heading}</span>;
};

SearchHeading.propTypes = {
  searchState: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  defaultHeading: PropTypes.string
};

SearchHeading.defaultProps = {
  defaultHeading: 'Search'
};

export default connectStateResults(SearchHeading);
