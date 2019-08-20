import { createFactory, PureComponent } from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';
import loadGoogleMapsApi from 'load-google-maps-api';

import { getDisplayName } from 'utils';

const LOADING_STATE_NONE = 'NONE';
const LOADING_STATE_BEGIN = 'BEGIN';
const LOADING_STATE_LOADED = 'LOADED';

// Adapted from https://github.com/tomchentw/react-google-maps/blob/v9.4.5/src/withScriptjs.jsx
const withGoogleMapScript = (key, libraries = ['places']) => (BaseComponent) => {
  const factory = createFactory(BaseComponent);

  class WithGoogleMapScript extends PureComponent {
    static displayName = `withGoogleMapScript(${getDisplayName(BaseComponent)})`;

    static propTypes = {
      loadingElement: PropTypes.node.isRequired
    };

    state = {
      loadingState: LOADING_STATE_NONE
    };

    componentWillMount() {
      const { loadingElement } = this.props;

      invariant(
        !!loadingElement,
        "Required prop 'loadingElement' is missing."
      );
    }

    componentDidMount() {
      const { loadingState } = this.state;
      const canUseDOM = !!(
        typeof window !== 'undefined' &&
        window.document &&
        window.document.createElement
      );

      if (loadingState !== LOADING_STATE_NONE || !canUseDOM) {
        return;
      }

      this.setState({ // eslint-disable-line react/no-did-mount-set-state
        loadingState: LOADING_STATE_BEGIN
      });

      loadGoogleMapsApi({
        key,
        libraries,
        v: 3
      }).then(this.handleLoaded);
    }

    componentWillUnmount() {
      this.isUnmounted = true;
    }

    isUnmounted = false

    handleLoaded = () => {
      if (this.isUnmounted) {
        return;
      }

      this.setState({
        loadingState: LOADING_STATE_LOADED
      });
    }

    render() {
      const {
        loadingElement,
        ...props
      } = this.props;

      const { loadingState } = this.state;

      if (loadingState === LOADING_STATE_LOADED) {
        return factory(props);
      }

      return loadingElement;
    }
  }

  return WithGoogleMapScript;
};

export default withGoogleMapScript;
