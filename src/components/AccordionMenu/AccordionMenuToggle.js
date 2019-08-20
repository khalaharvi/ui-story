import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import mq from '@dering-hall/dh-theme/breakpoints';

import { Plus as PlusIcon } from 'icons';
import AccordionMenuButton from './AccordionMenuButton';

const getSVGStyles = (active, small) => {
  let styles = {
    width: 13,
    height: 13
  };

  if (!small) {
    styles = {
      ...styles,
      [mq.tablet]: {
        width: 16,
        height: 16,
        marginTop: active ? 5 : 4
      }
    };
  }

  return {
    display: 'inline-block',
    fill: 'currentColor',
    ...styles
  };
};

const AccordionMenuButtonToggle = styled(AccordionMenuButton)(({ active, small }) => ({
  svg: {
    ...getSVGStyles(active, small)
  }
}));

const AccordionMenuToggle = ({ children, active, ...props }) => (
  <AccordionMenuButtonToggle active={active} icon={<PlusIcon rotate={active} />} {...props}>
    {children}
  </AccordionMenuButtonToggle>
);

AccordionMenuToggle.propTypes = {
  active: PropTypes.bool
};

export default AccordionMenuToggle;
