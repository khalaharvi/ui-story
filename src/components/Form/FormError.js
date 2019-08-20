import styled from 'react-emotion';
import _get from 'lodash.get';

const FormError = styled('span')(({ theme }) => ({
  position: 'absolute',
  bottom: -5,
  right: 0,
  fontSize: 14,
  lineHeight: '20px',
  color: _get(theme, 'colors.primary.red')
}));

export default FormError;
