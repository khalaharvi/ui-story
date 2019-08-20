import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('sellers-search');

const SellersSearchTemplate = ({ className, results }) => (
  <section className={classnames(cx(''), className)}>
    {results}
  </section>
);

SellersSearchTemplate.propTypes = {
  results: PropTypes.node
};

export default SellersSearchTemplate;
