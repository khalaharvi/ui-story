import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';

const cx = createClassNames('error');

const ErrorComponent = ({
  logo: Logo,
  link: Link,
  title,
  message,
  copyright,
  className
}) => (
  <div className={classnames(cx(''), className)}>
    <header className={cx('header')}>
      <div className={cx('logo')}>{Logo}</div>
    </header>
    <section className={cx('section')}>
      <div>
        <h1>{title}</h1>
        <p>{message}</p>
        { Link && <p>{Link}</p> }
      </div>
    </section>
    <footer className={cx('footer')}>
      <small>© {(new Date()).getFullYear()} {copyright}</small>
    </footer>
  </div>
);

ErrorComponent.propTypes = {
  logo: PropTypes.element.isRequired,
  link: PropTypes.element,
  title: PropTypes.string,
  message: PropTypes.string,
  copyright: PropTypes.string,
  className: PropTypes.string
};

ErrorComponent.defaultProps = {
  title: 'Internal Server Error',
  message: "We're sorry, but something went wrong. We have been notified about this and we'll take a look at it shortly.",
  copyright: 'Dering Hall, Inc.'
};

export default ErrorComponent;
