import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _pick from 'lodash.pick';
import { connectHierarchicalMenu } from 'react-instantsearch/connectors';

import { createClassNames } from 'utils';

import PanelCallbackHandler from 'components/Panel/PanelCallbackHandler';
import ListFacetOptions from './ListFacetOptions';
import ListFacetDropdownLink from './ListFacetDropdownLink';

const cx = createClassNames('list-facet');

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    count: PropTypes.number.isRequired,
    items: (...args) => itemsPropType(...args)
  })
);

export class ListFacetDropdown extends Component {
  static propTypes = {
    refine: PropTypes.func.isRequired,
    createURL: PropTypes.func.isRequired,
    canRefine: PropTypes.bool.isRequired,
    items: itemsPropType,
    showMore: PropTypes.bool,
    limit: PropTypes.number,
    showMoreLimit: PropTypes.number,
    transformItems: PropTypes.func,
    className: PropTypes.string
  };

  renderItem = (item) => {
    const { createURL, refine } = this.props;

    return (
      <ListFacetDropdownLink
        className={cx('option-link')}
        onClick={() => refine(item.value)}
        href={createURL(item.value)}
      >
        <span className={cx('option-label')}>{item.label}</span>
      </ListFacetDropdownLink>
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

const ListFacetDropdownComponent = props => (
  <PanelCallbackHandler {...props}>
    <ListFacetDropdown {...props} />
  </PanelCallbackHandler>
);

export default connectHierarchicalMenu(ListFacetDropdownComponent);
