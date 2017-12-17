import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import Image from "@times-components/image";
import Loading from "./card-loading";

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 10
  }
});

class CardComponent extends React.Component {
  render() {
    const {
      isLoading,
      image,
      imageRatio,
      imageSize,
      showImage,
      style,
      children
    } = this.props;

    if (isLoading) {
      return (
        <View>
          <Loading aspectRatio={imageRatio} />
        </View>
      );
    }

    const imageComponent =
      image && image.uri ? (
        <View style={styles.imageContainer}>
          <Image
            uri={`${image.uri}&resize=${imageSize}`}
            aspectRatio={imageRatio}
          />
        </View>
      ) : null;

    return (
      <View onLayout={this.handleLayout}>
        <View style={style}>
          {showImage ? imageComponent : null}
          <View>{children}</View>
        </View>
      </View>
    );
  }
}

CardComponent.propTypes = {
  image: PropTypes.shape({ uri: PropTypes.string }),
  isLoading: PropTypes.bool
};

CardComponent.defaultProps = {
  image: {
    uri: ""
  },
  isLoading: false
};

export default CardComponent;
