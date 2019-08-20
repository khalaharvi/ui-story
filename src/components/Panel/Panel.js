import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import _get from 'lodash.get';

import { Plus as PlusIcon } from 'icons';
import { cleanButton } from 'styles';

const Panel = styled('div')(({ theme }) => ({
  padding: '20px 5px',
  borderTop: `1px solid ${_get(theme, 'colors.secondary.taupe')}`,
  color: _get(theme, 'text.primary'),

  ':last-child': {
    borderBottom: `1px solid ${_get(theme, 'colors.secondary.taupe')}`
  }
}));

const PanelHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  ..._get(theme, 'typography.pSmall', {}),
  cursor: 'pointer',

  span: {
    flex: '1 1 0%'
  }
}));

const PanelToggle = styled('button')(({ theme }) => ({
  ...cleanButton,
  color: _get(theme, 'text.primary'),

  svg: {
    display: 'block',
    width: 16,
    height: 16,
    fill: 'currentColor'
  }
}));

const PanelBody = styled('div')(({ visible }) => ({
  display: visible ? 'block' : 'none',
  marginTop: 10
}));

// Adapted from: https://github.com/algolia/react-instantsearch/blob/v5.0.1/packages/react-instantsearch/src/components/Panel.js
class PanelComponent extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    header: PropTypes.string.isRequired
  };

  static childContextTypes = {
    setCanRefine: PropTypes.func.isRequired
  };

  state = {
    canRefine: true,
    toggled: false
  };

  getChildContext() {
    return {
      setCanRefine: this.setCanRefine
    };
  }

  setCanRefine = (nextCanRefine) => {
    this.setState({ canRefine: nextCanRefine });
  };

  toggle = () => {
    const { toggled } = this.state;

    this.setState({
      toggled: !toggled
    });
  }

  render() {
    const {
      children,
      header
    } = this.props;
    const { canRefine, toggled } = this.state;

    return (
      <Panel hidden={!canRefine}>
        <PanelHeader onClick={this.toggle}>
          <span>{header}</span>
          <PanelToggle type="button" aria-label={`Toggle ${header} panel`}>
            <PlusIcon rotate={toggled} />
          </PanelToggle>
        </PanelHeader>
        <PanelBody visible={toggled}>{children}</PanelBody>
      </Panel>
    );
  }
}

export default PanelComponent;
