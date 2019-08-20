import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Instagram = ({ className, ...props }) => (
  <svg className={classnames(cx('instagram'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}><path d="M15 0H1C.5 0 0 .5 0 1v14c0 .5.5 1 1 1h14c.5 0 1-.5 1-1V1c0-.5-.5-1-1-1zm-1 13c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1V7h12v6z" /><path fillRule="evenodd" clipRule="evenodd" fill="#FFF" d="M12 2h2v2h-2zm-4 9.4c-1.9 0-3.4-1.5-3.4-3.4S6.1 4.6 8 4.6s3.4 1.5 3.4 3.4-1.5 3.4-3.4 3.4z" /><path d="M8 5.2c1.5 0 2.8 1.3 2.8 2.8 0 1.5-1.3 2.8-2.8 2.8S5.2 9.5 5.2 8c0-1.5 1.3-2.8 2.8-2.8M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" /></svg>
);

export default Instagram;
