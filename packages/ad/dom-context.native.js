
import React from "react";
import { WebView, View } from "react-native";
import PropTypes from "prop-types";

import harness from "./dom-context-harness";
import {propTypes, defaultProps} from "./dom-context-prop-types";

export default class DOMContext extends React.PureComponent {

  render() {
    const { init, data, width, height, globalNames, scriptUris } = this.props;
    const html = `
      <html>
        <head>
        <meta name="viewport" content="width=${width},height=${height},initial-scale=1,user-scalable=no">
        </head>
        <body>
          <div id="dom-context-element"></div>
          <script>
            (${harness})({
              el: document.getElementById("dom-context-element"),
              init: ${init},
              data: ${JSON.stringify(data)},
              scriptUris: ${JSON.stringify(scriptUris)},
              globalNames: ${JSON.stringify(globalNames)}
            });
          </script>
        </body>
      </html>
    `;
    return (
      <View
        style={{ width, height }}>
        <WebView
          source={{ html }}
          onError={e => alert(`onError: ${e}`)}
          onMessage={e => alert(`onMessage: ${e.nativeEvent.data}`)}
        />
      </View>
    );
  }
}

DOMContext.propTypes = propTypes;
DOMContext.defaultProps = defaultProps;
