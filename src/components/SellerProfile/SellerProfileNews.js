import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RelatedModuleTemplate from 'templates/RelatedModule';

import SellerProfileNewsItem from './SellerProfileNewsItem';
import { cx } from './SellerProfile';

const SellerProfileNews = ({ news, newsComponent: NewsComponent }) => (
  <RelatedModuleTemplate className={cx('news')} title="News">
    <ul className="columns columns--4x">
      {
        news.map(n => (
          <li key={n.id} className={classnames('col', cx('news-item'))}>
            <NewsComponent news={n} />
          </li>
        ))
      }
    </ul>
  </RelatedModuleTemplate>
);

SellerProfileNews.propTypes = {
  newsComponent: PropTypes.func,
  news: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  })).isRequired
};

SellerProfileNews.defaultProps = {
  newsComponent: props => <SellerProfileNewsItem {...props} />
};

export default SellerProfileNews;
