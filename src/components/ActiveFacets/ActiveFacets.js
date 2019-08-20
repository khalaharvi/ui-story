import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connectCurrentRefinements } from 'react-instantsearch/connectors';

import PanelCallbackHandler from 'components/Panel/PanelCallbackHandler';
import { createClassNames } from 'utils';

const cx = createClassNames('active-facets');

export const ActiveFacets = ({
  className,
  items,
  canRefine,
  refine
}) => (
  <div className={classnames(cx('', !canRefine && '-noRefinement'), className)}>
    <ul className={cx('list', !canRefine && 'list--noRefinement')}>
      {items.map(item => (
        <li key={item.label} className={cx('item')}>
          <span className={item.items ? cx('label') : cx('category')}>
            {item.label}
            {
              item.items ?
                null :
                <button className={cx('delete')} onClick={() => refine(item.value)}>x</button>
            }
          </span>
          {
            item.items ?
              (
                item.items.map(nest => (
                  <span key={nest.label} className={cx('category')}>
                    <span className={cx('categoryLabel')}>{nest.label}</span>
                    <button className={cx('delete')} onClick={() => refine(nest.value)}>x</button>
                  </span>
                ))
              ) :
              null
          }
        </li>
      ))}
    </ul>
  </div>
);

const itemPropTypes = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.func.isRequired,
    items: (...args) => itemPropTypes(...args)
  })
);

ActiveFacets.propTypes = {
  className: PropTypes.string,
  items: itemPropTypes.isRequired,
  canRefine: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired
};

const ActiveFacetsComponent = props => (
  <PanelCallbackHandler {...props}>
    <ActiveFacets {...props} />
  </PanelCallbackHandler>
);

export default connectCurrentRefinements(ActiveFacetsComponent);
