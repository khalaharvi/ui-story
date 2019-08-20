import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import mq from '@dering-hall/dh-theme/breakpoints';

import AccordionMenuButtonIcon from './AccordionMenuButtonIcon';

const Button = styled('button')(({ alignRight }) => ({
  [`span:not(${AccordionMenuButtonIcon})`]: {
    [mq.tablet]: {
      order: alignRight ? 1 : 2
    }
  },

  [AccordionMenuButtonIcon]: {
    [mq.tablet]: {
      order: alignRight ? 2 : 1
    }
  }
}));

const AccordionMenuButton = ({
  children,
  icon: IconComponent,
  alignRight,
  small,
  ...props
}) => (
  <Button type="button" alignRight={alignRight} small={small} {...props}>
    {
      IconComponent ? (
        <AccordionMenuButtonIcon alignRight={alignRight} small={small}>
          {IconComponent}
        </AccordionMenuButtonIcon>
      ) : null
    }
    <span>{children}</span>
  </Button>
);

AccordionMenuButton.propTypes = {
  icon: PropTypes.element,
  alignRight: PropTypes.bool,
  small: PropTypes.bool
};

export default AccordionMenuButton;
