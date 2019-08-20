import { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Helper wrapper for <xxxxFacet /> components wrapped in with <Panel /> component.
 * It is reponsible to update 'canRefine' state in <xxxxFacet />'s parent <Panel /> component.
 *
 * Usage:
 * - Export optionally <Panel />-wrapped <xxxxFacet /> component like so:
 *    <PanelCallbackHandler>
 *      <xxxxFacet />
 *    </PanelCallbackHandler>
 *
 * - Wrap <PanelCallbackHandler>-wrapped <xxxxFacet /> component with <Panel />
 *    <Panel>
 *      <xxxxFacet />
 *    </Panel>
 *
 * From: https://github.com/algolia/react-instantsearch/blob/v5.0.1/packages/react-instantsearch/src/components/PanelCallbackHandler.js
 */
class PanelCallbackHandler extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    canRefine: PropTypes.bool.isRequired
  };

  static contextTypes = {
    setCanRefine: PropTypes.func
  };

  componentWillMount() {
    if (this.context.setCanRefine) {
      this.context.setCanRefine(this.props.canRefine);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.context.setCanRefine && this.props.canRefine !== nextProps.canRefine) {
      this.context.setCanRefine(nextProps.canRefine);
    }
  }

  render() {
    return this.props.children;
  }
}

export default PanelCallbackHandler;
