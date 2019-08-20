import React from 'react';
import PropTypes from 'prop-types';

// TO DO: IMGIX + srcset/sizes

const Image = ({ alt, className, src }) => (
  <img src={src} alt={alt} className={className} />
);

Image.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default Image;
