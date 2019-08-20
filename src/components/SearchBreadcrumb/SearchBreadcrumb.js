import React from 'react';
import PropTypes from 'prop-types';
import { connectBreadcrumb } from 'react-instantsearch/connectors';
import { cx as emotionCx } from 'react-emotion';
import { withTheme } from 'emotion-theming';

import { createClassNames } from 'utils';
import Link from 'components/Link';

import { getLinkStyle } from 'components/Breadcrumb';
import BreadcrumbList from 'components/Breadcrumb/BreadcrumbList';
import BreadcrumbListItem from 'components/Breadcrumb/BreadcrumbListItem';
import BreadcrumbSeparator from 'components/Breadcrumb/BreadcrumbSeparator';

const cx = createClassNames('breadcrumb');

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
);

// TO DO: add SEO rich markup
export const SearchBreadcrumb = ({
  canRefine,
  createURL,
  items,
  refine,
  rootURL,
  separator,
  alwaysShowRoot,
  rootLabel,
  theme
}) => {
  const link = getLinkStyle(theme);

  const rootPath = (canRefine || alwaysShowRoot) ? (
    <BreadcrumbListItem className={cx('item')}>
      <Link
        className={emotionCx(cx('link'), link)}
        onClick={() => (!rootURL ? refine() : null)}
        to={rootURL || createURL()}
      >
        {rootLabel}
      </Link>
    </BreadcrumbListItem>
  ) : null;

  const breadcrumb = items.map((item, idx) => {
    const isLast = idx === items.length - 1;
    const cleanSeparator = typeof separator === 'string' ? separator.trim() : separator;

    return (
      <BreadcrumbListItem className={cx('item', isLast && 'item--selected')} key={`${item.value}`}>
        <BreadcrumbSeparator className={cx('separator')}>{cleanSeparator}</BreadcrumbSeparator>
        {!isLast ? (
          <Link
            className={emotionCx(cx('link'), link)}
            onClick={() => refine(item.value)}
            to={createURL(item.value)}
          >
            {item.label}
          </Link>
        ) : (
          item.label
        )}
      </BreadcrumbListItem>
    );
  });

  return (
    <div className={cx('', !canRefine && '-noRefinement')}>
      <BreadcrumbList className={cx('list')}>
        {rootPath}
        {breadcrumb}
      </BreadcrumbList>
    </div>
  );
};

SearchBreadcrumb.propTypes = {
  canRefine: PropTypes.bool.isRequired,
  createURL: PropTypes.func.isRequired,
  items: itemsPropType,
  refine: PropTypes.func.isRequired,
  rootURL: PropTypes.string,
  separator: PropTypes.node,
  alwaysShowRoot: PropTypes.bool,
  rootLabel: PropTypes.string
};

SearchBreadcrumb.defaultProps = {
  rootURL: null,
  separator: ' > ',
  alwaysShowRoot: false,
  rootLabel: 'Home'
};

export default connectBreadcrumb(withTheme(SearchBreadcrumb));
