import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

import { createClassNames } from 'utils';
import Button from 'components/Button';
import ProductHit from './ProductHit';

export const cx = createClassNames('products-hits');

export const ProductsHits = ({
  className,
  hits,
  hasMore,
  refine,
  searching,
  productHitComponent: ProductHitComponent
}) => (
  <div className={classnames(cx(''), className)}>
    <ul className={cx('list')}>
      {hits.map(hit => (
        <li key={hit.objectID} className={cx('list-item')}>
          <ProductHitComponent hit={hit} />
        </li>
      ))}
    </ul>
    <Button
      className={cx('load-more')}
      disabled={searching}
      hidden={!hasMore}
      loading={searching}
      onClick={() => refine()}
      secondary
    >
      {searching ? 'Loading...' : 'Load More'}
    </Button>
  </div>
);

ProductsHits.propTypes = {
  productHitComponent: PropTypes.func,
  className: PropTypes.string,
  searching: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
    brand_name: PropTypes.string.isRequired,
    objectID: PropTypes.string.isRequired,
    price: PropTypes.number,
    primary_image_url: PropTypes.string.isRequired,
    product_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }))
};

ProductsHits.defaultProps = {
  productHitComponent: props => <ProductHit {...props} />
};

export default connectInfiniteHits(connectStateResults(ProductsHits));
