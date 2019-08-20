import React from 'react';
import PropTypes from 'prop-types';

import { LinkWithIcon } from 'components/Link';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
  Pinterest as PinterestIcon,
  NewWindow as NewWindowIcon
} from 'icons';
import { capitalizeFirstLetter } from 'utils';
import { cx } from './SellerProfile';

const icons = {
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
  instagram: <InstagramIcon />,
  pinterest: <PinterestIcon />,
  website: <NewWindowIcon />
};

const SellerProfileSocialLinks = ({ links }) => (
  <ul className={cx('info-social-links')}>
    {
      links.map(link => (
        <li key={link.type}>
          <LinkWithIcon
            to={link.url}
            icon={icons[link.type]}
            label={link.label || capitalizeFirstLetter(link.type)}
            external
          />
        </li>
      ))
    }
  </ul>
);

SellerProfileSocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf(['website', 'facebook', 'instagram', 'pinterest', 'twitter']).isRequired,
    url: PropTypes.string.isRequired,
    label: PropTypes.string
  })).isRequired
};

export default SellerProfileSocialLinks;
