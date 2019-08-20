import styled from 'react-emotion';
import mq from '@dering-hall/dh-theme/breakpoints';

export const iconContainerTotalWidth = 25 + 8;
export const iconContainerTotalWidthSmall = 14 + 8;

const getMarginAndWidthStyles = (alignRight, small) => {
  if (small) {
    return {
      marginRight: !alignRight ? 8 : 0,
      marginLeft: alignRight ? 8 : 0,
      width: 14
    };
  }

  return {
    marginRight: alignRight ? 8 : 0,

    [mq.tablet]: {
      width: 25,
      marginRight: !alignRight ? 8 : 0,
      marginLeft: alignRight ? 8 : 0
    }
  };
};

const AccordionMenuButtonIcon = styled('span')(({ alignRight, small }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  ...getMarginAndWidthStyles(alignRight, small)
}));

export default AccordionMenuButtonIcon;
