import React from 'react';
import PropTypes from 'prop-types';

import { createClassNames } from 'utils';
import Link from 'components/Link';
import Image from 'components/Image';

const cx = createClassNames('navbar-logo');

// TO DO: allow for custom width/height

const NavBarLogo = ({
  alt,
  logo,
  src,
  to
}) => {
  const imgOrElement = typeof logo !== 'undefined' ? logo : <Image src={src} alt={alt} />;

  return (
    <div className={cx('')}>
      {to ? <Link to={to}>{imgOrElement}</Link> : imgOrElement}
    </div>
  );
};

NavBarLogo.propTypes = {
  alt: (props, propName) => {
    const alt = props[propName];

    if (typeof props.logo === 'undefined' && typeof alt !== 'string') {
      throw new Error("'alt' is required.");
    }
  },
  logo: (props, propName) => {
    const logo = props[propName];

    if (typeof props.src === 'undefined' && !React.isValidElement(logo)) {
      throw new Error("'logo' is required and must be a valid React element.");
    }
  },
  src: (props, propName) => {
    const src = props[propName];

    if (typeof props.logo === 'undefined' && typeof src !== 'string') {
      throw new Error("'src' is required.");
    }
  },
  to: PropTypes.string
};

export default NavBarLogo;
