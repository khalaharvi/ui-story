import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Download = ({ className, ...props }) => (
  <svg className={classnames(cx('download'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 15.5" {...props}><title>Download</title><path fill="none" strokeMiterlimit="10" d="M9.5 0v11.9" /><path d="M5.4 8.6l.7-.7 3.4 3.6 3.4-3.6.7.7L9.5 13z" /><path fill="none" strokeMiterlimit="10" d="M0 15h19" /></svg>
);

export default Download;

