import styled from 'react-emotion';
import PropTypes from 'prop-types';

const ListFacetOptionsList = styled('ul')({
  margin: 0,
  padding: 0,

  listStyleType: 'none',

  ul: {
    paddingLeft: 15,
    marginBottom: 0
  }
});

ListFacetOptionsList.propTypes = {
  canRefine: PropTypes.bool
};

export default ListFacetOptionsList;
