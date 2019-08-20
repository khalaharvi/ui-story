import { createConnector } from 'react-instantsearch';
import _omit from 'lodash.omit';

function getId() {
  return 'geoSearch';
}

/**
 * Convert miles to meters
 * @param  {Number} i
 * @return {Number}
 */
function getMeters(i) {
  return Math.round(i * 1609.344);
}

function refine(props, searchState, latLng, name, radius = null) {
  const { lat, lng } = latLng || {};
  const nextValue = {
    [getId()]: (lat && lng) ? {
      lat,
      lng,
      radius: radius ? parseInt(radius, 10) : 0,
      name: name || ''
    } : undefined
  };

  return {
    ...searchState,
    ...nextValue,
    page: 1 // reset page
  };
}

function getCurrentRefinement(props, searchState) {
  return searchState[getId()] || { radius: 0 };
}

export default createConnector({
  displayName: 'DeringHallGeoSearch',

  getProvidedProps(props, searchState, searchResults) {
    // TO DO: add canRefine
    const {
      lat,
      lng,
      radius,
      name
    } = getCurrentRefinement(props, searchState);

    const { results } = searchResults;
    const searchParameters = results && results._state; // eslint-disable-line no-underscore-dangle
    const isRefinedFromSearchState = Boolean(searchState[getId()]);
    const isRefinedFromSearchParameters =
      searchParameters && Boolean(searchParameters.aroundLatLng);
    const isRefined =
      // We read it from both because the SearchParameters & the searchState are not always
      // in sync. When we set the refinement the searchState is used when we clear the refinement
      // the SearchParameters is used. In the first case when we render the results are not there
      // so we can't find the value from the results. The most up to date value is the searchState.
      // But when we clear the refinement the searchState is immediatly clear even when the items
      // retrieve are still the one from the previous query with the bounding box.
      isRefinedFromSearchState || isRefinedFromSearchParameters;

    return {
      isRefined,
      currentRefinement: {
        lat,
        lng,
        radius: parseInt(radius, 10),
        name
      }
    };
  },

  refine(props, searchState, latLng, name, radius) {
    return refine(props, searchState, latLng, name, radius);
  },

  getSearchParameters(searchParameters, props, searchState) {
    const geoSearch = getCurrentRefinement(props, searchState);

    if (geoSearch) {
      const { lat, lng, radius } = geoSearch;
      const aroundLatLng = lat && lng ? [lat, lng].join() : '';
      const aroundRadius = (parseInt(radius, 10) !== 0) ? getMeters(radius) : 'all';

      if (aroundLatLng !== '') {
        return searchParameters
          .setQueryParameter('aroundRadius', aroundRadius)
          .setQueryParameter('aroundLatLng', aroundLatLng);
      }

      return searchParameters.setQueryParameter('aroundLatLngViaIP', true);
    }

    return searchParameters;
  },

  cleanUp(props, searchState) {
    return _omit(getId(), searchState);
  }

  // TO DO: redo for SSR/URL sync
  // getMetadata(props, searchState) {
  //   const {
  //     lat,
  //     lng,
  //     // name,
  //     radius
  //   } = getCurrentRefinement(props, searchState);
  //   const items = [];
  //   const index = (this.context && this.context.ais && this.context.ais.mainTargetedIndex) ?
  //     { index: this.context.ais.mainTargetedIndex } :
  //     undefined;

  //   if (lat && lng) {
  //     items.push({
  //       key: `${getId()}.latLng`,
  //       label: `${radius !== 0 ? 'From' : 'In'}: ${lat},${lng}`,
  //       currentRefinement: {
  //         lat,
  //         lng
  //       },
  //       value: nextState => refine(props, nextState, {})
  //     });
  //   }

  //   return {
  //     id: getId(),
  //     items,
  //     ...index
  //   };
  // }
});
