import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './CommerceModule';

const CommerceModulePricing = ({
  currency,
  price,
  priceRaw
}) => (
  <dl className={cx('pricing')}>
    { priceRaw && <meta itemProp="priceCurrency" content={currency} /> }
    { priceRaw && <meta itemProp="priceCurrency" content={currency} /> }

    <meta itemProp="price" content={priceRaw} />
    <dt>List Price:</dt>
    <dd><b className="price">{price}</b></dd>
    <dt>Trade Price:</dt>
    <dd className="advertise-trade">Trade pricing is reserved for members of our Trade Program. <a href="https://deringhall.com/trade">Apply Now</a></dd>
  </dl>
);

CommerceModulePricing.propTypes = {
  price: PropTypes.string.isRequired,
  currency: (props, propName) => {
    const currency = props[propName];

    if (typeof props.priceRaw === 'number' &&
        (currency === undefined || typeof currency !== 'string')
    ) {
      throw new Error("'currency' is required.");
    }
  },
  priceRaw: PropTypes.number
};

export default CommerceModulePricing;
