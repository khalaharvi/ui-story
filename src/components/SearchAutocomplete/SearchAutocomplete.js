import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connectAutoComplete } from 'react-instantsearch/connectors';
import Autosuggest from 'react-autosuggest';

import { createClassNames } from 'utils';
import SearchAutocompleteHit from './SearchAutocompleteHit';
import SearchAutocompleteInput from './SearchAutocompleteInput';

export const cx = createClassNames('search-autocomplete');

export class SearchAutocomplete extends Component {
  state = {
    value: this.props.currentRefinement
  };

  onSuggestionsClearRequested = () => {
    const { refine } = this.props;

    /**
     * Workaround to be able to get the input value when hitting the submit button
     * Current input value is stored before it gets cleared by "refine('')"
     */
    if (this.input) {
      this.setState({ value: this.input.value });
    }

    refine('');
  };

  onSuggestionSelected = (event, {
    suggestion,
    suggestionValue,
    suggestionIndex,
    sectionIndex,
    method
  }) => {
    if (method === 'enter') {
      event.preventDefault();
    }

    const { onHitSelected } = this.props;

    if (onHitSelected) {
      onHitSelected(event, {
        hit: suggestion,
        hitValue: suggestionValue,
        hitIndex: suggestionIndex,
        sectionIndex,
        method
      });
    }
  };

  onInputChange = (e) => {
    const { onChange } = this.props;

    this.setState({ value: e.target.value });

    if (onChange) {
      onChange(e);
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    const { onSubmit } = this.props;

    if (this.input) {
      this.input.blur();
    }

    if (onSubmit) {
      onSubmit(this.state.value);
    }

    this.setState({ value: '' });
  };

  render() {
    const {
      // connectAutoComplete props
      currentRefinement,
      hits,
      refine,

      className,
      getHitValue,
      highlightFirstHit,
      hitImageKey,
      hitTitleKey,
      multiSection,
      placeholder,
      renderHit,
      renderSectionTitle,
      inputRef,
      transformHit
    } = this.props;

    const renderSuggestion = renderHit || (hit => (
      <SearchAutocompleteHit
        hit={transformHit ? transformHit(hit) : hit}
        hitTitleKey={hitTitleKey}
        hitImageKey={hitImageKey}
      />
    ));

    const reactAutosuggestClassnames = {
      container: classnames(cx('container'), className),
      containerOpen: cx('container--open'),
      input: cx('input'),
      inputOpen: cx('input--open'),
      inputFocused: cx('input--focused'),
      suggestionsContainer: cx('suggestions-container'),
      suggestionsContainerOpen: cx('suggestions-container--open'),
      suggestionsList: cx('suggestions-list'),
      suggestion: cx('suggestion'),
      suggestionFirst: cx('suggestion--first'),
      suggestionHighlighted: cx('suggestion--highlighted'),
      sectionContainer: cx('section-container'),
      sectionContainerFirst: cx('section-container--first'),
      sectionTitle: cx('section-title')
    };

    return (
      <form onSubmit={this.onFormSubmit} noValidate action="" role="search">
        <Autosuggest
          ref={(autosuggest) => {
            if (autosuggest !== null) {
              this.input = autosuggest.input;

              if (inputRef) {
                inputRef(autosuggest.input);
              }
            }
          }}
          getSectionSuggestions={section => section.hits}
          getSuggestionValue={getHitValue}
          highlightFirstSuggestion={highlightFirstHit}
          inputProps={{
            onChange: this.onInputChange,
            placeholder,
            value: currentRefinement
          }}
          multiSection={multiSection}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={this.onSuggestionSelected}
          onSuggestionsFetchRequested={({ value }) => refine(value)}
          renderInputComponent={SearchAutocompleteInput}
          renderSectionTitle={renderSectionTitle}
          renderSuggestion={renderSuggestion}
          suggestions={hits}
          theme={reactAutosuggestClassnames}
          focusInputOnSuggestionClick={false}
        />
      </form>
    );
  }
}

SearchAutocomplete.propTypes = {
  currentRefinement: PropTypes.string,
  hits: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
  refine: PropTypes.func.isRequired,

  className: PropTypes.string,
  getHitValue: PropTypes.func.isRequired,
  highlightFirstHit: PropTypes.bool,
  hitImageKey: PropTypes.string,
  hitTitleKey: (props, propName) => {
    const hitTitleKey = props[propName];

    if (props.renderHit === undefined && typeof hitTitleKey !== 'string') {
      throw new Error("'hitTitleKey' is required.");
    }
  },
  multiSection: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onHitSelected: PropTypes.func,
  placeholder: PropTypes.string,
  renderHit: PropTypes.func,
  renderSectionTitle: (props, propName) => {
    const renderSectionTitle = props[propName];

    if (props.multiSection === true && typeof renderSectionTitle !== 'function') {
      throw new Error("'renderSectionTitle' is required.");
    }
  },
  inputRef: PropTypes.func,
  transformHit: PropTypes.func
};

SearchAutocomplete.defaultProps = {
  currentRefinement: '',
  highlightFirstHit: false,
  multiSection: false,
  placeholder: 'Search...',
  onChange: () => {}
};

export default connectAutoComplete(SearchAutocomplete);
