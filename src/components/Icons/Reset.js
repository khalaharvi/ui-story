import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Reset = ({ className, ...props }) => (
  <svg className={classnames(cx('reset'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" {...props}><path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" /></svg>
);

export default Reset;
