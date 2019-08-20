import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Print = ({ className, ...props }) => (
  <svg className={classnames(cx('print'), className)} viewBox="0 0 20 17" xmlns="http://www.w3.org/2000/svg" {...props}><title>Print</title><g fillRule="nonzero"><path d="M19 3h-4V1c0-.5-.5-1-1-1H6c-.5 0-1 .5-1 1v2H1c-.5 0-1 .5-1 1v9c0 .5.5 1 1 1h3v-1H1V4h18v9h-3v1h3c.5 0 1-.5 1-1V4c0-.5-.5-1-1-1zm-5 0H6V1h8v2z" /><path d="M17 10H3v1h2v6h10v-6h2v-1zm-3 6H6v-5h8v5z" /></g></svg>
);

export default Print;
