import PropTypes from 'prop-types';
import { createConnector } from 'react-instantsearch';
import _find from 'lodash.find';
import _omit from 'lodash.omit';
import _isEmpty from 'lodash.isempty';

const TOGGLER_ALL = 'all';

function getId() {
  return 'toggler';
}

function getCurrentRefinement(props, searchState) {
  return searchState[getId()] || TOGGLER_ALL;
}

function refine(props, searchState, nextRefinement) {
  const nextValue = { [getId()]: (nextRefinement !== TOGGLER_ALL) ? nextRefinement : undefined };

  return {
    ...searchState,
    ...nextValue,
    page: 1 // reset page
  };
}

export default createConnector({
  displayName: 'DeringhallToggler',

  propTypes: {
    defaultLabel: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      attribute: PropTypes.string
    })).isRequired
  },

  defaultProps: {
    defaultLabel: 'All'
  },

  getProvidedProps(props, searchState) {
    const currentRefinement = getCurrentRefinement(props, searchState);

    const items = props.items.map(item => ({
      attribute: item.attribute,
      label: item.label,
      isRefined: item.attribute === currentRefinement
    }));

    const refinedItem = _find(items, item => item.isRefined === true);

    // Add default option at first position
    items.unshift({
      attribute: TOGGLER_ALL,
      label: props.defaultLabel,
      isRefined: _isEmpty(refinedItem)
    });

    return {
      items,
      currentRefinement
    };
  },

  refine(props, searchState, nextRefinement) {
    return refine(props, searchState, nextRefinement);
  },

  cleanUp(props, searchState) {
    return _omit(getId(), searchState);
  },

  getSearchParameters(searchParameters, props, searchState) {
    const attribute = getCurrentRefinement(props, searchState);

    if (attribute !== TOGGLER_ALL) {
      return searchParameters
        .addFacet(attribute)
        .addFacetRefinement(attribute, true);
    }

    return searchParameters;
  },

  getMetadata(props, searchState) {
    const id = getId();
    const currentRefinement = getCurrentRefinement(props, searchState);
    const items = [];
    const index = (this.context && this.context.ais && this.context.ais.mainTargetedIndex) ?
      { index: this.context.ais.mainTargetedIndex } :
      undefined;

    if (currentRefinement !== TOGGLER_ALL) {
      const { label, attribute } = _find(props.items, item => item.attribute === currentRefinement);

      items.push({
        label,
        attribute,
        currentRefinement,
        value: nextState => refine(props, nextState, TOGGLER_ALL)
      });
    }

    return {
      id,
      items,
      ...index
    };
  }
});
