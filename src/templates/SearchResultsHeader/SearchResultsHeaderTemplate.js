import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('search-results-header');

const SearchResultsHeaderTemplate = ({ className, leftFacet, rightFacet }) => (
  <header className={classnames(cx(''), className)}>
    {leftFacet && <div className={cx('left-facet')}>{leftFacet}</div>}
    {rightFacet && <div className={cx('right-facet')}>{rightFacet}</div>}
  </header>
);

SearchResultsHeaderTemplate.propTypes = {
  leftFacet: PropTypes.node,
  rightFacet: PropTypes.node
};

export default SearchResultsHeaderTemplate;
