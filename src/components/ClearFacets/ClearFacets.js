import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connectCurrentRefinements } from 'react-instantsearch/connectors';

import { createClassNames } from 'utils';

const cx = createClassNames('clear-facets');

export const ClearFacets = ({
  className,
  items,
  canRefine,
  refine
}) => (
  <div className={classnames(cx(''), className)}>
    <button
      className={cx('button', !canRefine && 'button--disabled')}
      onClick={() => refine(items)}
      disabled={!canRefine}
    >
      Clear All
    </button>
  </div>
);

ClearFacets.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  canRefine: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired
};

export default connectCurrentRefinements(ClearFacets);
