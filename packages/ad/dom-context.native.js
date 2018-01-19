
import React from "react";
import { WebView, View } from "react-native";
import PropTypes from "prop-types";

import makeHarness from "./dom-context-harness";
import {propTypes, defaultProps} from "./dom-context-prop-types";

export default class DOMContext extends React.PureComponent {

  render() {
    const { init, data, width, height, globalNames, scriptUris } = this.props;
    // NOTE: if this generated code is not working, and you don't know why
    // because React Native doesn't report errors in webview JS code, try
    // connecting a debugger to the app, console.log(html), copy and paste
    // the HTML into a file and run it in a browser.
    const html = `
      <html>
        <head>
        <meta name="viewport" content="width=${width},height=${height},initial-scale=1,user-scalable=no">
        </head>
        <body>
          <div id="dom-context-element"></div>
          <script>
            var harness = (${makeHarness})({
              el: document.getElementById("dom-context-element"),
              window: window,
              document: document,
              init: ${init},
              data: ${JSON.stringify(data)},
              scriptUris: ${JSON.stringify(scriptUris)},
              globalNames: ${JSON.stringify(globalNames)}
            });
            harness.execute();
          </script>
        </body>
      </html>
    `;
    // console.log(html);
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
