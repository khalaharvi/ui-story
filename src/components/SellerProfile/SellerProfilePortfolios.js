import React from 'react';
import PropTypes from 'prop-types';

import RelatedModuleTemplate from 'templates/RelatedModule';
import SellerProfilePortfolio from './SellerProfilePortfolio';
import { cx } from './SellerProfile';

const SellerProfilePortfolios = ({ portfolios, portfolioComponent: PortfolioComponent }) => (
  <RelatedModuleTemplate className={cx('portfolios')} title="Featured Portfolio">
    <div className={cx('portfolios-grid')}>
      {
        portfolios.map(portfolio => (
          <div key={portfolio.id} className={cx('portfolios-grid-item')}>
            <PortfolioComponent portfolio={portfolio} />
          </div>
        ))
      }
    </div>
  </RelatedModuleTemplate>
);

SellerProfilePortfolios.propTypes = {
  portfolioComponent: PropTypes.func,
  portfolios: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  })).isRequired
};

SellerProfilePortfolios.defaultProps = {
  portfolioComponent: props => <SellerProfilePortfolio {...props} />
};

export default SellerProfilePortfolios;
