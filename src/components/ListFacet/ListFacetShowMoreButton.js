import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _get from 'lodash.get';
import { cleanButton } from 'styles';

const ListFacetShowMoreButton = styled('button')(({ theme, disabled }) => ({
  ...cleanButton,
  margin: 0,
  color: _get(theme, 'colors.secondary.taupe'),
  display: disabled ? 'none' : undefined,
  ..._get(theme, 'typography.pSmall', {}),

  '&:hover': {
    color: _get(theme, 'text.primary')
  },

  '&[disabled]': {
    display: 'none'
  }
}));

ListFacetShowMoreButton.propTypes = {
  disabled: PropTypes.bool
};

export default ListFacetShowMoreButton;
