import React from 'react';
import PropTypes from 'prop-types';

import { cx } from './SearchAutocomplete';

const SearchAutocompleteHit = ({ hit, hitTitleKey, hitImageKey }) => {
  const titleKey = typeof hitTitleKey === 'string' ? hitTitleKey : hitTitleKey.find(key => !!hit[key]);
  let hitImg = null;

  if (hitImageKey) {
    const imgKey = (typeof hitImageKey === 'string') ? hitImageKey : hitImageKey.find(key => !!hit[key]);

    hitImg = imgKey && hit[imgKey] ?
      <div className={cx('hit-image')}><img src={hit[imgKey]} alt={hit[titleKey]} /></div> :
      <div className={cx('hit-image')}><img src="http://via.placeholder.com/40" alt="placeholder" /></div>;
  }

  return (
    <div className={cx('hit')}>{hitImg}<span className={cx('hit-title')}>{hit[titleKey]}</span></div>
  );
};

SearchAutocompleteHit.propTypes = {
  hit: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  hitTitleKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired,
  hitImageKey: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
};

export default SearchAutocompleteHit;
