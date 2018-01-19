
import React from "react";
import PropTypes from "prop-types";

import makeHarness from "./dom-context-harness";
import {propTypes, defaultProps} from "./dom-context-prop-types";

export default class DOMContext extends React.PureComponent {

  handleDivRef = (div) => {
    const {
      scriptUris,
      globalNames,
      init,
      data
    } = this.props;

    const harness = makeHarness({
      el: div,
      onError: this.onError,
      scriptUris,
      globalNames,
      init,
      data
    });

    harness.execute();
  }

  render() {
    const { width, height } = this.props;
    return (
      <div style={{width, height}} id="dom-context-element" ref={this.handleDivRef} />
    );
  }

  onError = (e) => {
    if (process.env.NODE_ENV !== "production") {
      alert(`Error in DomContext: ${e}`);
    }
  }
}

DOMContext.propTypes = propTypes;
DOMContext.defaultProps = defaultProps;
