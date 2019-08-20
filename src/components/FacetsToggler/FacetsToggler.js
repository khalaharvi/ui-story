import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';
import Button from 'components/Button';

const cx = createClassNames('facets-toggler');
export const defaultToggleClassName = createClassNames('facets')('visible');

class FacetsToggler extends Component {
  static propTypes = {
    toggleClassName: PropTypes.string
  };

  state = {
    visible: false
  };

  componentDidMount() {
    this.body = document.body;
  }

  componentWillUnmount() {
    this.body.classList.remove(...this.getVisibleClassnames());
  }

  onClick = () => {
    const { visible } = this.state;

    this.setState({
      visible: !visible
    }, () => {
      if (visible) {
        this.body.classList.remove(...this.getVisibleClassnames());
      } else {
        this.body.classList.add(...this.getVisibleClassnames());
      }
    });
  };

  getVisibleClassnames() {
    const classNames = [defaultToggleClassName];
    const { toggleClassName } = this.props;

    if (toggleClassName) {
      classNames.push(toggleClassName);
    }

    return classNames;
  }

  render() {
    const { visible } = this.state;
    const { className } = this.props;

    return (
      <div className={classnames(cx(''), className)}>
        <Button
          className={cx('toggle')}
          onClick={this.onClick}
          label={`${visible ? 'Hide' : 'Refine'} Search`}
          type="secondary"
        />
      </div>
    );
  }
}

export default FacetsToggler;
