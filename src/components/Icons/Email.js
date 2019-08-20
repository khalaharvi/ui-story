import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Email = ({ className, ...props }) => (
  <svg className={classnames(cx('email'), className)} viewBox="0 0 19 14" xmlns="http://www.w3.org/2000/svg" {...props}><title>Email</title><g fill="none" fillRule="evenodd"><path d="M18 1v12H1V1h17zm.5-1H.5C.2 0 0 .2 0 .5v13c0 .3.2.5.5.5h18c.3 0 .5-.2.5-.5V.5c0-.3-.2-.5-.5-.5z" fill="#000" fillRule="nonzero" /><path stroke="none" d="M18.5 1l-9 7.5L.5 1" /></g></svg>
);

export default Email;
