import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SectionHeaderTemplate, { cx } from 'templates/SectionHeader/SectionHeaderTemplate';
import { NewWindow as NewWindowIcon } from 'icons';
import { LinkWithIcon } from 'components/Link';

const SellerProfileHeader = ({ name, location, website }) => (
  <SectionHeaderTemplate title={name} subtitle={location} className={cx('-brand')}>
    {
      website &&
      <ul className={cx('brand-tools')}>
        <li className={classnames(cx('brand-tool'), cx('brand-tool--www'))}>
          <LinkWithIcon
            to={website}
            icon={<NewWindowIcon />}
            label="Official Website"
            external
          />
        </li>
      </ul>
    }
  </SectionHeaderTemplate>
);

SellerProfileHeader.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  website: PropTypes.string
};

export default SellerProfileHeader;
