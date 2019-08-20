import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';
import { cx } from './ProductDetail';

const cxDesigner = createClassNames('designer-about');

const ProductDetailAbout = ({ name, image, description }) => (
  <div className={classnames(cx('about'), 'columns')}>
    <h2 className={classnames(cx('title'))}>About {name}</h2>
    { image &&
      <img
        className={classnames(cxDesigner('img'), 'col')}
        src={image}
        alt={name}
      />
    }
    { description &&
      <div
        className={classnames(cxDesigner('description'), 'col')}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    }
  </div>
);

ProductDetailAbout.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  description: PropTypes.string
};

export default ProductDetailAbout;
