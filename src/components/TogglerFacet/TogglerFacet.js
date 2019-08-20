import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';
import TogglerFacetItem from './TogglerFacetItem';
import connectToggler from '../../connectors/connectToggler';

export const cx = createClassNames('toggler-facet');

export const TogglerFacet = ({
  items,
  refine,
  currentRefinement,
  className,
  namespace
}) => (
  <div className={classnames(cx(''), className)}>

    <ul className={cx('list')}>
      {
        items.map(item => (
          <TogglerFacetItem
            namespace={namespace}
            key={`${namespace}-${item.attribute}`}
            item={item}
            checked={currentRefinement === item.attribute ? 'checked' : undefined}
            onChange={(e) => { refine(e.target.value); }}
          />
        ))
      }
    </ul>
  </div>
);

TogglerFacet.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    attribute: PropTypes.string
  })).isRequired,
  refine: PropTypes.func.isRequired,
  currentRefinement: PropTypes.string.isRequired,
  namespace: PropTypes.string
};

TogglerFacet.defaultProps = {
  namespace: 'dh-toggler'
};

export default connectToggler(TogglerFacet);
