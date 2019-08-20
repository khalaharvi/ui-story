import styled from 'react-emotion';
import _get from 'lodash.get';

const BreadcrumbListItem = styled('li')(({ theme }) => ({
  marginRight: '10px',
  color: _get(theme, 'text.secondary', 'black'),
  '&:last-child': {
    marginRight: 0
  }
}));

export default BreadcrumbListItem;
