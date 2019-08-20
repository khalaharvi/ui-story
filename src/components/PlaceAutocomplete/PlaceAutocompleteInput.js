import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import _get from 'lodash.get';

import { Plus as PlusIcon } from 'icons';
import { cleanButton } from '../../styles';

const InputContainer = styled('div')({
  position: 'relative'
});

const InputButton = styled('button')(({ theme, hidden }) => ({
  ...cleanButton,
  display: hidden ? 'none' : 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  right: 5,
  top: '50%',
  transform: 'translateY(-50%)',
  height: 40,
  width: 40,

  ':hover svg': {
    fill: _get(theme, 'text.primary')
  },

  svg: {
    display: 'block',
    width: 14,
    height: 14,
    fill: _get(theme, 'text.secondary')
  }
}));

const PlaceAutocompleteInput = ({
  canReset,
  onReset,
  ...props
}) => (
  <InputContainer>
    <input {...props} />
    <InputButton type="button" hidden={!canReset} onClick={onReset}>
      <PlusIcon rotate />
    </InputButton>
  </InputContainer>
);

PlaceAutocompleteInput.propTypes = {
  onReset: PropTypes.func,
  canReset: PropTypes.bool
};

PlaceAutocompleteInput.defaultProps = {
  canReset: false
};

export default PlaceAutocompleteInput;
