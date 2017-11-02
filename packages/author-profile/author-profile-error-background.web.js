import React from "react";
import StylePropTypes from "react-style-proptype";
import { View } from "react-native";

const Background = ({ style }) => (
  <View style={style} />
)

Background.defaultProps = {
  style: null
};

Background.propTypes = {
  // eslint-disable-next-line react/no-typos
  style: StylePropTypes.supportingArrays
}

export default Background;
