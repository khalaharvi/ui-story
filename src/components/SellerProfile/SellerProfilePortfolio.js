import React from 'react';
import PropTypes from 'prop-types';

import Image from 'components/Image';

const SellerProfilePortfolio = ({ portfolio }) => (
  <Image src={portfolio.image} alt={portfolio.caption} />
);

SellerProfilePortfolio.propTypes = {
  portfolio: PropTypes.shape({
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired
  }).isRequired
};

export default SellerProfilePortfolio;
