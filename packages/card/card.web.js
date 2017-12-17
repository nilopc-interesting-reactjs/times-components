import React from "react";
import PropTypes from "prop-types";
import { View } from "react-native";
import Image from "@times-components/image";
import Loading from "./card-loading";
import {
  ImageContainer,
  SummaryContainer,
  CardContainer
} from "./card-styles.web";

class CardComponent extends React.Component {
  shouldComponentUpdate(nextProps) {
    const { image: { uri }, imageSize, isLoading } = this.props;
    return (
      uri !== nextProps.image.uri ||
      imageSize !== nextProps.imageSize ||
      isLoading !== nextProps.isLoading
    );
  }
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
          <Loading imageRatio={imageRatio} />
        </View>
      );
    }

    const imageComponent =
      image && image.uri ? (
        <ImageContainer>
          <Image
            uri={`${image.uri}&resize=${imageSize || 100}`}
            aspectRatio={imageRatio}
          />
        </ImageContainer>
      ) : null;

    return (
      <View>
        <CardContainer style={style}>
          {showImage ? imageComponent : null}
          <SummaryContainer>{children}</SummaryContainer>
        </CardContainer>
      </View>
    );
  }
}

CardComponent.propTypes = {
  image: PropTypes.shape({ uri: PropTypes.string })
};

CardComponent.defaultProps = {
  image: {
    uri: ""
  }
};

export default CardComponent;
