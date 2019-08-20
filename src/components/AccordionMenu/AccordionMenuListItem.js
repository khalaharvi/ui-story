import styled from 'react-emotion';

const AccordionMenuListItem = styled('li')(({ alignRight }) => ({
  display: 'flex',
  alignItems: alignRight ? 'flex-end' : 'flex-start',
  flexFlow: 'column'
}));

export default AccordionMenuListItem;
