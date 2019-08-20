import React from 'react';
import PropTypes from 'prop-types';
import { css, cx as emotionCx } from 'react-emotion';
import { cx } from './index';

const style = filled => css({
  path: {
    fill: filled ? 'currentColor' : 'none',
    stroke: 'currentColor'
  }
});

const Heart = ({ className, filled, ...props }) => (
  <svg className={emotionCx(style(filled), cx('heart'), className)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 21" {...props}><path strokeWidth="2" d="M2.37 2.369c-1.828 1.835-1.827 5.855.035 7.73l.395.439 1.044 1.159c1.081 1.198 2.163 2.397 3.176 3.515l.048.053a697.263 697.263 0 0 0 3.167 3.478l.749.811c.229-.254.522-.581.913-1.02l1.642-1.844c.712-.798 1.315-1.473 1.897-2.118l.275-.305c1.664-1.842 2.968-3.244 3.917-4.198 1.828-1.836 1.828-5.849 0-7.685a4.666 4.666 0 0 0-6.617.001l-2.005 2.007-.707-.708-1.314-1.315C8.098 1.479 6.915 1 5.677 1s-2.42.479-3.307 1.369zm7.988 17.863l-.001.001.005-.005-.004.004z" /></svg>
);

Heart.propTypes = {
  filled: PropTypes.bool
};

Heart.defaultProps = {
  filled: false
};

export default Heart;
