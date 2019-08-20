import React from 'react';
import PropTypes from 'prop-types';
import _find from 'lodash.find';

import Link from 'components/Link';
import SellerProfileSocialLinks from './SellerProfileSocialLinks';
import { cx } from './SellerProfile';

const SellerProfileInfo = ({ seller, links }) => {
  const contact = _find(links, { type: 'contact' });

  return (
    <div className={cx('info')}>
      <img
        sizes="(min-width: 1240px) 1170px, (min-width: 970px) 930px, (min-width: 730px) 690px, calc(100vw - 40px)"
        src={seller.image}
        alt={seller.name}
        className={cx('info-image')}
      />

      <div className="columns">
        <div className="col columns">
          <div className="col">
            <img src={seller.logo} alt={seller.name} sizes="170px" style={{ maxWidth: '100%' }} />
          </div>
          <div className="col">
            <h2 className={cx('info-name')}>{seller.name}</h2>

            { links && <SellerProfileSocialLinks links={links.filter(link => link.type !== 'contact')} /> }
          </div>
        </div>

        <div className="col">
          <div className={cx('info-summary')} dangerouslySetInnerHTML={{ __html: seller.summary }} />
          {
            contact &&
              <p className={cx('info-contact')}>
                <Link to={contact.url} className="dh-btn dh-btn-primary dh-btn-outline" external noFollow>
                  Contact on Dering Hall
                </Link>
              </p>
          }
        </div>
      </div>
    </div>
  );
};

SellerProfileInfo.propTypes = {
  seller: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    logo: PropTypes.string,
    location: PropTypes.string,
    website: PropTypes.string
  }),
  links: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.oneOf([
      'website', 'facebook', 'instagram', 'pinterest', 'twitter', 'contact'
    ]).isRequired,
    url: PropTypes.string.isRequired
  }))
};

export default SellerProfileInfo;
