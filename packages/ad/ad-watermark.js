import React from "react";
import { View, Image } from "react-native";
import PropTypes from "prop-types";

const calculateImageLayout = (width, height) => {
  const naturalWidth = 830;
  const naturalHeight = 300;
  const layout = (left, top, scale) => ({
    left,
    top,
    width: naturalWidth * scale,
    height: naturalHeight * scale
  });

  if (width >= 970 && height >= 250) {
    return layout(390, -45, 1.13);
  }

  if (width >= 728 && height >= 90) {
    return layout(381, -46, 0.615);
  }

  if (width >= 300 && height >= 250) {
    return layout(30, 0, 1);
  }

  return layout(50, 0, 1);
};


const AdWatermark = ({ width, height }) => {
  const l = calculateImageLayout(width, height);

  return (
    <View>
      <Image
        source={{uri:'http://localhost:8080/watermark.svg'}}
        width={width}
        height={height}
      />
    </View>
    // <div
    //   style={{
    //     width,
    //     height,
    //     background: 'url(http://localhost:8080/watermark.svg) no-repeat',
    //     backgroundPosition: `${l.left}px ${l.top}px`,
    //     backgroundSize: `${l.width}px ${l.height}px`,
    //   }}
    // />
  );
};

AdWatermark.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

export default AdWatermark;
