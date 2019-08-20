import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';

import { cx } from './SellerProfile';

const SellerProfileNewsItem = ({ news }) => (
  <Fragment>
    <Image src={news.image} alt={news.title} className={cx('news-image')} />
    <i className={cx('news-type')}>{news.type}</i><br />
    <b className={cx('news-title')}>{news.title}</b>
  </Fragment>
);

SellerProfileNewsItem.propTypes = {
  news: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

export default SellerProfileNewsItem;
