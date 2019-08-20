import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Facebook = ({ className, ...props }) => (
  <svg className={classnames(cx('facebook'), className)} viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg" {...props}><title>Facebook</title><path d="M6.36 20H2.12V9.999H0V6.553h2.12v-2.07C2.12 1.674 3.314 0 6.715 0h2.83v3.447H7.777c-1.324 0-1.411.482-1.411 1.38L6.36 6.554h3.205L9.19 9.999H6.36V20z" fillRule="evenodd" /></svg>
);

export default Facebook;
