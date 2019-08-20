import React, { Component } from 'react';
import PropTypes from 'prop-types';

import AccordionMenuList from './AccordionMenuList';
import AccordionMenuListItem from './AccordionMenuListItem';
import AccordionMenuToggle from './AccordionMenuToggle';
import AccordionMenuButton from './AccordionMenuButton';
import AccordionMenuFavoriteButton from './AccordionMenuFavoriteButton';

class AccordionMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: null
    };

    this.alignRight = props.alignRight;
    this.small = props.small;
  }

  toggleMenu = (index) => {
    const { active } = this.state;
    const newActive = active !== index ? index : null;

    this.setState({ active: newActive });
  }

  renderItem = (item, index) => {
    if (!item.label && !item.render && (item.render && typeof item.render !== 'function')) {
      throw new Error("You must either provide a 'label' or a 'render' function!");
    }

    let renderedItem = (
      <AccordionMenuButton
        onClick={item.onClick || undefined}
        alignRight={this.alignRight}
        {...item.attributes}
      >
        {item.label}
      </AccordionMenuButton>
    );

    if (item.render && typeof item.render === 'function') {
      renderedItem = React.cloneElement(item.render(), {
        alignRight: this.alignRight,
        small: this.small
      });
    }

    if (item.href) {
      renderedItem = (
        <a
          href={item.href}
          onClick={item.onClick || undefined}
          {...item.attributes}
        >
          {item.label}
        </a>
      );
    }

    return (
      <AccordionMenuListItem key={index} alignRight={this.alignRight}>
        {renderedItem}
      </AccordionMenuListItem>
    );
  }

  renderListItem = (item, index) => {
    const hasChildren = item.items && item.items.length > 0;
    const currentlyActive = this.state.active === index;

    if (hasChildren && item.render && typeof item.render === 'function') {
      throw new Error('Cannot render a custom component for a sub-menu!');
    }

    if (!hasChildren) {
      return this.renderItem(item, index);
    }

    return (
      <AccordionMenuListItem key={index} alignRight={this.alignRight}>
        <AccordionMenuList active={currentlyActive} alignRight={this.alignRight}>
          {
            item.items.map((childItem, i) =>
              this.renderListItem(childItem, `child-${index}-${i}`))
          }
        </AccordionMenuList>
        <AccordionMenuToggle
          alignRight={this.alignRight}
          active={currentlyActive}
          onClick={() => { this.toggleMenu(index); }}
          small={this.small}
        >
          {item.label}
        </AccordionMenuToggle>
      </AccordionMenuListItem>
    );
  }

  render() {
    const { items } = this.props;

    return (
      <AccordionMenuList root alignRight={this.alignRight} small={this.small}>
        {
          items.map((item, i) => this.renderListItem(item, i))
        }
      </AccordionMenuList>
    );
  }
}

AccordionMenu.propTypes = {
  alignRight: PropTypes.bool,
  small: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    render: PropTypes.func,
    href: PropTypes.string,
    onClick: PropTypes.func,

    items: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      render: PropTypes.func,
      href: PropTypes.string,
      onClick: PropTypes.func
    }))
  })).isRequired
};

AccordionMenu.defaultProps = {
  alignRight: false,
  small: false
};

AccordionMenu.Button = AccordionMenuButton;
AccordionMenu.FavoriteButton = AccordionMenuFavoriteButton;

export default AccordionMenu;
