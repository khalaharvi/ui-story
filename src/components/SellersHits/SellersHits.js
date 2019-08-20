import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connectInfiniteHits, connectStateResults } from 'react-instantsearch/connectors';

import { createClassNames } from 'utils';
import Button from 'components/Button';
import SellerHit from './SellerHit';

export const cx = createClassNames('sellers-hits');

// TO DO: add fallback images
export const SellersHits = ({
  className,
  hits,
  hasMore,
  refine,
  searching,
  sellerHitComponent: SellerHitComponent
}) => (
  <div className={classnames(cx(''), className)}>
    <ul className={cx('list')}>
      {hits.map(hit => (
        <li key={hit.objectID} className={cx('list-item')}>
          <SellerHitComponent hit={hit} />
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

SellersHits.propTypes = {
  sellerHitComponent: PropTypes.func,
  className: PropTypes.string,
  searching: PropTypes.bool.isRequired,
  hasMore: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  hits: PropTypes.arrayOf(PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    seller_types: PropTypes.arrayOf(PropTypes.string).isRequired,
    primary_image_url: PropTypes.string.isRequired
  }))
};


SellersHits.defaultProps = {
  sellerHitComponent: props => <SellerHit {...props} />
};

export default connectInfiniteHits(connectStateResults(SellersHits));
