/* eslint-env jest */

import "react-native";
import React from "react";
import { Text } from "react-native";
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from "react-test-renderer";
import DatePublication from "../date-publication";
import styled from "styled-components";

describe("Date Publication test", () => {
  const props = {
    date: new Date("2017-07-01T14:32:00.000Z"),
    publication: "TIMES"
  };

  it("renders a DatePublication component with content", () => {
    const tree = renderer.create(<DatePublication {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders a DatePublication component with red font color", () => {
    const styleProps = {
      ...props,
      style: {
        color: "red"
      }
    };
    const tree = renderer.create(<DatePublication {...styleProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with a text component", () => {
    const textProps = {
      ...props,
      WrapperComponent: Text
    };
    const tree = renderer.create(<DatePublication {...textProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders with a styled component wrapper", () => {
    const styledComponent = styled(Text)`
      color: red;
    `;

    const textProps = {
      ...props,
      WrapperComponent: styledComponent
    };
    const tree = renderer.create(<DatePublication {...textProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
