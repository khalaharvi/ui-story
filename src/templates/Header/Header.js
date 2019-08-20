import React from 'react';
import PropTypes from 'prop-types';
import styled, { cx as emotionCx } from 'react-emotion';
import _get from 'lodash.get';

import { createClassNames } from 'utils';
import { ns, container } from 'styles';

const cx = createClassNames('header');

const Header = styled('header')(({ theme }) => ({
  position: 'relative',
  padding: '30px 0 45px',

  '&:after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '1px',
    width: '100%',
    display: 'block',
    backgroundColor: _get(theme, 'stroke', 'black')
  },

  [`.${ns}-breadcrumb`]: {
    marginBottom: '10px'
  }
}));
const HeaderInner = styled('div')({
  ...container
});
const HeaderH1 = styled('h1')({
  margin: 0,
  display: 'inline-block'
});

const StyledHeader = ({ className, breadcrumb, heading }) => (
  <Header className={emotionCx(cx(''), className)}>
    <HeaderInner className={cx('inner')}>
      {breadcrumb}
      <HeaderH1 className={cx('heading')}>
        {heading}
      </HeaderH1>
    </HeaderInner>
  </Header>
);

StyledHeader.propTypes = {
  breadcrumb: PropTypes.node,
  heading: PropTypes.node.isRequired
};

export default StyledHeader;
