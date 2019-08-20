import styled from 'react-emotion';
import _get from 'lodash.get';

const BreadcrumbSeparator = styled('span')(({ theme }) => ({
  marginRight: '10px',
  color: _get(theme, 'text.secondary', 'black')
}));

export default BreadcrumbSeparator;
