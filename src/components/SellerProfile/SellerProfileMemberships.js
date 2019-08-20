import React from 'react';
import PropTypes from 'prop-types';

import RelatedModuleTemplate from 'templates/RelatedModule';

import { cx } from './SellerProfile';

const SellerProfileMemberships = ({ memberships }) => (
  <RelatedModuleTemplate className={cx('memberships')} title="Members">
    <ul className={cx('memberships-list')}>
      {
        memberships.map(membership => (
          <li key={membership.id} className={cx('memberships-list-item')}>
            <img src={membership.image} alt={membership.name} />
          </li>
        ))
      }
    </ul>
  </RelatedModuleTemplate>
);

SellerProfileMemberships.propTypes = {
  memberships: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
};

export default SellerProfileMemberships;
