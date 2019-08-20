import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const NewWindow = ({ className, ...props }) => (
  <svg className={classnames(cx('new-window'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}><title>New Window</title><path d="M13 15H1V3h6V2H1c-.5 0-1 .5-1 1v12c0 .5.5 1 1 1h12c.5 0 1-.5 1-1V9h-1v6zM11.3 0H16v4.7" /><path fill="none" strokeWidth="1.5" d="M14.8 1.2L9 7" /></svg>
);

export default NewWindow;
