import React from 'react';
import { css, cx as emotionCx } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import _get from 'lodash.get';

import Link from 'components/Link';

const ListFacetDropdownLink = ({
  theme,
  children,
  className,
  ...props
}) => {
  const link = css({
    display: 'block',

    color: _get(theme, 'text.secondary'),
    cursor: 'pointer',

    '&:hover': {
      color: _get(theme, 'text.default')
    },

    '& + ul': {
      display: 'none'
    }
  });

  return (
    <Link className={emotionCx(className, link)} {...props}>
      {children}
    </Link>
  );
};

export default withTheme(ListFacetDropdownLink);
