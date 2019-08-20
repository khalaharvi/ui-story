import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Caret = ({ className, ...props }) => (
  <svg className={classnames(cx('caret'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 8" {...props}><path fill="none" d="M0 1.044L6.5 7 13 1" /></svg>
);

export default Caret;

