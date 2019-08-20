import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withTheme } from 'emotion-theming';

import ListFacet from './ListFacet';
import ListFacetOptionsList from './ListFacetOptionsList';
import ListFacetOptionsListItem from './ListFacetOptionsListItem';
import ListFacetShowMoreButton from './ListFacetShowMoreButton';

const itemsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    value: PropTypes.any,
    label: PropTypes.node.isRequired,
    items: (...args) => itemsPropType(...args)
  })
);

class ListFacetOptions extends Component {
  static propTypes = {
    cx: PropTypes.func.isRequired,
    items: itemsPropType,
    renderItem: PropTypes.func.isRequired,
    showMore: PropTypes.bool,
    limit: PropTypes.number,
    showMoreLimit: PropTypes.number,
    canRefine: PropTypes.bool,
    className: PropTypes.string
  };

  constructor() {
    super();

    this.state = {
      extended: false
    };
  }

  onShowMoreClick = () => {
    this.setState(state => ({
      extended: !state.extended
    }));
  };

  getLimit = () => {
    const { limit, showMoreLimit } = this.props;
    const { extended } = this.state;
    return extended ? showMoreLimit : limit;
  };

  renderItem = (item) => {
    const items = item.items && (
      <ListFacetOptionsList>
        {item.items
          .slice(0, this.getLimit())
          .map(child => this.renderItem(child, item))}
      </ListFacetOptionsList>
    );

    return (
      <ListFacetOptionsListItem
        className={this.props.cx(
          'option',
          item.isRefined && 'option--active',
          item.noRefinement && 'option--noRefinement',
          items && 'option--parent'
        )}
        key={item.key || item.label}
        isRefined={item.isRefined}
        noRefinement={item.noRefinement}
        parent={!!items}
      >
        {this.props.renderItem(item)}
        {items}
      </ListFacetOptionsListItem>
    );
  };

  renderShowMore() {
    const { showMore, cx } = this.props;
    const { extended } = this.state;
    const disabled = this.props.limit >= this.props.items.length;
    if (!showMore) {
      return null;
    }

    return (
      <ListFacetShowMoreButton
        disabled={disabled}
        className={cx('option--show-more', disabled && 'option--show-more--disabled')}
        onClick={this.onShowMoreClick}
      >
        View {extended ? 'Less' : 'More'}
      </ListFacetShowMoreButton>
    );
  }

  render() {
    const {
      cx,
      items,
      className,
      canRefine
    } = this.props;

    const rootClassName = classnames(cx(''), className);

    if (items.length === 0) {
      return <ListFacet className={rootClassName} canRefine={canRefine}>No results</ListFacet>;
    }

    // Always limit the number of items we show on screen, since the actual
    // number of retrieved items might vary with the `maxValuesPerFacet` config
    // option.
    return (
      <ListFacet className={rootClassName} canRefine={canRefine}>
        <ListFacetOptionsList canRefine={canRefine}>
          {items
            .slice(0, this.getLimit())
            .map(item => this.renderItem(item))}
        </ListFacetOptionsList>
        {this.renderShowMore()}
      </ListFacet>
    );
  }
}

export default withTheme(ListFacetOptions);
