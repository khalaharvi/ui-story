import React from 'react';
import PropTypes from 'prop-types';
import { connectSortBy } from 'react-instantsearch/connectors';
import { cx as emotionCx } from 'react-emotion';

import { createClassNames } from 'utils';
import Select from 'components/Select';

export const cx = createClassNames('sortby-facet');

export const SortByFacet = ({
  className,
  items,
  currentRefinement,
  refine
}) => (
  <Select
    className={emotionCx(cx(''), className)}
    items={items}
    value={currentRefinement}
    onChange={value => refine(value)}
  />
);

SortByFacet.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired
    })
  ).isRequired,
  currentRefinement: PropTypes.string.isRequired,
  refine: PropTypes.func.isRequired
};

export default connectSortBy(SortByFacet);
