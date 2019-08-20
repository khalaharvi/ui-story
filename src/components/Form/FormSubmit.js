import styled from 'react-emotion';
import { hexToRgb } from '@dering-hall/dh-theme/util';
import _get from 'lodash.get';

import { cleanButton } from '../../styles';

const FormSubmit = styled('button')(({ theme, disabled }) => ({
  ...cleanButton,
  display: 'block',
  width: '100%',
  lineHeight: '50px',
  color: `rgba(${hexToRgb(_get(theme, 'colors.primary.white'), '#fff')}, ${disabled ? 0.75 : 1})`,
  backgroundColor: `rgba(${hexToRgb(_get(theme, 'text.primary'), '#000')}, ${disabled ? 0.25 : 0.5})`,

  ':not([disabled]):hover': {
    backgroundColor: `rgba(${hexToRgb(_get(theme, 'text.primary'), '#000')}, 0.75)`
  },

  '&:[disabled]': {
    cursor: 'not-allowed'
  }
}));

export default FormSubmit;
