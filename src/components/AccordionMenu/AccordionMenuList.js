import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _get from 'lodash.get';
import mq from '@dering-hall/dh-theme/breakpoints';

import { cleanButton } from 'styles';
import { iconContainerTotalWidth, iconContainerTotalWidthSmall } from './AccordionMenuButtonIcon';

const getFontStyles = (theme, small) => {
  if (small) {
    return _get(theme, 'typography.pSmall', {});
  }

  return {
    ..._get(theme, 'typography.pSmall', {}),

    [mq.tablet]: {
      ..._get(theme, 'typography.h4', {})
    }
  };
};

const getUlPaddingStyle = (small, alignRight) => {
  if (small) {
    return {
      paddingRight: alignRight ? iconContainerTotalWidthSmall : undefined,
      paddingLeft: !alignRight ? iconContainerTotalWidthSmall : undefined
    };
  }

  return {
    paddingRight: alignRight ? iconContainerTotalWidth : undefined,
    paddingLeft: !alignRight ? iconContainerTotalWidth : undefined
  };
};

const AccordionMenuList = styled('ul')(({
  root,
  active,
  theme,
  alignRight,
  small
}) => ({
  display: root ? 'flex' : 'none',
  justifyContent: 'space-between',

  [mq.tablet]: {
    display: active === false ? 'none' : 'flex',
    flexFlow: active === false ? undefined : 'column',
    textAlign: alignRight ? 'right' : 'left',
    alignItems: alignRight ? 'flex-end' : 'flex-start'
  },

  ul: {
    ...getUlPaddingStyle(small, alignRight),

    'a, button': {
      color: _get(theme, 'text.secondary'),
      ...getFontStyles(theme, small)
    }
  },

  button: {
    ...cleanButton
  },

  'a, button': {
    color: _get(theme, 'text.primary'),
    display: 'flex',
    alignItems: 'center',
    ...getFontStyles(theme, small)
  }
}));

AccordionMenuList.propTypes = {
  active: PropTypes.bool,
  root: PropTypes.bool
};

export default AccordionMenuList;
