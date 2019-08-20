import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { createClassNames } from 'utils';
import {
  Search as SearchIcon,
  Reset as ResetIcon
} from 'icons';
import PoweredBy from 'components/PoweredBy';
import NavBarLogo from './NavBarLogo';

const cx = createClassNames('navbar');

const getNavBarLogoProps = (logo, logoLinkTo) => {
  let navBarLogoProps = {
    to: logoLinkTo || null
  };

  if (React.isValidElement(logo)) {
    navBarLogoProps = Object.assign({}, navBarLogoProps, { logo });
  } else {
    navBarLogoProps = Object.assign({}, navBarLogoProps, {
      src: logo.src,
      alt: logo.alt
    });
  }

  return navBarLogoProps;
};

class NavBar extends Component {
  static propTypes = {
    className: PropTypes.string,
    logo: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
      })
    ]),
    logoLinkTo: PropTypes.string,
    searchInputComponent: PropTypes.func.isRequired,
    poweredBy: PropTypes.bool,
    mobile: PropTypes.bool
  };

  static defaultProps = {
    poweredBy: true,
    mobile: false
  };

  state = {
    searchInputVisible: false
  };

  toggleSearchInput = (e) => {
    e.preventDefault();

    this.setState({ searchInputVisible: !this.state.searchInputVisible }, () => {
      if (this.state.searchInputVisible) {
        if (this.searchInput) {
          this.searchInput.focus();
        }
      }
    });
  };

  render() {
    const {
      logo,
      logoLinkTo,
      children,
      searchInputComponent: SearchInputComponent,
      className,
      poweredBy,
      mobile
    } = this.props;

    return (
      <div
        className={classnames(
          cx(''),
          className,
          {
            [cx('mobile')]: mobile
          }
        )}
      >
        <div className={cx('inner')}>
          { logo && <NavBarLogo {...getNavBarLogoProps(logo, logoLinkTo)} />}
          {
            (!mobile || (mobile && !this.state.searchInputVisible)) &&
              <nav className={cx('nav')}>
                <ul className={cx('nav-list')}>
                  {
                    Children.map(children, child => (
                      <li className={cx('nav-list-item')}>{child}</li>
                    ))
                  }
                </ul>
              </nav>
          }
          {
            (!mobile || (mobile && this.state.searchInputVisible)) &&
              <div className={cx('search')}>
                <SearchInputComponent
                  inputRef={(searchInput) => {
                    this.searchInput = searchInput;
                  }}
                />
              </div>
          }
          {(poweredBy && !mobile) && <PoweredBy />}
          {mobile &&
            <button onClick={this.toggleSearchInput} className={cx('search-toggle')}>
              { this.state.searchInputVisible ? <ResetIcon /> : <SearchIcon />}
            </button>
          }
        </div>
      </div>
    );
  }
}

export default NavBar;
