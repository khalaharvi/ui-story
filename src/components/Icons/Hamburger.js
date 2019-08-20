import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Hamburger = ({ className, ...props }) => (
  <svg className={classnames(cx('hamburger'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 11" {...props}><path d="M0 0h14v1H0zM0 10h14v1H0zM0 5h14v1H0z" /></svg>
);

export default Hamburger;
