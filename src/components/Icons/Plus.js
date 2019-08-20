import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { cx } from './index';

const Plus = ({ className, rotate, ...props }) => (
  rotate ? <svg className={classnames(cx('plus'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}><path d="M7.849 7l5.223 5.223-.868.868-5.223-5.223-5.223 5.223-.868-.868L6.114 7 .891 1.777l.868-.868 5.223 5.223L12.205.909l.868.868L7.849 7z" /></svg> : <svg className={classnames(cx('plus'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}><path d="M9 9v7H7V9H0V7h7V0h2v7h7v2H9z" /></svg>
);

Plus.propTypes = {
  rotate: PropTypes.bool
};

Plus.defaultProps = {
  rotate: false
};

export default Plus;
