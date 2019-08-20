import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _get from 'lodash.get';

const ListFacetCheckboxLabel = styled('label')(({ theme, isRefined }) => ({
  position: 'relative',
  cursor: 'pointer',
  color: isRefined ? _get(theme, 'text.primary') : _get(theme, 'text.secondary'),
  display: 'block',

  ':hover': {
    color: _get(theme, 'text.primary')
  },

  'input[type="checkbox"]': {
    position: 'absolute',
    left: '-9999px'
  },

  span: {
    display: 'block'
  }
}));

ListFacetCheckboxLabel.propTypes = {
  isRefined: PropTypes.bool
};

export default ListFacetCheckboxLabel;
