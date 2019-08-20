import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('products-search');

const ProductsSearchTemplate = ({ className, facets, results }) => (
  <section className={classnames(cx(''), className)}>
    {facets}
    {results}
  </section>
);

ProductsSearchTemplate.propTypes = {
  facets: PropTypes.node,
  results: PropTypes.node
};

export default ProductsSearchTemplate;
