import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled, { css, cx as emotionCx } from 'react-emotion';

import { createClassNames } from 'utils';

const cx = createClassNames('link');

const isSpecialClick = (event) => {
  const isMiddleClick = event.button === 1;
  return Boolean(
    isMiddleClick ||
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey
  );
};

export const StyledLink = styled('a')({
  textDecoration: 'none'
});

const Link = ({
  className,
  onClick,
  to,
  children,
  external,
  noFollow
}) => {
  const clickHandler = (e) => {
    if (isSpecialClick(e)) {
      return;
    }
    onClick();
    e.preventDefault();
  };

  let rel = [];
  let target;

  if (external) {
    rel = ['external', 'noopener'];
    target = '_blank';
  }

  if (noFollow) {
    rel.push('nofollow');
  }

  const attrs = {
    rel: rel.length > 0 ? rel.join(' ') : undefined,
    target
  };

  return (
    <StyledLink
      href={to}
      className={classnames(cx(''), className)}
      onClick={onClick ? clickHandler : null}
      {...attrs}
    >
      {children}
    </StyledLink>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]).isRequired,
  onClick: PropTypes.func,
  external: PropTypes.bool,
  noFollow: PropTypes.bool
};

Link.defaultProps = {
  external: false,
  noFollow: false
};

const linkWithIcon = css({
  display: 'flex',
  alignItems: 'center',

  'span:first-child': {
    display: 'inline-block',
    width: '17px',
    marginRight: '12px'
  },

  svg: {
    fill: 'currentColor',
    display: 'block',
    margin: '0 auto'
  }
});

export const LinkWithIcon = ({ icon, label, ...props }) => (
  <Link className={emotionCx(cx('-icon'), linkWithIcon)} {...props}>
    <span>{icon}</span>
    <span>{label}</span>
  </Link>
);

LinkWithIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired
};

export default Link;
