import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import mq from '@dering-hall/dh-theme/breakpoints';

import { Heart as HeartIcon } from 'icons';
import { favorite as favoriteStyles } from 'styles';
import AccordionMenuButton from './AccordionMenuButton';

const StyledFavoriteButton = styled(AccordionMenuButton)(({ favorite }) => ({
  ...favoriteStyles(favorite)
}));

const getIconStyles = (small) => {
  let widthHeightStyles = {
    height: 13,
    width: 13.62
  };

  if (!small) {
    widthHeightStyles = {
      ...widthHeightStyles,

      [mq.tablet]: {
        width: 22,
        height: 21
      }
    };
  }

  return css({
    display: 'inline-block',
    ...widthHeightStyles
  });
};

const AccordionMenuFavoriteButton = ({ favorite, small, ...props }) => (
  <StyledFavoriteButton
    favorite={favorite}
    icon={<HeartIcon className={getIconStyles(small)} />}
    small={small}
    {...props}
  >
    Favorite
  </StyledFavoriteButton>
);

AccordionMenuFavoriteButton.propTypes = {
  favorite: PropTypes.bool,
  small: PropTypes.bool
};

export default AccordionMenuFavoriteButton;
