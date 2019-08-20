import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './TogglerFacet';

const TogglerFacetItem = ({
  item,
  checked,
  onChange,
  namespace
}) => (
  <li className={cx('list-item')}>
    <input
      id={`${namespace}-${item.attribute}`}
      type="radio"
      name={namespace}
      value={item.attribute}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={`${namespace}-${item.attribute}`}>{item.label}</label>
  </li>
);

TogglerFacetItem.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    attribute: PropTypes.string.isRequired
  }).isRequired,
  checked: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  namespace: PropTypes.string.isRequired
};

export default TogglerFacetItem;
