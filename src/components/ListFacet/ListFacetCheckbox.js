import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _pick from 'lodash.pick';
import { connectRefinementList } from 'react-instantsearch/connectors';

import { createClassNames } from 'utils';
import PanelCallbackHandler from 'components/Panel/PanelCallbackHandler';
import ListFacetOptions from './ListFacetOptions';
import ListFacetCheckboxLabel from './ListFacetCheckboxLabel';

const cx = createClassNames('list-facet');

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    count: PropTypes.number.isRequired,
    items: (...args) => itemsPropType(...args)
  })
);

export class ListFacetCheckbox extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.arrayOf(PropTypes.string).isRequired,
        count: PropTypes.number.isRequired,
        isRefined: PropTypes.bool.isRequired
      })
    ),
    showMore: PropTypes.bool,
    limit: PropTypes.number,
    showMoreLimit: PropTypes.number,
    transformItems: PropTypes.func,
    className: PropTypes.string
  };

  renderItem = (item) => {
    const { refine } = this.props;

    return (
      <ListFacetCheckboxLabel className={cx('option--checkbox')} isRefined={item.isRefined}>
        <input
          type="checkbox"
          checked={item.isRefined}
          onChange={() => refine(item.value)}
        />
        <span className={cx('option-label')}>{item.label}</span>
      </ListFacetCheckboxLabel>
    );
  };

  render() {
    return (
      <ListFacetOptions
        renderItem={this.renderItem}
        cx={cx}
        {..._pick(this.props, [
          'items',
          'showMore',
          'limit',
          'showMoreLimit',
          'canRefine',
          'className'
        ])}
      />
    );
  }
}

const ListFacetCheckboxComponent = props => (
  <PanelCallbackHandler {...props}>
    <ListFacetCheckbox {...props} />
  </PanelCallbackHandler>
);

export default connectRefinementList(ListFacetCheckboxComponent);
