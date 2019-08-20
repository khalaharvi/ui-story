import styled from 'react-emotion';
import PropTypes from 'prop-types';
import _get from 'lodash.get';

const ListFacetOptionsListItem = styled('li')(({ theme, isRefined, parent }) => {
  let refinedStyles;
  let parentStyles;
  let parentRefinedStyles;

  if (isRefined) {
    refinedStyles = {
      '& > a': {
        color: _get(theme, 'text.primary'),

        '& + ul': {
          display: 'block'
        }
      }
    };
  }

  if (parent) {
    if (isRefined) {
      parentRefinedStyles = {
        transform: 'rotate(-180deg) translateY(-50%)'
      };
    }

    parentStyles = {
      '& > a': {
        position: 'relative',
        color: _get(theme, 'text.primary'),

        '&:after': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          transformOrigin: 'top center',
          pointerEvents: 'none',
          // optimized data-uri of <Caret /> icon
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 13 8\'%3E%3Cpath fill=\'none\' stroke=\'%236d6d6a\' d=\'M0 1.044L6.5 7 13 1\' /%3E%3C/svg%3E")',
          backgroundRepeat: 'no-repeat',
          minWidth: '13px',
          minHeight: '8px',
          ...parentRefinedStyles
        },

        '& + ul': {
          display: 'block'
        }
      }
    };
  }

  return {
    display: 'block',
    position: 'relative',
    color: isRefined ? _get(theme, 'text.primary') : _get(theme, 'text.secondary'),
    ..._get(theme, 'typography.pSmall', {}),

    '&:hover': {
      color: _get(theme, 'text.primary')
    },

    ...refinedStyles,
    ...parentStyles
  };
});

ListFacetOptionsListItem.propTypes = {
  canRefine: PropTypes.bool,
  isRefined: PropTypes.bool,
  noRefinement: PropTypes.bool,
  parent: PropTypes.bool
};

export default ListFacetOptionsListItem;
