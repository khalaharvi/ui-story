import React from 'react';

import { Search as SearchIcon } from 'icons';
import { cx } from './SearchAutocomplete';

const SearchAutocompleteInput = props => (
  <div className={cx('input-container')}>
    <input {...props} type="search" />
    <button className={cx('input-button')} type="submit">
      <SearchIcon className={cx('input-icon')} />
    </button>
  </div>
);

export default SearchAutocompleteInput;
