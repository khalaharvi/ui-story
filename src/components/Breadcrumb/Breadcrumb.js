import React from 'react';
import PropTypes from 'prop-types';
import { css, cx as emotionCx } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import _get from 'lodash.get';

import { createClassNames } from 'utils';
import Link from 'components/Link';
import BreadcrumbList from './BreadcrumbList';
import BreadcrumbListItem from './BreadcrumbListItem';
import BreadcrumbSeparator from './BreadcrumbSeparator';

const cx = createClassNames('breadcrumb');

export const getLinkStyle = theme => css({
  color: _get(theme, 'text.secondary'),
  textDecoration: 'none',

  '&:hover': {
    color: _get(theme, 'text.default')
  }
});

// TO DO: add SEO rich markup
const Breadcrumb = ({
  items,
  separator,
  rootURL,
  rootLabel,
  rootComponent: RootComponent,
  itemComponent: ItemComponent,
  theme
}) => {
  const link = getLinkStyle(theme);

  const rootPath = (
    <BreadcrumbListItem className={cx('item')}>
      <RootComponent className={emotionCx(cx('link'), link)} label={rootLabel} href={rootURL} />
    </BreadcrumbListItem>
  );

  const breadcrumb = items.map((item, idx) => {
    const isLast = (idx === items.length - 1);
    const cleanSeparator = typeof separator === 'string' ? separator.trim() : separator;

    return (
      <BreadcrumbListItem className={cx('item', isLast && 'item--selected')} key={`${item.href}`}>
        <BreadcrumbSeparator className={cx('separator')}>{cleanSeparator}</BreadcrumbSeparator>
        {!isLast ? (
          <ItemComponent item={item} className={emotionCx(cx('link'), link)} />
        ) : (
          item.label
        )}
      </BreadcrumbListItem>
    );
  });

  return (
    <div className={cx('')}>
      <BreadcrumbList className={cx('list')}>
        {rootPath}
        {breadcrumb}
      </BreadcrumbList>
    </div>
  );
};

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    })
  ),
  separator: PropTypes.node,
  rootURL: PropTypes.string,
  rootLabel: PropTypes.string,
  rootComponent: PropTypes.func,
  itemComponent: PropTypes.func
};

Breadcrumb.defaultProps = {
  items: [],
  separator: ' > ',
  rootLabel: 'Home',
  rootURL: null,
  rootComponent: ({ href, label, ...props }) => (
    <Link to={href} {...props}>{label}</Link>
  ),
  itemComponent: ({ item, ...props }) => (
    <Link to={item.href} {...props}>{item.label}</Link>
  )
};

export default withTheme(Breadcrumb);
