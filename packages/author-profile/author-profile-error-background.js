import React from "react";
import StylePropTypes from "react-style-proptype";
import { Image } from "react-native";
import mobileImage from "./images/mobile.png";


const Background = ({ style }) => (
  <Image style={style} source={mobileImage}/>
)

Background.defaultProps = {
  style: null
};

Background.propTypes = {
  // eslint-disable-next-line react/no-typos
  style: StylePropTypes.supportingArrays
}

export default Background;
