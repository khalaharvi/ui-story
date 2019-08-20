import styled from 'react-emotion';

const FormGroup = styled('div')(({ submit }) => ({
  position: 'relative',
  paddingBottom: !submit && 20,
  marginTop: submit && 15
}));

export default FormGroup;
