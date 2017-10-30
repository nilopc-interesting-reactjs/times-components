/* eslint-env jest */

import "react-native";
import React from "react";
import renderer from "react-test-renderer";
import TextTweak from "./text-tweak";

it("renders correctly", () => {
  const tree = renderer.create(<TextTweak>r2d2</TextTweak>).toJSON();

  expect(tree).toMatchSnapshot();
});
