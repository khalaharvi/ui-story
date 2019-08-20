import styled from 'react-emotion';
import PropTypes from 'prop-types';

const ListFacet = styled('div')({
  position: 'relative'
});

ListFacet.propTypes = {
  canRefine: PropTypes.bool
};

export default ListFacet;
