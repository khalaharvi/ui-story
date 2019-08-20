import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connectStats, connectSearchBox } from 'react-instantsearch/connectors';

import { Reset as ResetIcon } from 'icons';
import { createClassNames } from 'utils';

const cx = createClassNames('search-box');

export class SearchBox extends Component {
  static propTypes = {
    currentRefinement: PropTypes.string,
    className: PropTypes.string,
    refine: PropTypes.func.isRequired,
    nbHits: PropTypes.number,

    onSubmit: PropTypes.func,
    onReset: PropTypes.func,
    onChange: PropTypes.func,
    placeholder: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),

    isSearchStalled: PropTypes.bool
  };

  static defaultProps = {
    currentRefinement: '',
    className: '',
    isSearchStalled: false
  };

  onSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.input.blur();

    return false;
  };

  onChange = (e) => {
    const { refine, onChange } = this.props;

    refine(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  onReset = (e) => {
    const { refine, onReset } = this.props;

    refine('');
    this.input.focus();

    if (onReset) {
      onReset(e);
    }
  };

  getQuery = () => this.props.currentRefinement;
  getPlaceholder = () => {
    const { placeholder, nbHits } = this.props;

    if (placeholder) {
      return (typeof placeholder === 'function') ? placeholder(nbHits) : placeholder;
    }

    return null;
  }

  render() {
    const {
      className,
      isSearchStalled
    } = this.props;

    const query = this.getQuery();
    const placeholder = this.getPlaceholder();
    const searchInputEvents = Object.keys(this.props).reduce((props, prop) => {
      if (
        ['onsubmit', 'onreset', 'onchange'].indexOf(prop.toLowerCase()) === -1 &&
        prop.indexOf('on') === 0
      ) {
        return { ...props, [prop]: this.props[prop] };
      }

      return props;
    }, {});

    return (
      <div className={classNames(cx(''), className)}>
        <form
          noValidate
          onSubmit={this.props.onSubmit ? this.props.onSubmit : this.onSubmit}
          onReset={this.onReset}
          className={cx('form', isSearchStalled && 'form--stalledSearch')}
          action=""
          role="search"
        >
          <div className={cx('input-container')}>
            <input
              ref={(input) => { this.input = input; }}
              type="search"
              placeholder={placeholder}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              value={query}
              onChange={this.onChange}
              {...searchInputEvents}
              className={cx('input')}
            />
            <button hidden={!query || isSearchStalled} type="reset" className={cx('input-button')}>
              <ResetIcon className={cx('input-icon')} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connectStats(connectSearchBox(SearchBox));
