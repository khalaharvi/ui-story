import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'react-emotion';
import _get from 'lodash.get';
import { connectRange } from 'react-instantsearch/connectors';
import PanelCallbackHandler from 'components/Panel/PanelCallbackHandler';
import Rheostat from 'rheostat';

import { createClassNames } from 'utils';

const cx = createClassNames('range-facet');

const handleSize = 18;
const StyledRangeFacet = styled('div')(({ theme }) => ({
  marginBottom: (handleSize / 2),

  '.rheostat': {
    overflow: 'visible',
    margin: `10px ${18 / 2}px 0`
  },

  '.rheostat-background': {
    position: 'relative',
    top: 0,
    left: 0,
    height: 4,
    width: '100%',

    backgroundColor: _get(theme, 'colors.secondary.grey')
  },

  '.rheostat-progress': {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 4,

    backgroundColor: _get(theme, 'colors.secondary.taupe')
  },

  '.rheostat-handle': {
    position: 'relative',
    zIndex: 1,
    marginLeft: -(handleSize / 2),
    top: '50%',
    transform: 'translateY(-50%)',
    width: handleSize,
    height: handleSize,

    backgroundColor: 'white',
    border: `1px solid ${_get(theme, 'text.secondary')}`,
    borderRadius: '3px',
    cursor: 'grab',

    ':hover': {
      borderColor: _get(theme, 'text.primary')
    }
  },

  span: {
    ..._get(theme, 'typography.pSmall', {})
  }
}));

export class RangeFacet extends Component {
  static propTypes = {
    className: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    currentRefinement: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    refine: PropTypes.func.isRequired,
    transformLabel: PropTypes.func
  };

  state = {
    currentValues: {
      min: this.props.min,
      max: this.props.max
    }
  };

  componentWillReceiveProps(sliderState) {
    if (sliderState.canRefine) {
      this.setState({
        currentValues: {
          min: sliderState.currentRefinement.min,
          max: sliderState.currentRefinement.max
        }
      });
    }
  }

  onValuesUpdated = (sliderState) => {
    this.setState({
      currentValues: { min: sliderState.values[0], max: sliderState.values[1] }
    });
  };

  onChange = (sliderState) => {
    if (
      this.props.currentRefinement.min !== sliderState.values[0] ||
      this.props.currentRefinement.max !== sliderState.values[1]
    ) {
      this.props.refine({
        min: sliderState.values[0],
        max: sliderState.values[1]
      });
    }
  };

  render() {
    const {
      className,
      min,
      max,
      currentRefinement,
      transformLabel
    } = this.props;
    const { currentValues } = this.state;

    const label = transformLabel ?
      transformLabel(currentValues.min || 0, currentValues.max || 0) :
      `${currentValues.min} - ${currentValues.max}`;

    return min !== max ? (
      <StyledRangeFacet className={classnames(cx(''), className)}>
        <span className={cx('label')}>{label}</span>
        <Rheostat
          min={min}
          max={max}
          values={[currentRefinement.min, currentRefinement.max]}
          onChange={this.onChange}
          onValuesUpdated={this.onValuesUpdated}
        />
      </StyledRangeFacet>
    ) : null;
  }
}

// Can optionally be wrapped within <Panel />
const RangeFacetComponent = props => (
  <PanelCallbackHandler {...props}>
    <RangeFacet {...props} />
  </PanelCallbackHandler>
);

export default connectRange(RangeFacetComponent);
