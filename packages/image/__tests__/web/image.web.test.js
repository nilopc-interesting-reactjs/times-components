/* eslint-env jest */

import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Image from "../../image";

it("renders correctly", () => {
  const tree = renderer
    .create(<Image uri="http://example.com/image.jpg" aspectRatio={3 / 2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("waits until a new image has loaded before removing the old", () => {
  const component = shallow(<Image uri="http://example.com/image1.jpg" aspectRatio={3 / 2} />);

  expect(component.dive("img")).toMatchSnapshot();

  component.setProps({uri: "http://example.com/image2.jpg"});

  console.log(component);

  expect(component).toMatchSnapshot();
});

it("allows styling", () => {
  const tree = renderer
    .create(
      <Image
        style={{ width: 100 }}
        uri="http://example.com/image.jpg"
        aspectRatio={3 / 2}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("prepends https schema", () => {
  const tree = renderer
    .create(<Image uri="//example.com/image.jpg" aspectRatio={3 / 2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
