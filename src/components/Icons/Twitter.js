import React from 'react';
import classnames from 'classnames';
import { cx } from './index';

const Twitter = ({ className, ...props }) => (
  <svg className={classnames(cx('twitter'), className)} viewBox="0 0 17 15" xmlns="http://www.w3.org/2000/svg" {...props}><title>Twitter</title><path d="M14.315 1.128A3.44 3.44 0 0 0 11.769 0C9.845 0 8.283 1.601 8.283 3.576c0 .28.03.553.09.815-2.899-.15-5.468-1.572-7.19-3.738-.3.53-.472 1.145-.472 1.8 0 1.24.616 2.335 1.552 2.976a3.424 3.424 0 0 1-1.58-.446v.044c0 1.733 1.202 3.18 2.798 3.507a3.399 3.399 0 0 1-1.575.063c.444 1.42 1.731 2.454 3.258 2.482A6.887 6.887 0 0 1 0 12.56a9.709 9.709 0 0 0 5.347 1.606c6.415 0 9.923-5.449 9.923-10.175 0-.156-.003-.311-.009-.464A7.155 7.155 0 0 0 17 1.678a6.831 6.831 0 0 1-2.003.562A3.57 3.57 0 0 0 16.531.262c-.674.41-1.42.707-2.216.866z" fillRule="evenodd" /></svg>
);

export default Twitter;
