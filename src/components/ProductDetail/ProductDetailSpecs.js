import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { cx } from './ProductDetail';

const ProductDetailSpecs = ({ specs }) => (
  <div className={classnames(cx('specs'), 'columns')}>
    {
      specs.map(spec => (
        <div className="col" key={spec.name}>
          <h2 className={cx('title')}>{spec.name}</h2>
          <dl>
            {
              spec.items.map(item => (
                <Fragment key={item.name}>
                  <dt>{item.name}</dt>
                  <dd>{item.value}</dd>
                </Fragment>
              ))
            }
          </dl>
        </div>
      ))
    }
  </div>
);

ProductDetailSpecs.propTypes = {
  specs: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })).isRequired
  })).isRequired
};

export default ProductDetailSpecs;
