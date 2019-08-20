import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Search = ({ className, ...props }) => (
  <svg className={classnames(cx('search'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.939 39.106" {...props}><g fill="none" strokeWidth="3"><ellipse cx="14.832" cy="14.369" rx="13.332" ry="12.869" /><path d="M22.248 26.342l7.416 11.974" /></g></svg>
);

export default Search;
